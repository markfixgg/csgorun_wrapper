import {IRunInventoryItem, IUser} from "../../models/User";
import request from "request-promise-native";
//@ts-ignore
import UserAgent from 'user-agents';
import {IRunBet, IRunCurrentState, IRunExchange} from "../../ts/interfaces/run_interfaces";

class RunApi {
    private run_url: string;
    private api_run_url: string;
    user: IUser;

    constructor({user}: {user: IUser}) {
        this.user = user;
        this.run_url= `https://csgorun.gg`;
        this.api_run_url = `https://api.csgorun.gg`;
    }

    async request ({url, body = {}, headers = {}, proxy, method = "GET"}: {url: string, body?: object, headers?: object, proxy?: string, method?: string}) {
        return await request(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                ...headers,
                'authorization': this.user?.run?.token ? `JWT ${this.user?.run?.token}` : undefined,
                'User-Agent': this.user?.userAgent || new UserAgent().toString()
            },
            proxy: proxy || this.user?.proxy || null
        })
            .then(response => {
                if (response.includes("Unauthorized")) return {success: false, message: "Unauthorized!"};
                return JSON.parse(response);
            })
            .catch(error => ({success: false, error: error.message}));
    }

    async currentState(): Promise<IRunCurrentState> {
        return this.request({
            url: `${this.api_run_url}/current-state?montaznayaPena=null`
        })
    }

    async availableItems() {
        return this.request({
            url: `https://cloud.this.team/csgo/items.json?v=${Date.now()}`
        })
    }

    async getBalance() {
        const state = await this.currentState();
        if(!state.data?.user) return {success: false, message: "User not authenticated!"};

        let balance = state.data.user.balance || 0;
        state.data.user.items?.map(item => balance += Number(item.price));

        return balance;
    }

    async getActiveDepositMethods() {
        const currentState = await this.currentState();
        return currentState.data?.paymentMethods;
    }

    async discount({code}: {code: string}) {
        return this.request({
            url: `${this.api_run_url}/discount`,
            method: "POST",
            body: {code}
        })
    }

    async deposit() {

    }

    async withdraw() {

    }

    async bet({auto, userItemIds}: {auto: number, userItemIds: IRunInventoryItem[]}): Promise<IRunBet> {
        return this.request({
            url: `${this.api_run_url}/make-bet`,
            method: "POST",
            body: {
                auto,
                userItemIds: userItemIds.map((item: IRunInventoryItem) => item.id)
            }
        })
    }

    async exchange({userItemIds, wishItemIds}: {userItemIds: IRunInventoryItem[], wishItemIds: any[]}): Promise<IRunExchange> {
        return this.request({
            url: `${this.api_run_url}/marketplace/exchange-items`,
            method: "POST",
            body: {
                wishItemIds,
                userItemIds: userItemIds.map((item: IRunInventoryItem) => item.id)
            }
        })
    }
}

export default RunApi

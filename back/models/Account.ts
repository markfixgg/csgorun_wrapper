import * as mongoose from 'mongoose';
import {IPromocode} from "./Promocode";

// Steam interfaces
interface ISteamInventoryItem {
    id: string;
    hashName: string;
    price: string;
}

interface ISteamGameItem {

}

export interface ISteam {
    nickname?: string;
    authed?: boolean;
    level?: number;
    image?: string;
    secretKey?: string;
    sharedKey?: string;
    email: string;
    password: string;
    balance?: string;
    cookies?: {
      name: string;
      value: string;
    }[];
    inventory?: ISteamInventoryItem[];
    games?: ISteamGameItem[];
}

// CSGORUN interfaces
export interface IRunInventoryItem {
    /** Идентификатор предмета в инвентаре */
    id: number;
    price?: number;
    /** Идентификатор предмета в магазине */
    itemId?: number;
    name?: string;
    entity?: string;
    qualityId?: number;
    isSlowWithdraw?: boolean;
}

export interface IRun {
    balance?: string;
    token?: string;
    state?: boolean;
    betState?: boolean;
    items?: IRunInventoryItem[];
    promocodes?: IPromocode[];
}

export interface IAccount {
    username: string;
    notifications?: [];
    proxy?: string;
    userAgent?: string;
    steam: ISteam;
    run?: IRun;
}

const accountSchema = new mongoose.Schema({
    username: { type: String, required: true },
    notifications: { type: Array, default: [] },
    proxy: { type: String, default: "" },
    userAgent: { type: String, default: "" },
    steam: {
        nickname: { type: String, default: "" },
        authed: { type: Boolean, default: false },
        level: { type: Number, default: 0 },
        image: { type: String, default: "" },
        secretKey: { type: String, default: "" },
        sharedKey: { type: String, default: "" },
        email: { type: String, required: true },
        password: { type: String, required: true },
        balance: {type: String, default: ""},
        cookies: [{
            name: String,
            value: String,
        }],
        inventory: [{
            id: String,
            hashName: String,
            price: String,
        }],
        games: Array,
    },
    run: {
        balance: { type: String, default: "" },
        token: { type: String, default: "" },
        active: { type: Boolean, default: true },
        betState: { type: Boolean, default: false },
        items: [{

        }],
        promocodes: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Promocode"
        }
    }
})

export default mongoose.model('Account', accountSchema);

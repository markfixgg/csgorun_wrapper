import { IAccount } from "../../models/Account";

export default function ({user} : {user: IAccount}) {
    const cookies = user.steam?.cookies;

    const puppeteerCookies = cookies?.map(item => ({

    }))
}

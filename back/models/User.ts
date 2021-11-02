import * as mongoose from 'mongoose';
import {IPromocode} from "./Promocode";

// Steam interfaces
interface ISteamInventoryItem {
    id: string,
    hashName: string,
    price: string
}

interface ISteamProfileGame {

}

interface ISteam {
    nickname: string,
    level: number,
    image: string,
    secretKey: string,
    sharedKey: string,
    email: string,
    password: string,
    balance: string,
    inventory: [ISteamInventoryItem],
    games: [ISteamProfileGame]
}

// CSGORUN interfaces
interface IRunInventoryItem {

}

interface IRun {
    balance: string,
    token: string,
    state: boolean,
    betState: boolean,
    items: [IRunInventoryItem],
    promocodes: [IPromocode]
}

interface IUser {
    username: string,
    proxy: string,
    userAgent: string,
    steam: ISteam,
    run: IRun
}

const userSchema = new mongoose.Schema({

})

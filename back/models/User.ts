import * as mongoose from 'mongoose';
import {IPromocode} from "./Promocode";

// Steam interfaces
interface ISteamInventoryItem {
    id: string,
    hashName: string,
    price: string
}

interface ISteamGameItem {

}

export interface ISteam {
    nickname?: string,
    level?: number,
    image?: string,
    secretKey?: string,
    sharedKey?: string,
    email?: string,
    password?: string,
    balance?: string,
    inventory?: ISteamInventoryItem[],
    games?: ISteamGameItem[]
}

// CSGORUN interfaces
export interface IRunInventoryItem {
    id: number;
    price?: number;
    itemId?: number;
    name?: string;
    entity?: string;
    description?: string;
    qualityId?: number;
    colorId?: number;
    isSlowWithdraw?: boolean;
}

export interface IRun {
    balance?: string,
    token?: string,
    state?: boolean,
    betState?: boolean,
    items?: IRunInventoryItem[],
    promocodes?: IPromocode[]
}

export interface IUser {
    username: string,
    proxy?: string,
    userAgent?: string,
    steam?: ISteam,
    run?: IRun
}

const userSchema = new mongoose.Schema({

})

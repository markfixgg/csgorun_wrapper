const {Schema, model} = require('mongoose');

// Steam interfaces
interface SteamInventoryItem {
    id: string,
    hashName: string,
    price: string
}

interface SteamProfileGame {

}

interface Steam {
    nickname: string,
    level: number,
    image: string,
    secretKey: string,
    sharedKey: string,
    email: string,
    password: string,
    balance: string,
    inventory: [SteamInventoryItem],
    games: [SteamProfileGame]
}

// CSGORUN interfaces
interface RunInventoryItem {

}

interface RunPromocode {
    text: string,
    active: boolean,
    timestamp: Date
}

interface Run {
    balance: string,
    token: string,
    state: boolean,
    betState: boolean,
    items: [RunInventoryItem],
    promocodes: [RunPromocode]
}

interface User {
    username: string,
    proxy: string,
    userAgent: string,
    steam: Steam,
    run: Run
}

const userSchema = new Schema({

})

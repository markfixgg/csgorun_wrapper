import {Express} from "express";
import RunApi from "./modules/RunApi";
import SteamID from 'steamid';

import SteamCommunity from 'steamcommunity';

module.exports = (app: Express) => {
    app.get('/', async (req, res) => {
        const api = new RunApi({
            user: {
                username: 'markfix'
            }
        });

        const balance = await api.discount({
            code: 'test'
        });

        res.send(balance)
    })

    app.post('/authenticate', async (req, res) => {
        const { accountName, password, authCode, twoFactorCode } = req.body;
        let community = new SteamCommunity();

        // const response = await new Promise((resolve, reject) => {
        //     community.login({
        //         accountName,
        //         password,
        //         authCode,
        //         twoFactorCode
        //     }, ((err, sessionID, cookies, steamguard, oAuthToken) => {
        //         if(err) reject(err)
        //         resolve({sessionID, cookies, steamguard, oAuthToken})
        //     }));
        // }).catch(err => err.toString())

        community.setCookies([
            "Steam_Language=english",
            "timezoneOffset=0,0",
            "steamCountry=UA%7C7153754013df815dda3f797c0d0f0e76",
            "steamMachineAuth76561198420960878=666796324663125386676E3E49C1DED28ECD23AD",
            "steamLoginSecure=76561198420960878%7C%7CB1BD6A61AF6790B175FCE9D651B4C4F0214708F6",
            "sessionid=63d76d1cfc66bc85c79490b0"
        ])

        //@ts-ignore
        community.editProfile({summary: `{"description": "..."}

WingMan
GLOBAL ELITE 10.06.21`},() => {
            res.send('ok')
        })
    })
}

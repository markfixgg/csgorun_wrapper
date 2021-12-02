import { Express } from "express";
import controllers from './controllers';

module.exports = (app: Express) => {
    app.get('/accounts', controllers.AccountsCtrl.getAll);
    app.get('/accounts/:_id', controllers.AccountsCtrl.get);
    app.post('/accounts', controllers.AccountsCtrl.create);
    app.delete('/accounts/:_id', controllers.AccountsCtrl.delete);

    app.post('/authenticate', async (req, res) => {
        const { accountName, password, authCode, twoFactorCode } = req.body;

        res.send('ok');
    });
}

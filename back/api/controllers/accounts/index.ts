import { Request, Response } from "express";
import Account, {IAccount} from "../../../models/Account";
import { Types } from 'mongoose';

class AccountsCtrl {
    async get(req: Request, res: Response) {
        const { _id } = req.params;
        if(!_id || !Types.ObjectId.isValid(_id)) {
            return res.status(400).send({success: false, message: "Missing _id in params!"})
        }

        const account = await Account.findById(_id);
        if(!account) {
            return res.status(400).send({success: false, message: "Account with following id not found."})
        }

        return res.status(200).send({success: true, account});
    }

    async getAll(req: Request, res: Response) {
        const accounts = await Account.find({});

        return res.status(200).send({success: true, accounts});
    }

    async create(req: Request, res: Response) {
        const { username, email, password } = req.body;
        if(!username) return res.status(400).send({success: false, message: "Missing username."})
        if(!email) return res.status(400).send({success: false, message: "Missing email."})
        if(!password) return res.status(400).send({success: false, message: "Missing password."})

        const account: IAccount = {
            username,
            steam: {
                email,
                password
            }
        }

        const savedAccount = await new Promise(resolve => Account.create(account, (err, account) => resolve(account)));

        res.status(200).send({success: true, account: savedAccount})

    }

    async delete(req: Request, res: Response) {
        const { _id } = req.params;
        if(!_id || !Types.ObjectId.isValid(_id)) {
            return res.status(400).send({success: false, message: "Missing _id in params!"})
        }

        await Account.findByIdAndDelete(_id);

        return res.status(200).send({ success: true });
    }
}

export default new AccountsCtrl();


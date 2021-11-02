import * as mongoose from "mongoose";

export interface IPromocode extends mongoose.Document {
    text: string;
    active: boolean;
    timestamp: Date;
}

const promocodeSchema = new mongoose.Schema({
    text: { type: String, required: true },
    active: { type: Boolean, default: false },
    timestamp: { type: Date, required: true }
})

export default mongoose.model<IPromocode>('Promocode', promocodeSchema);




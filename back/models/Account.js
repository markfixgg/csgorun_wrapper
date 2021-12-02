"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var accountSchema = new mongoose.Schema({
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
        balance: { type: String, default: "" },
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
        items: [{}],
        promocodes: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Promocode"
        }
    }
});
exports.default = mongoose.model('Account', accountSchema);

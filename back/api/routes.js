"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RunApi_1 = __importDefault(require("./modules/RunApi"));
var steamcommunity_1 = __importDefault(require("steamcommunity"));
module.exports = function (app) {
    app.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var api, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new RunApi_1.default({
                        user: {
                            username: 'markfix'
                        }
                    });
                    return [4 /*yield*/, api.discount({
                            code: 'test'
                        })];
                case 1:
                    balance = _a.sent();
                    res.send(balance);
                    return [2 /*return*/];
            }
        });
    }); });
    app.post('/authenticate', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, accountName, password, authCode, twoFactorCode, community;
        return __generator(this, function (_b) {
            _a = req.body, accountName = _a.accountName, password = _a.password, authCode = _a.authCode, twoFactorCode = _a.twoFactorCode;
            community = new steamcommunity_1.default();
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
            ]);
            //@ts-ignore
            community.editProfile({ summary: "{\"description\": \"...\"}\n\nWingMan\nGLOBAL ELITE 10.06.21" }, function () {
                res.send('ok');
            });
            return [2 /*return*/];
        });
    }); });
};

"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var request_promise_native_1 = __importDefault(require("request-promise-native"));
//@ts-ignore
var user_agents_1 = __importDefault(require("user-agents"));
var RunApi = /** @class */ (function () {
    function RunApi(_a) {
        var user = _a.user;
        this.user = user;
        this.run_url = "https://csgorun.gg";
        this.api_run_url = "https://api.csgorun.gg";
    }
    RunApi.prototype.request = function (_a) {
        var _b, _c, _d, _e, _f, _g;
        var url = _a.url, _h = _a.body, body = _h === void 0 ? {} : _h, _j = _a.headers, headers = _j === void 0 ? {} : _j, proxy = _a.proxy, _k = _a.method, method = _k === void 0 ? "GET" : _k;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0: return [4 /*yield*/, (0, request_promise_native_1.default)(url, {
                            method: method,
                            body: JSON.stringify(body),
                            headers: __assign(__assign({}, headers), { 'authorization': ((_c = (_b = this.user) === null || _b === void 0 ? void 0 : _b.run) === null || _c === void 0 ? void 0 : _c.token) ? "JWT " + ((_e = (_d = this.user) === null || _d === void 0 ? void 0 : _d.run) === null || _e === void 0 ? void 0 : _e.token) : undefined, 'User-Agent': ((_f = this.user) === null || _f === void 0 ? void 0 : _f.userAgent) || new user_agents_1.default().toString() }),
                            proxy: proxy || ((_g = this.user) === null || _g === void 0 ? void 0 : _g.proxy) || null
                        })
                            .then(function (response) {
                            if (response.includes("Unauthorized"))
                                return { success: false, message: "Unauthorized!" };
                            return JSON.parse(response);
                        })
                            .catch(function (error) { return ({ success: false, error: error.message }); })];
                    case 1: return [2 /*return*/, _l.sent()];
                }
            });
        });
    };
    RunApi.prototype.currentState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request({
                        url: this.api_run_url + "/current-state?montaznayaPena=null"
                    })];
            });
        });
    };
    RunApi.prototype.availableItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request({
                        url: "https://cloud.this.team/csgo/items.json?v=" + Date.now()
                    })];
            });
        });
    };
    RunApi.prototype.getBalance = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var state, balance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.currentState()];
                    case 1:
                        state = _c.sent();
                        if (!((_a = state.data) === null || _a === void 0 ? void 0 : _a.user))
                            return [2 /*return*/, { success: false, message: "User not authenticated!" }];
                        balance = state.data.user.balance || 0;
                        (_b = state.data.user.items) === null || _b === void 0 ? void 0 : _b.map(function (item) { return balance += Number(item.price); });
                        return [2 /*return*/, balance];
                }
            });
        });
    };
    RunApi.prototype.getActiveDepositMethods = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var currentState;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.currentState()];
                    case 1:
                        currentState = _b.sent();
                        return [2 /*return*/, (_a = currentState.data) === null || _a === void 0 ? void 0 : _a.paymentMethods];
                }
            });
        });
    };
    RunApi.prototype.discount = function (_a) {
        var code = _a.code;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.request({
                        url: this.api_run_url + "/discount",
                        method: "POST",
                        body: { code: code }
                    })];
            });
        });
    };
    RunApi.prototype.deposit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RunApi.prototype.withdraw = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    RunApi.prototype.bet = function (_a) {
        var auto = _a.auto, userItemIds = _a.userItemIds;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.request({
                        url: this.api_run_url + "/make-bet",
                        method: "POST",
                        body: {
                            auto: auto,
                            userItemIds: userItemIds.map(function (item) { return item.id; })
                        }
                    })];
            });
        });
    };
    RunApi.prototype.exchange = function (_a) {
        var userItemIds = _a.userItemIds, wishItemIds = _a.wishItemIds;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.request({
                        url: this.api_run_url + "/marketplace/exchange-items",
                        method: "POST",
                        body: {
                            wishItemIds: wishItemIds,
                            userItemIds: userItemIds.map(function (item) { return item.id; })
                        }
                    })];
            });
        });
    };
    return RunApi;
}());
exports.default = RunApi;

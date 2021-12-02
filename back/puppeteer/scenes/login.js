"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(_a) {
    var _b;
    var user = _a.user;
    var cookies = (_b = user.steam) === null || _b === void 0 ? void 0 : _b.cookies;
    var puppeteerCookies = cookies === null || cookies === void 0 ? void 0 : cookies.map(function (item) { return ({}); });
}
exports.default = default_1;

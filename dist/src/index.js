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
exports.getEpicGames = void 0;
var axios_1 = __importDefault(require("axios"));
var config = __importStar(require("../config.json"));
var getEpicGames = function (country) { return __awaiter(void 0, void 0, void 0, function () {
    var games;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!country) {
                    throw new Error('Country is required');
                }
                return [4 /*yield*/, axios_1.default.get(config.epic_games_api_url + country).then(function (response) { return response.data; })];
            case 1:
                games = _a.sent();
                return [4 /*yield*/, filter(games)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getEpicGames = getEpicGames;
function filter(data) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var gamesObj, filteredGames;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, ((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.Catalog) === null || _b === void 0 ? void 0 : _b.searchStore) === null || _c === void 0 ? void 0 : _c.elements)];
                case 1:
                    gamesObj = _d.sent();
                    return [4 /*yield*/, (gamesObj === null || gamesObj === void 0 ? void 0 : gamesObj.filter(function (filteredObj) {
                            var _a, _b, _c, _d;
                            return (filteredObj === null || filteredObj === void 0 ? void 0 : filteredObj.offerType) === "BASE_GAME" &&
                                ((_b = (_a = filteredObj === null || filteredObj === void 0 ? void 0 : filteredObj.promotions) === null || _a === void 0 ? void 0 : _a.promotionalOffers) === null || _b === void 0 ? void 0 : _b.length) !== 0 &&
                                Date.parse((_d = (_c = filteredObj === null || filteredObj === void 0 ? void 0 : filteredObj.promotions) === null || _c === void 0 ? void 0 : _c.promotionalOffers[0].promotionalOffers[0]) === null || _d === void 0 ? void 0 : _d.startDate) < Date.now();
                        }))];
                case 2:
                    filteredGames = _d.sent();
                    return [4 /*yield*/, filteredGames.length];
                case 3:
                    if ((_d.sent()) > 0) {
                        return [2 /*return*/, filteredGames.map(function (game) {
                                var _a;
                                return {
                                    id: game.id,
                                    title: game.title,
                                    description: game.description,
                                    mainImage: (_a = game.keyImages[1].url) !== null && _a !== void 0 ? _a : game.keyImages[1].url,
                                    urlSlug: game.urlSlug
                                };
                            })];
                    }
                    return [2 /*return*/, []];
            }
        });
    });
}
//# sourceMappingURL=index.js.map
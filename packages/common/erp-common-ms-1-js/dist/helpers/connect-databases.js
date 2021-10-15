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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabases = void 0;
var erp_common_ms_utils_js_1 = require("@gmahechas/erp-common-ms-utils-js");
var register_mongo_models_1 = require("./register-mongo-models");
var connectDatabases = function () { return __awaiter(void 0, void 0, void 0, function () {
    var databases, _a, commandUri, queryUri;
    var _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                databases = erp_common_ms_utils_js_1.env.databases;
                if (!((_d = (_c = (_b = databases === null || databases === void 0 ? void 0 : databases.cqrs) === null || _b === void 0 ? void 0 : _b.mongo) === null || _c === void 0 ? void 0 : _c.command) === null || _d === void 0 ? void 0 : _d.uri) || !((_f = (_e = databases === null || databases === void 0 ? void 0 : databases.cqrs) === null || _e === void 0 ? void 0 : _e.mongo.query) === null || _f === void 0 ? void 0 : _f.uri)) {
                    throw new erp_common_ms_utils_js_1.ConnectDbError();
                }
                _a = databases.cqrs.mongo, commandUri = _a.command.uri, queryUri = _a.query.uri;
                return [4 /*yield*/, (0, erp_common_ms_utils_js_1.connectToMongo)({ uri: commandUri }, 'createConnection', register_mongo_models_1.registerMsMongoModels)];
            case 1:
                _g.sent();
                return [4 /*yield*/, (0, erp_common_ms_utils_js_1.connectToMongo)({ uri: queryUri }, 'createConnection', register_mongo_models_1.registerMsQueryMongoModels)];
            case 2:
                _g.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.connectDatabases = connectDatabases;

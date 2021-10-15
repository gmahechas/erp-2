"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMsQueryMongoModels = exports.registerMsMongoModels = void 0;
var user_mongo_1 = require("../modules/user/user.mongo");
exports.registerMsMongoModels = [
    user_mongo_1.registerUserModel
];
exports.registerMsQueryMongoModels = [];

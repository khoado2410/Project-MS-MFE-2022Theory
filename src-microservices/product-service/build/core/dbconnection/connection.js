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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const mongodb_1 = require("mongodb");
const uri = "mongodb://localhost:27017";
//const _client = new MongoClient(uri);
class MongoConnection {
    constructor() {
        this._client = new mongodb_1.MongoClient(uri);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Connect to the MongoDB cluster
                yield this._client.connect();
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._client.close();
        });
    }
}
exports.MongoConnection = MongoConnection;

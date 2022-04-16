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
exports.ProductDomainService = void 0;
const mongodb_1 = require("mongodb");
const connection_1 = require("../dbconnection/connection");
class ProductDomainService {
    insertProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            var db = new connection_1.MongoConnection();
            yield db.connect();
            try {
                var result = yield db._client.db('micro-service-product-db')
                    .collection('product')
                    .insertOne(product);
                console.log("Inserted product with id: " + result.insertedId);
                return result.insertedId;
            }
            catch (e) {
                console.log("Error when insert product ", e);
            }
            finally {
                yield db.disconnect();
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var db = new connection_1.MongoConnection();
            yield db.connect();
            try {
                var result = yield db._client.db('micro-service-product-db')
                    .collection('product')
                    .find().toArray();
                return result;
            }
            catch (e) {
                console.log("Error when get all products ", e);
            }
            finally {
                yield db.disconnect();
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var db = new connection_1.MongoConnection();
            yield db.connect();
            try {
                var res = yield db._client.db('micro-service-product-db')
                    .collection('product')
                    .find({ _id: new mongodb_1.ObjectId(id) }).next();
                return res;
            }
            catch (e) {
                console.log(`Error when get product ${id} `, e);
            }
            finally {
                yield db.disconnect();
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var db = new connection_1.MongoConnection();
            yield db.connect();
            try {
                var result = yield db._client.db('micro-service-product-db')
                    .collection('product')
                    .find({ _id: new mongodb_1.ObjectId(id) }).next();
                if (result == null)
                    return false;
                yield db._client.db('micro-service-product-db')
                    .collection('product')
                    .deleteOne({ _id: new mongodb_1.ObjectId(id) });
                return true;
            }
            catch (e) {
                console.log(`Error when delete product ${id} `, e);
                return false;
            }
            finally {
                yield db.disconnect();
            }
        });
    }
}
exports.ProductDomainService = ProductDomainService;

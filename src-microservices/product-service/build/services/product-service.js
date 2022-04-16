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
exports.ProductService = void 0;
const product_service_1 = require("../core/product-domain-service/product-service");
class ProductService {
    addNewProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            var productDomainService = new product_service_1.ProductDomainService();
            return yield productDomainService.insertProduct(product);
        });
    }
    getAllProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            var productDomainService = new product_service_1.ProductDomainService();
            return yield productDomainService.getAll();
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var productDomainService = new product_service_1.ProductDomainService();
            return yield productDomainService.getById(id);
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var productDomainService = new product_service_1.ProductDomainService();
            return yield productDomainService.deleteById(id);
        });
    }
}
exports.ProductService = ProductService;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_service_1 = require("../core/product-domain-service/product-service");
const client_1 = __importDefault(require("../logger/client"));
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
            // await producer.connect();
            // await producer.send({
            //         topic: 'micro-service-product',
            //         messages:  [{
            //             value: {message: 'Cannot get all products'}.message
            //         }]
            //     }).then(res => console.log(res))
            //logger.info(JSON.stringify({msg: 'Hello world'}))
            client_1.default.LogInfo({ topic: 'micro-service-product', level: 0, msg: '[ms-product]: get all products' }, (err, res) => {
                if (err) {
                    console.log('ERROR WHEN LOGGING FROM MS-PRODUCT', err);
                    throw err;
                }
                console.log(res);
            });
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

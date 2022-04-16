"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const product_service_1 = require("./services/product-service");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    var service = new product_service_1.ProductService();
    service.getAllProduct()
        .then((result) => {
        return res.status(200).json({
            result: result
        });
    });
});
app.get('/product/:id', (req, res) => {
    var service = new product_service_1.ProductService();
    service.getProductById(req.params.id.trim())
        .then((result) => {
        return res.status(200).json({
            result: result
        });
    });
});
app.delete('/product/:id', (req, res) => {
    var service = new product_service_1.ProductService();
    service.deleteProduct(req.params.id.trim())
        .then((result) => {
        if (result)
            return res.status(200).json({
                message: "delete successfully"
            });
        else
            return res.status(200).json({
                message: "delete failed"
            });
    });
});
app.post('/add-product', (req, res) => {
    var service = new product_service_1.ProductService();
    service.addNewProduct(req.body)
        .then((result) => {
        return res.status(200).json({
            id: result
        });
    });
});
app.listen(port, () => {
    console.log("The application is listening on port " + port);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, desc, price, listImgs = []) {
        this.name = name;
        this.description = desc;
        this.price = price;
        this.listImages = listImgs;
    }
}
exports.Product = Product;

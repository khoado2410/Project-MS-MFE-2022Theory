import { json } from "body-parser";
import { ProductDomainService } from "../core/product-domain-service/product-service";
import client from "../logger/client";
import { Product } from "../model/Product";

export class ProductService {
    async addNewProduct(product: Product) {
        var productDomainService = new ProductDomainService();
        return await productDomainService.insertProduct(product);
    }

    async getAllProduct() {
        var productDomainService = new ProductDomainService();
        client.LogInfo({topic: 'micro-service-product', level: 'info', msg: '[ms-product]: get all products'}, (err: any, res: any) => {
            if (err) {
                console.log('ERROR WHEN LOGGING FROM MS-PRODUCT', err)
                throw err
            }
            console.log(res);
        })
        // client.LogInfo({topic: 'micro-service-product', level: 1, msg: '[ms-product]: get all products'}, (err: any, res: any) => {
        //     if (err) {
        //         console.log('ERROR WHEN LOGGING FROM MS-PRODUCT', err)
        //         throw err
        //     }
        //     console.log(res);
        // })
        client.LogWarning({topic: 'micro-service-payment', level: 'warning', msg: '[Warning][ms-product]: get all products'}, (err: any, res: any) => {
            if (err) {
                console.log('ERROR WHEN LOGGING FROM MS-PRODUCT', err)
                throw err
            }
            console.log(res);
        })
    }

    async getProductById(id: any) {
        var productDomainService = new ProductDomainService();
        client.LogError({topic: 'micro-service-payment', level: 'error', msg: '[Error][ms-product]: get all products'}, (err: any, res: any) => {
            if (err) {
                console.log('ERROR WHEN LOGGING FROM MS-PRODUCT', err)
                throw err
            }
            console.log(res);
        })
        //return await productDomainService.getById(id)
    }

    async deleteProduct(id: any) {
        var productDomainService = new ProductDomainService();
        return await productDomainService.deleteById(id);
    }
}
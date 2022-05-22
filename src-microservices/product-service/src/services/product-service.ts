import { json } from "body-parser";
import { ProductDomainService } from "../core/product-domain-service/product-service";
import client from "../logger/client";
import { logger } from "../logger/log";
import { Product } from "../model/Product";

export class ProductService {
    async addNewProduct(product: Product) {
        var productDomainService = new ProductDomainService();
        return await productDomainService.insertProduct(product);
    }

    async getAllProduct() {
        var productDomainService = new ProductDomainService();

        // await producer.connect();
        // await producer.send({
        //         topic: 'micro-service-product',
        //         messages:  [{
        //             value: {message: 'Cannot get all products'}.message
        //         }]
        //     }).then(res => console.log(res))
        //logger.info(JSON.stringify({msg: 'Hello world'}))
        client.LogInfo({topic: 'micro-service-product', level: 0, msg: '[ms-product]: get all products'}, (err, res) => {
            if (err) {
                console.log('ERROR WHEN LOGGING FROM MS-PRODUCT', err)
                throw err
            }
            console.log(res);
        })
    }

    async getProductById(id: any) {
        var productDomainService = new ProductDomainService();
        return await productDomainService.getById(id)
    }

    async deleteProduct(id: any) {
        var productDomainService = new ProductDomainService();
        return await productDomainService.deleteById(id);
    }
}
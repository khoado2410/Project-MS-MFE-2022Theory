import { json } from "body-parser";
import { ProductDomainService } from "../core/product-domain-service/product-service";
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
        logger.info(JSON.stringify({msg: 'Hello world'}))
        
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
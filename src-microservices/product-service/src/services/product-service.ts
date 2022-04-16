import { ProductDomainService } from "../core/product-domain-service/product-service";
import { Product } from "../model/Product";

export class ProductService {
    async addNewProduct(product: Product) {
        var productDomainService = new ProductDomainService();
        return await productDomainService.insertProduct(product);
    }

    async getAllProduct() {
        var productDomainService = new ProductDomainService();
        return await productDomainService.getAll();
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
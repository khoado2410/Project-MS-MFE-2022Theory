export class Product {
    name: string | undefined;
    description: string | undefined;
    price: number | undefined;
    listImages: any[] | undefined
    constructor(name: string, desc: string, price: number, listImgs: any[] = []) {
        this.name = name;
        this.description = desc;
        this.price = price;
        this.listImages = listImgs;
    }
}
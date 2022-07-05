module.exports = {
    env: 'development',
    db: 'mongodb://localhost:27017/TRACKING-FCAM',
    port: '',
    ACCESS_TOKEN_SECRET: "access-token-secret-0a6b944d-d2fb-46fc-a85e-0295c986cd9f",
    ACCESS_TOKEN_LIFE: '1h',

    url_product: "http://api-gateway:3333/product",
    url_payment: "http://api-gateway:3333/payment",
    url_category: "http://api-gateway:3333/category",
    url_cart_inventory: "http://api-gateway:3333/inventory-cart-ms",
    url_price_promo: "http://api-gateway:3333/price-promo"
 
}

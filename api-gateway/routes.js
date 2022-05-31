const ROUTES = [
    {
        url: '/free',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/product',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://product-ms:8383",
            changeOrigin: true,
            pathRewrite: {
                [`^/product`]: '',
            },
        }
    },
    {
        url: '/category',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://category-ms:8282",
            changeOrigin: true,
            pathRewrite: {
                [`^/category`]: '',
            },
        }
    },
    {
        url: '/inventory-cart-ms',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://cart-inventory-ms:8787",
            changeOrigin: true,
            pathRewrite: {
                [`^/inventory-cart-ms`]: '',
            },
        }
    }


]

exports.ROUTES = ROUTES;
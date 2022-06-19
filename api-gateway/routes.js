

const ROUTES = [
    {
        url: '/free',
        auth: true,
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
            }
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
            target: "http://cart-inventory-ms:1115",
            changeOrigin: true,
            pathRewrite: {
                [`^/inventory-cart-ms`]: '',
            },
        }
    },
    {
        url: '/account',
        auth: true,
        creditCheck: false,
        //http://account-ms:1717
        proxy: {
            target: "http://localhost:1717",
            changeOrigin: true,
            pathRewrite: {
                [`^/account`]: '',
            },
            onProxyReq: function onProxyReq(onProxyReq, req, res){
                onProxyReq.setHeader('userJwt', req.jwtDecode);
            }
        }
    },
    {
        url: '/price-promo',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://price-promo-ms:6666",
            changeOrigin: true,
            pathRewrite: {
                [`^/price-promo`]: '',
            },
        }
    }




]

exports.ROUTES = ROUTES;
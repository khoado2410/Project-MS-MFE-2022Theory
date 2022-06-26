const dbModel = require("../model/index");
import {createCartItem, getCartItem} from './cart_item.service';

const Cart = dbModel.cart;
const Op = dbModel.Sequelize.Op;



export async function getCartByAccount(input: any) {
    try {
        const data = await Cart.findOne({
            where: {
                idCustomer: input.id_customer,
                isDelete: 0
            }
        });
        if(data == null)
            return null;
        const listItem = await getCartItem({
            idCart: data.id
        });
        
        return {
            idCart: data.id,
            listItem: listItem
        }
    } catch (error) {
        throw error;
    }
  };

export async function createCart(input: any){
    try {
        const cart = await Cart.findOne({where: {
            idCustomer: input.id_customer,
            isDelete: 0
        }});
        const list_item = input.list_item;
        if(cart == null){
            const body = {
                idCustomer: input.id_customer,
                isDelete: 0
            };
            const cartCreated = await Cart.create(body);
            for(var i = 0; i < list_item.length; i++){
                const item = {
                    idCart: cartCreated.id,
                    amount: list_item[i].amount,
                    idProduct: list_item[i].id_product,
                }
                await createCartItem(item);
            }
        }else{
            for(var i = 0; i < list_item.length; i++){
                const item = {
                    idCart: cart.id,
                    amount: list_item[i].amount,
                    idProduct: list_item[i].id_product
                }
                await createCartItem(item);
            }
        }

    } catch (error) {
        throw error;
    }
}
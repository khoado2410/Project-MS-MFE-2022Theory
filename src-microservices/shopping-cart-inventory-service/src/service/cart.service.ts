const dbModel = require("../model/index");
import { isKeyObject } from 'util/types';
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
        const item = input.item;
        if(cart == null){
            const body = {
                idCustomer: input.id_customer,
                isDelete: 0
            };
            const cartCreated = await Cart.create(body);
            const item_cart = {
                idCart: cartCreated.id,
                amount: item.amount,
                idProduct: item.id_product,
            }
                await createCartItem(item_cart);
            }
        else{
           const item_cart = {
                idCart: cart.id,
                amount: item.amount,
                idProduct: item.id_product
            }
            await createCartItem(item_cart);
            
        }

    } catch (error) {
        throw error;
    }
}
import {createContext} from 'react'
import { useState } from "react";

export const CartContext = createContext();

export const CartContextProvider =({children}) =>{
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.find(producto => producto.id === id) ? true: false;
    
    const addItem = (producto, count) => {
        if (isInCart(producto.id)) {
            setCart(cart.map(producto => {
                return producto.id === producto.id ? { ...producto, count: producto.count + count } : producto
            }));
        } else {
            setCart([...cart,{...producto,count}])
        }
    }
    console.log(cart);

    const clear = () =>{
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }


    const getQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.count)
        return cant
    };

    
    return(
            <CartContext.Provider
            value={{cart, addItem, getQuantity, clear, removeItem}}>
                {children}
            </CartContext.Provider>
        )
 }

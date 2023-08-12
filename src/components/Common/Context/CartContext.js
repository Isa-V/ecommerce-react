import {createContext, useState} from 'react'

export const CartContext = createContext ({
    cart:[]
})


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            const updatedCart = cart.map(product => {
                if (product.id === item.id) {
                    return { ...product, quantity: product.quantity + quantity };
                }
                return product;
            });
            setCart(updatedCart);
        }
    }

    const removeItem = (itemId) =>{
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = ()=>{
        return cart.reduce((total, product) => total + product.quantity, 0);

    }

    const total = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    const removeItemFromCart = (itemId) => {
        const updatedCart = cart.filter(product => product.id !== itemId);
        setCart(updatedCart);
    }

    const updateCartItem = (updatedItem) => {
        const updatedCart = cart.map(item => (item.id === updatedItem.id ? updatedItem : item));
        setCart(updatedCart);
      };

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total, removeItemFromCart, updateCartItem}}>
            {children}
        </CartContext.Provider>
    )
}
// CartContext.jsx
import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id 
                        ? { ...item, amount: item.amount + 1 } 
                        : item
                );
            }
            return [...prev, { ...product, amount: 1 }];
        });
    };

    const updateCartItem = (productId, newAmount) => {
        setCart(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, amount: newAmount } : item
            ).filter(item => item.amount > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.amount, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.amount), 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            updateCartItem,
            removeFromCart,
            getTotalItems,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
import { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(cartReducer, []);

    return(
        <CartContext.Provider value={{ cart, dispatch }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;
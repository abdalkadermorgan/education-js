import { useReducer } from 'react';

import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    console.log({ state, action });
    const item = action.item;
    const items = state.items;
    let totalAmount = state.totalAmount;

    if (action.type === 'ADD') {
        if (state.items.find(e => e.id === item.id)) {

        } else {
            items.push(item)
            totalAmount = totalAmount + item.price;

            return {
                items,
                totalAmount
            }
        }
    }

    // const removeItem = state.items.id
    if (action.type === 'REMOVE') {
        // if (state.item.find(item.id) === 1) {
        //     items.splice(item);

        //     return {
        //         items,
        //         totalAmount
        //     }
        // }
        // console.log("test")
    }


    return {
        items,
        totalAmount
    }
    // if (action.type === 'ADD') {
    //     const updatedTotalAmount =
    //      state.totalAmount + action.item.price;

    //     const existingCartItemIndex = state.items.findIndex(
    //         (item) => item.id === action.item.id);
    //     const existingCartItem = state.items[existingCartItemIndex];
    //     // let updatedItem;
    //     let updatedItems;     
    //     console.log(existingCartItemIndex);   

    //     if (existingCartItem) {
    //         const updatedItem = {
    //             ...existingCartItem,
    //             amount: existingCartItem.amount + action.item.amount,
    //         };
    //         updatedItems = [...state.items];
    //         updatedItems[existingCartItemIndex] = updatedItem;
    //         alert('added');
    //         // return;
    //         console.log(existingCartItem);   
    //     } else {
    //         updatedItems = state.items.concat(action.item);
    //     }

    //     return {
    //         items: updatedItems,
    //         totalAmount: updatedTotalAmount
    //     };
    // }
    // return defaultCartState;
    // return state
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;
import Header from "./MainHeader/Header";
// import Courses from "../pages/Courses";
import Cart from "./cart/Cart";
import CartProvider from "../store/CartProvider";
import { useState } from 'react';
import HomePage from "../pages/Home";

const CartApp = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };
    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <HomePage />
            </main>
        </CartProvider>
    )
}


export default CartApp;
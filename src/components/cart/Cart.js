import { useContext } from 'react';
import { Link } from "react-router-dom";
import Modal from '../UI/Modal';
import CartItem from './CartItem'
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const courseItemRemoveHandler = id => { };

    const courseItemAddHandler = item => { };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    category={item.category}
                    img={item.img}
                    onRemove={courseItemRemoveHandler.bind(null, item.id)}
                    onAdd={courseItemAddHandler.bind(null, item)} />
            ))}
        </ul>

    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Aomunt</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <Link to="/CartPage" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> {hasItems && <button className={classes.button}>order</button>} </Link>

                
            </div>
        </Modal>
    )
}

export default Cart;
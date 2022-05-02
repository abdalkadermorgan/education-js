import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '../UI/Modal';
import CartItem from './CartItem'
import classes from './Cart.module.css';
import * as store from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

const Cart = (props) => {

    // const cartCtx = useContext(CartContext);
    // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    // const hasItems = cartCtx.items.length > 0;

    // const courseItemRemoveHandler = id => { };

    // const courseItemAddHandler = item => { };

    const dispatch = useDispatch();
    // const hasItems = dispatch.courses.length > 0;
    const { courses } = useSelector((state) => state);
    const [state, setState] = useState({
        title: "",
        urlImg: "",
        catigory: "",
        price: "",
    });
    const cartItems = (
        <ul className={classes['cart-items']}>
            {courses.map((course, index) => (
                <CartItem
                key={index}
                    title={course.title}
                    urlImg={course.urlImg}
                    price={course.price}
                    category={course.category}
                    />
            ))}
        </ul>

    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Aomunt</span>
                <span>00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <Link to="/CartPage" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"><button className={classes.button}>order</button> </Link>

                
            </div>
        </Modal>
    )
}

export default Cart;
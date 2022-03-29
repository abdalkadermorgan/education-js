import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'Course', Price: 20 }].map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Aomunt</span>
                <span>36.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}

export default Cart;
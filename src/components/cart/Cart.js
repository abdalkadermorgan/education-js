import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

    const { courses } = useSelector((state) => state);
    console.log("course =>", courses);
    const totalAmount =+ courses.map(e => e.price);
    console.log("Total Amount =>",parseInt(totalAmount));

    return (
        <Modal onClose={props.onClose}>

             <ul className={classes['cart-items']}>
                <CartItem />
        </ul>
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
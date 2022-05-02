
import { useSelector } from 'react-redux';
import { Actions } from '../../store/store';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    // const price = `$${props.price.toFixed(2)}`;
    // const price = props?.price;


    const { addedCart } = useSelector((state) => state);

    return addedCart.map((course, index) => (
        <li className={classes['cart-item']} key={`course-homne-${index}`}>
            <div className='flex'>
                <div className={classes['cart-item_img']}>
                    <img src={course.urlImg} />
                </div>
                <div className={classes.info}>
                    <span >{course.category}</span>
                    <h2>{course.title}</h2>
                    <span className={classes.price}>{course.price}</span>
                </div>

            </div>
            <div className={classes.actions}>
                <button>Del</button>
            </div>
        </li>
    ));
}

export default CartItem;
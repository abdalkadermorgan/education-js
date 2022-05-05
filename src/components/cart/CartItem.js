
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../store/store';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    // const price = `$${props.price.toFixed(2)}`;
    // const price = props?.price;


    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();


    const onDeleteCart = (id) => {
        dispatch(Actions.SetAddedCart(cart.filter((e) => e.id !== id)));
      };

    return cart.map((course, index) => (
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
                <button onClick={() => onDeleteCart(course.id)}>Del</button>
            </div>
        </li>
    ));
}

export default CartItem;

import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    // const price = props?.price;

    return (
        <li className={classes['cart-item']}>
            <div className='flex'>
                <div className={classes['cart-item_img']}>
                    <img src={props.img} />
                </div>
                <div className={classes.info}>
                    <span >{props.category}</span>
                    <h2>{props.name}</h2>
                    <span className={classes.price}>{price}</span>
                </div>

            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>Del</button>
            </div>
        </li>
    )
}

export default CartItem;
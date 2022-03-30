const CartDropdown = (props) => {
    // const price = `$${props.price.toFixed(2)}`;
    return (
        <div className='hover-dropdown-menu'>
            <div className='menu-content'>
                <div className='menu-item'>
                    <a className='menu-item'>
                        <div className='item-img'>
                            <img src={props.img} />
                        </div>
                        <div className='flex flex-col ml-auto mr-2'>
                            <h6>{props.name}</h6>
                            <small>{props.category}</small>
                        </div>
                        <span className='text-red flex  flex-col items-center'>
                            {props.price}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CartDropdown;

// import { useContext } from "react"
// import CartContext from "../../store/cart-context"
// import CartDropdown from "./CartDropdown";

// const Dropdown = (props) => {
//     const cartCtx = useContext(CartContext);
//     const hasItem = cartCtx.items.length > 0;
//     const dropdownItem = (
//         <div>
//             {cartCtx.items.map((item) => (
//                 <CartDropdown 
//                     key={item.id}
//                     name={item.name}
//                     price={item.price}
//                     img={item.img}
//                     category={item.category}
//                 />
//             ))}
//         </div>
//     );

//     return (
//         <CartDropdown>
//             {dropdownItem}
//         </CartDropdown>
//     )
// }
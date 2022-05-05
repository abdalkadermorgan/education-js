import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../store/store";

const CartPage = () => {

  const { cart } = useSelector((state) => state);

  const totalAmount = () => {
    return cart.reduce((total, item) => {
       return  total + item.price
    }, 0);
}
const dispatch = useDispatch();

const onDeleteCart = (id) => {
  dispatch(Actions.SetAddedCart(cart.filter((e) => e.id !== id)));
};
    return (
      <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart.length} Item</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Course Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>

                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Action</h3>
              </div>
                {cart.map((carts, index) => (
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={`cartPage-${index}`}>
                    <div className="flex w-2/5"> 
                    {/* <!-- product --> */}
                      <div className="w-20">
                        <img className="h-24" src={carts.urlImg} alt="" />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{carts.title}</span>
                        <span className="text-red-500 text-xs">{carts.catigory}</span>
                        
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                    <span className="text-center w-1/5 font-semibold text-sm">{carts.price}</span>
                    </div>
  
                    <button className="font-semibold hover:text-red-500 text-gray-500 text-xs w-1/5" onClick={() => onDeleteCart(carts.id)}>Remove</button>
                  </div>
  
                ))
              }

            </div>
            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Total Amount</span>
                <span className="font-semibold text-sm">{totalAmount()}$</span>
              </div>


              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{totalAmount()} $</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
              </div>
            </div>

          </div>
        </div>
    );
}

export default CartPage;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="mt-14 text-center">
      <div className=" text-lg p-4 font-bold">Cart</div>
      <button onClick={() => handleClearCart()} className="p-2 bg-white">
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.map((item) => (
          <ItemList card={item} key={item?.id} removeBtn />
        ))}
      </div>
    </div>
  );
};

export default Cart;

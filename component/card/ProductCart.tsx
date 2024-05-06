/* eslint-disable @next/next/no-img-element */
import { useAppDispatch } from "@/redux/hooks";

import { Button } from "@nextui-org/button";
import React, { use, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  removeFromCart,
  increment,
  decrement,
} from "@/redux/features/cart/cartSlice";
import { ProductType } from "@/lib/definitions";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function ProductCart({
  image,
  name,
  price,
  id,
  desc,
}: ProductType) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.products);
  let [quantity, setQuantity] = useState(1);

  const ShippingTax = 65;
  const subTotalPrice = useAppSelector((state) => state.cart.totalPrice);
  const totalPrice = subTotalPrice * quantity;


  const handleIncrement = (id: number) => {
    setQuantity((quantity += 1));

    dispatch(increment(id));
  };

  const handleDecrement = (id: number) => {
    setQuantity((quantity -= 1));
    if (quantity < 1) {
      handleRemoveFromCart(id);
    }
    dispatch(decrement(id));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <tbody>
      <tr>
        <td className="py-4">
          <div className="flex items-center">
            <span className="font-semibold">{name}</span>
          </div>
        </td>
        <td className="py-4">
          <div className="max-w-sm w-full h-full bg-white rounded-lg overflow-hidden dark:bg-gray-700">
            <img
              src={image}
              alt="image"
              className="w-20 h-20 object-center object-cover rounded-lg"
            />
          </div>
        </td>
        <td className="py-4">${price}</td>
        <td className="py-4">
          <div className="flex items-center">
            <button
              className="border rounded-md py-2 px-4 mr-2"
              onClick={() => handleDecrement(id)}
            >
              -
            </button>
            <span className="text-center w-8">{quantity}</span>
            <button
              className="border rounded-md py-2 px-4 ml-2"
              onClick={() => handleIncrement(id)}
            >
              +
            </button>
          </div>
        </td>
        <td className="py-4">${totalPrice.toFixed(2)}</td>
        <td className="py-4">
          <button onClick={() => handleRemoveFromCart(id)}>
            <RiDeleteBin5Line color="red" className="h-6 w-6 " />
          </button>
        </td>
      </tr>
    </tbody>
  );
}

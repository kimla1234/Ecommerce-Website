"use client";
import React, { use, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  selectProducts,
  selectTotalPrice,
} from "@/redux/features/cart/cartSlice";
import {
  addToCart,
  removeFromCart,
  increment,
  decrement,
} from "@/redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ProductType } from "@/lib/definitions";
import ProductCart from "@/component/card/ProductCart";

export default function Cart({ image, name, price, id, desc }: ProductType) {
  const dispatch = useAppDispatch();
  const ShippingTax = 65;
  const products = useAppSelector((state) => state.cart.products);

  let [quantity, setQuantity] = useState(1);

  const route = useRouter();

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
    <div className=" h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className=" rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Image</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">Remove</th>
                  </tr>
                </thead>
                {products.length === 0 ? (
                  <p className="text-3xl leading-10  text-gray-800 pt-3 text-center mt-10">
                    No items in your cart
                  </p>
                ) : (
                  products.map((product) => (
                    <ProductCart
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      desc={product.name}
                    />
                  ))
                )}
              </table>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$21.98</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

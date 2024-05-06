import { CartProductType } from "@/lib/definitions";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import { BsBagPlus } from "react-icons/bs";
import { addToCart } from "@/redux/features/cart/cartSlice";
import {Image} from "@nextui-org/react";

export default function CardComponent({
  id,
  name,
  image,
  price,
  onClick,
}: CartProductType) {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <section
        id="Projects"
        className="w-full flex items-center justify-center xl:h-[350px]  md:h-[300px]  rounded-lg  bg-gray-200 dark:bg-gray-800"
      >
        <div className="max-w-sm w-full h-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
            <img
              src={image}
              alt="Product"
              className="object-cover  h-64 md:h-36 xl:h-48 w-full "
              style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {name}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${price}
              </p>
              <div className="ml-auto">
                <button onClick ={()=>dispatch(addToCart({id,name,image,price}))} >
                  <BsBagPlus className="h-6 w-6 " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

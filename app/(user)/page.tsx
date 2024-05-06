"use client";
import CardComponent from "@/component/card/CardComponent";
import FooterComponent from "@/component/footer/FooterComponent";
import { BASE_URL } from "@/lib/constants";
import { CartProductType, ProductType } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import Loading from "./loading";
import { Pagination } from "flowbite-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const router = useRouter();

  const states = useAppSelector(states => states)
  console.log("This globle state ",states)

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/?page=${currentPage}&page_size=12`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results); // Check the structure of data
        setProducts(data.results);
      });
  }, [currentPage]);

  return (
    <div className="p-14">
      {/* Hero Component */}
      <div className="relative overflow-hidden bg-white ">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Svelte signals are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new svelte signals will shelter you from the
                harsh elements of a world that doesn't care if you develop or
                die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://i.pinimg.com/564x/12/30/c6/1230c6a14c6e6419f8127f683034ebfc.jpg"
                            className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/d8/84/0a/d8840a15183567e30a32f58178a9585e.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/fe/76/de/fe76deeffd79e714af6591d8b1a6ce22.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/ea/d3/45/ead3456c5aed173b0eb4d17f720edad7.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/2d/c0/74/2dc0747e2243be5210bef7edb7b6db77.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/64/82/80/64828014a9e556ef10caf678b1c7bcfb.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.pinimg.com/564x/1e/a4/ff/1ea4ff692ca9ce10be4837eee4e246ac.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Replace anchor tag with Link component */}

                <a className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
                  Svelte Signals
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Component */}
      <div className="text-center p-5">
        <h1 className="font-bold text-4xl mb-4">
          Responsive Product card grid
        </h1>
        <h1 className="text-3xl">Tailwind CSS</h1>
      </div>
      
      <div className="flex justify-center p-2">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-screen px-[30px] md:[50px] lg:px-[30px] xl:px-[100px] gap-5 xl:gap-8">
          <Suspense fallback={<Loading />}>
            {products.map((product: ProductType, index) => (

              <CardComponent
                onClick={() => router.push(`/service/${product.id}`)}
                key={index}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
              />

            ))}
          </Suspense>
        </div>
      </div>

      {/* Pagination Component */}
      <div className="flex overflow-x-auto sm:justify-center p-10">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

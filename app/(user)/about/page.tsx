import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about us",
  description:
    "Welcome to Online Shopping, where shopping meets convenience, quality, and affordability.",
};

export default function Page() {
  return (
    <div className="p-1 bg-gray-100">
      <div className="max-w-5xl mx-auto m-10 ">
        <div className="mt-3 bg-white p-4 rounded-lg lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div>
            <a
              href="#"
              className="text-indigo-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm"
            >
              Election
            </a>
            <h1 className="text-gray-900 font-bold text-4xl">
              Welcome to Online Shopping
            </h1>
            <div className="py-5 text-sm font-regular text-gray-900 flex">
              <span className="mr-3 flex flex-row items-center">
                <svg
                  className="text-indigo-600"
                  fill="currentColor"
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                    </g>
                  </g>
                </svg>
                <span className="ml-1">6 mins ago</span>
              </span>

              <a
                href="#"
                className="flex flex-row items-center hover:text-indigo-600  mr-3"
              >
                <svg
                  className="text-indigo-600"
                  fill="currentColor"
                  height="16px"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span className="ml-1">AliSher Azimi</span>
              </a>

              <a
                href="#"
                className="flex flex-row items-center hover:text-indigo-600"
              >
                <svg
                  className="text-indigo-600"
                  fill="currentColor"
                  height="16px"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill=""
                    d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                  ></path>
                </svg>
                <span className="ml-1">activewear</span>
              </a>
            </div>
            <hr />
            <p className="text-base leading-8 my-5">
              Welcome to Online Shopping, where shopping meets convenience,
              quality, and affordability. We are your ultimate destination for
              all your online shopping needs, providing you with a seamless and
              enjoyable experience right from the comfort of your own home.
            </p>
            <div className="p-4">
              <Image src="/logo.jpg" alt="logo" width={1000} height={100} />
            </div>
          </div>
        </div>

        <div className="mt-3 bg-white p-4 rounded-lg lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
              Services
            </h2>
            <p className="mb-12 text-lg text-gray-500">
              Here is a few of the awesome Services we provide.
            </p>
            <div className="w-full">
              <div className="flex flex-col w-full mb-10 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                          Wide Product Selection
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-600">
                        Explore our extensive catalog featuring a diverse range
                        of products, including electronics, fashion, beauty,
                        home essentials, and more. With new arrivals regularly
                        added, there is always something exciting to discover.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                          Convenient Shopping Experience
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-600">
                        Enjoy the convenience of shopping from the comfort of
                        your home or on the go. Our user-friendly website is
                        designed to make browsing and purchasing a breeze, with
                        intuitive navigation and secure payment options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mb-5 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                          Quality Assurance
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-600">
                        Shop with confidence knowing that we prioritize quality
                        in everything we offer. We partner with trusted brands
                        and suppliers to ensure that each product meets our
                        stringent quality standards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                          Fast Shipping
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-600">
                        Experience swift order processing and delivery with our
                        efficient shipping services. We work tirelessly to
                        dispatch your orders promptly, so you can receive your
                        items in a timely manner.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                      <div className="flex items-center -mt-1">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                          Special Offers and Promotions
                        </h3>
                      </div>
                      <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                        ------------
                      </p>
                      <p className="mb-2 text-gray-600">
                        Keep an eye out for exclusive deals, discounts, and
                        promotions available only at Online Shopping. Sign up
                        for our newsletter or follow us on social media to stay
                        updated on the latest offers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

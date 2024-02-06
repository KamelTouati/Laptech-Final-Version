import React from "react";
import { FaStar, FaRegHeart, FaRegUser } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

import "./ProductDetails.css";

const productDetails = () => {
  return (
    <div className="flex flex-col lg:px-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col px-20">
          <h1 className="text-4xl font-black my-3">Laptop Aspire 3 d'Acer</h1>
          <h3 className="text-lg leading-10 my-3">
            LAPTOP 15,6 po Aspire 3 d'Acer
            <br />
            RyzenMC 5 7520U d'AMD
            <br />
            SSD 512 Go
            <br />
            RAM 16 Go
            <br />
            Windows 11 Home
          </h3>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <FaStar />
              <h1>(4,7)</h1>
            </div>
            <div className="flex gap-1 items-center">
              <GiMoneyStack />
              <h1>8060985,65DA</h1>
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="px-5 py-2 font-bold text-color3 flex items-center gap-1">
              <FaRegHeart />
              Add to wishlist
            </div>
            <div className="buttonStyle px-5 py-2">Add to cart</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/laptop.png" alt="" className="w-[400px]" />
          <div className="flex gap-4 items-center h-[80px]">
            <div className="laptopContainer h-full flex justify-center itens-center">
              <img src="/assets/laptop1.png" alt="" />
            </div>
            <div className="laptopContainer h-full flex justify-center itens-center">
              <img src="/assets/laptop2.png" alt="" />
            </div>
            <div className="laptopContainer h-full flex justify-center itens-center">
              <img src="/assets/laptop3.png" alt="" />
            </div>
            <div className="laptopContainer h-full flex justify-center itens-center">
              <img src="/assets/laptop4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 my-10">
        <div className="w-1/2">
          <h1 className="text-xl font-bold text-color3 py-2">Add a review</h1>
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="name"
                minLength="6"
                placeholder="your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Write a comment
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                className="inputStyle h-[100px] resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows="10"
                placeholder="Write a comment"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              submit
            </button>
          </form>
        </div>
        <div className="w-1/2 m-10">
          <h1 className="text-xl font-bold text-color3 py-2">
            Product reviews
          </h1>
          <div className="flex flex-col">
            <div class="w-full rounded-[1.5rem] borderStyle p-1">
              <div class=" w-full rounded-[1.5rem] bg-white">
                <div class=" w-full rounded-[1.5rem] flex flex-col justify-center relative p-5">
                  <div className="flex gap-1 items-center text-color3 font-bold">
                    <FaRegUser />
                    <h1>Touati Kamel</h1>
                  </div>
                  The laptop delivers comfort and seamless performance, though
                  the compact packaging raised some concerns. Nonetheless, it
                  remains one of my favorites due to its exceptional features.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;

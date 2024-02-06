import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
export default function Card({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div class="w-full borderstyle2 h-[260px] p-[2px] my-8">
      <div class=" w-full rounded-[2.5rem] bg-white p-8">
        <div className="flex md:flex-row flex-col rounded-3xl gap-4">
          <div className="h-[50px] bg-color2 rounded-3xl ">
            <figure>
              <img
                src={product.image.url}
                alt="Album"
                className="aspect-video h-[200px]"
              />
            </figure>
          </div>
          <div className="flex flex-col justify-between flex-1 ">
            <h2 className="text-xl font-bold">{product.model}</h2>
            <div className="flex items-center gap-1">
              <FaStar />
              {/* stars */}
              <p>(4.7)</p>
            </div>
            {/* price */}
            <p>{product.price}(DA)</p>
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                className="relative right-0 bottom-0 hover:-translate-y-1 duration-500 buttonStyle2 px-5 py-2 text-[#7878ab] font-semibold"
                onClick={toggleDetails}
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
              <button
                type="button"
                className="  flex justify-between duration-300 items-center hover:-translate-y-1 gap-3 shodow-inner shadow-xl text-white buttonStyle22 group text-lg px-4 font-semibold"
              >
                <p className="text-stone-100">Buy</p>
                <CiShoppingCart className=" transition-all duration-200 group-hover:translate-x-12" />
              </button>
            </div>
          </div>
        </div>
        {showDetails && (
          <ul className="mt-4 bg-white relative w-full  z-50 p-8  borderstyle22 ">
            <li className="pb-2 border-b-2">
              <span className="font-bold">operatingSystem : </span>
              {product.operatingSystem}
            </li>
            <li className="pb-2 border-b-2">
              <span className="font-bold">processorCompany : </span>{" "}
              {product.processorCompany}
            </li>
            <li className="pb-2 border-b-2">
              <span className="font-bold">processorModel : </span>{" "}
              {product.processorModel}
            </li>
            <li className="pb-2 border-b-2">
              <span className="font-bold">graphicsCard : </span>{" "}
              {product.graphicsCard}
            </li>
            <li className="pb-2 border-b-2">
              <span className="font-bold">display : </span> {product.display}
            </li>
            <li className="py-2">
              <label>
                +comment<input type="text"></input>
              </label>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

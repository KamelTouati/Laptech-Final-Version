import React, { useState } from "react";
import { FaStar, FaUserAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
export default function Card({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div class="w-full rounded-[.5rem] borderStyle p-1">
      <div class=" w-full rounded-[.5rem] bg-white flex md:flex-col items-center">
        <div class=" w-full rounded-[.5rem] flex justify-center items-center relative p-6">
          <div className="rounded-3xl ">
            <figure>
              <img
                src={product?.image.url}
                alt="Album"
                className="aspect-video w-[300px]"
              />
            </figure>
          </div>
          <div className="flex flex-col justify-between flex-1 ">
            <h2 className="text-xl font-bold">{product.model}</h2>
            <h2 className="font-light">{product.description}</h2>
            <div className="flex items-center gap-1 my-2">
              {/* <FaStar /> */}
              {/* stars */}
              <FaUserAlt />
              <p>{product?.user.username}</p>
              {/* <img
                className="w-[30px] h-[30px] rounded-[20px]"
                src={product?.user.profilePhoto}
                alt=""
              /> */}
            </div>
            {/* price */}
            <div className="flex items-center">
              <GiMoneyStack />
              <p className="ml-2">{product.price}(DA)</p>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                className="relative right-0 bottom-0 hover:-translate-y-1 duration-500 buttonStyle2 px-5 py-2 text-[#7878ab] font-semibold"
                onClick={toggleDetails}
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
              <Link
                to={`/products/details/${product._id}`}
                className="  flex justify-between duration-300 items-center hover:-translate-y-1 gap-3 shodow-inner shadow-xl text-white buttonStyle22 group text-lg px-4 font-semibold"
              >
                <p className="text-stone-100">Buy</p>
                <CiShoppingCart className=" transition-all duration-200 group-hover:translate-x-12" />
              </Link>
            </div>
          </div>
        </div>
        {showDetails && (
          <div class="buttonStyle p-6 w-fit m-2">
            <ul className="relative z-50">
              <li className="pb-2">
                <span className="font-bold">operatingSystem : </span>
                {product.operatingSystem}
              </li>
              <li className="pb-2">
                <span className="font-bold">processorCompany : </span>{" "}
                {product.processorCompany}
              </li>
              <li className="pb-2">
                <span className="font-bold">processorModel : </span>{" "}
                {product.processorModel}
              </li>
              <li className="pb-2">
                <span className="font-bold">graphicCard : </span>{" "}
                {product.graphicCard}
              </li>
              <li className="pb-2">
                <span className="font-bold">display : </span> {product.display}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

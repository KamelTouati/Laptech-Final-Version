import React, { useEffect, useState } from "react";
import CartTable from "./componenets/CartTable";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/pagination/Pagination";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import girl from "/public/assets/girl.png";

const PRODUCT_PER_PAGE = 3;

export default function Cart() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { productsCount, products } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(productsCount / PRODUCT_PER_PAGE);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="py-6 px-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold my-4">Shopping Cart :</h1>
        </div>
      </div>
      <div class="p-4 flex justify-between">
        {products.map((product) =>
          product?.cart.map((userId) =>
            userId === user?._id ? (
              <CartTable key={product._id} product={product} />
            ) : (
              ""
            )
          )
        )}
        <img src={girl} className="w-[300px]" />
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

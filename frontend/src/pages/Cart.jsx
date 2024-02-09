import React, { useEffect, useState } from "react";
import { Card } from "../components";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/pagination/Pagination";
import { fetchProducts } from "../redux/apiCalls/productApiCall";
import robot2 from "/public/assets/robot2.png";

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
    <div className="p-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">Your Cart :</h1>
        </div>
        <img src={robot2} />
      </div>
      <div class="p-4 flex-1 md:grid md:grid-cols-1 gap-4 ">
        {products.map((product) =>
          product?.cart.map((userId) =>
            userId === user?._id ? (
              <Card key={product._id} product={product} />
            ) : (
              ""
            )
          )
        )}
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

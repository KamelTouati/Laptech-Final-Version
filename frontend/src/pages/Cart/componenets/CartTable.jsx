import React from "react";
import { toggleCartProduct } from "../../../redux/apiCalls/productApiCall";
import { useDispatch } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";

const CartTable = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <table className="flex-1">
      <thead>
        <tr>
          <th>Item</th>
          <th>Model Company</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr key={product._id}>
          {/* <td>{index + 1}</td> */}
          <td>
            <img src={product?.image.url} alt="" className="w-[100px]" />
          </td>
          <td>
            {product?.company}
            {product?.model}
          </td>
          <td>{product?.price}DA</td>
          <td>
            <div className="buttonStyle w-fit p-4 cursor-pointer">
              <FaDeleteLeft
                onClick={() => dispatch(toggleCartProduct(product?._id))}
                className="z-[10]"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;

import React from "react";
import { toast } from "react-toastify";
import { FaStar, FaRegHeart, FaUserAlt, FaHeart } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchSingleProduct,
  updateProductImage,
  toggleLikeProduct,
  deleteProduct,
  toggleCartProduct,
} from "../../../redux/apiCalls/productApiCall";
import "./ProductDetails.css";
import { AddComment, CommentList } from "../../../components";
import UpdateProductModal from "./UpdateProductModal";

const productDetails = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();

  const [file, setFile] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleProduct(id));
  }, [id]);

  // Update Image Submit Handler
  const updateImageSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("there is no file!");

    const formData = new FormData();
    formData.append("image", file);
    dispatch(updateProductImage(formData, product?._id));
  };

  // Delete Product Handler
  const deleteProductHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(deleteProduct(product?._id));
        navigate(`/profile/${user?._id}`);
      }
    });
  };

  return (
    <div className="flex flex-col lg:px-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col px-20">
          <h1 className="text-4xl font-black my-3">
            {product?.company}
            {product?.model}
          </h1>
          <h3 className="text-lg leading-10 my-3">
            {product?.description}
            <br />
            {product?.processorCompany} {product?.processorModel}
            <br />
            {product?.graphicCard}
            <br />
            {product?.memory}
            <br />
            {product?.storage}
            <br />
            {product?.display}
            <br />
            {product?.operatingSystem}
          </h3>
          <div className="flex justify-between my-2">
            <div className="flex gap-1 items-center">
              <FaStar />
              <p>{product?.ratings.length}</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaHeart />
              <h1>{product?.likes.length}Likes</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              {/* <FaStar /> */}
              {/* <h1>(4,7)</h1> */}
              {/* <FaUserAlt /> */}
              <img
                className="w-[30px] h-[30px] rounded-[20px]"
                src={product?.user.profilePhoto.url}
                alt=""
              />
              <Link to={`/profile/${product?.user._id}`}>
                {product?.user.username}
              </Link>
            </div>
            <div className="flex gap-1 items-center">
              <GiMoneyStack />
              <h1>{product?.price}DA</h1>
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="py-2 font-bold text-color3 flex items-center gap-1">
              <div>
                {user && (
                  <div
                    onClick={() => dispatch(toggleLikeProduct(product?._id))}
                    className="flex items-center "
                  >
                    {product?.likes.includes(user?._id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                    <h1>Add to wishlist</h1>
                  </div>
                )}
              </div>
            </div>
            {user && (
              <div
                onClick={() => dispatch(toggleCartProduct(product?._id))}
                className="flex items-center "
              >
                {product?.cart.includes(user?._id) ? (
                  <button className="buttonStyle px-5 py-2">
                    Remove from the cart
                  </button>
                ) : (
                  <button className="buttonStyle px-5 py-2">Add to cart</button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={file ? URL.createObjectURL(file) : product?.image.url}
            alt=""
            className="w-[400px]"
          />
          <div className="flex gap-4 items-center h-[80px] my-8">
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
          {user?._id === product?.user?._id && (
            <form onSubmit={updateImageSubmitHandler}>
              <div className="flex items-center gap-4 my-4">
                <div className="flex items-center text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <MdModeEdit />
                  <label htmlFor="file" className="ml-2">
                    Select new image
                  </label>
                </div>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <button className="buttonStyle px-5 py-2" type="submit">
                  upload
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="flex gap-4 my-10">
        {user ? (
          <AddComment productId={product?._id} />
        ) : (
          <p>to write a comment you should login first</p>
        )}
        {/* {console.log(product?.comments)} */}
        {/* {console.log(user?.products)} */}
        <CommentList comments={product?.comments} />
        {updateProduct && (
          <UpdateProductModal
            product={product}
            setUpdateProduct={setUpdateProduct}
          />
        )}
      </div>
      <div className="flex justify-end gap-4 my-4">
        {user?._id === product?.user?._id && (
          <>
            <div
              onClick={() => setUpdateProduct(true)}
              className="buttonStyle px-5 py-2"
            >
              <MdModeEdit />
            </div>
            <div
              onClick={deleteProductHandler}
              className="buttonStyle px-5 py-2"
            >
              <MdDelete />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default productDetails;

import { Card, Sidebar } from "../../components";
import { Link } from "react-router-dom";
import "./Products.css";
import Pagination from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getProductsCount,
} from "../../redux/apiCalls/productApiCall";
import Group22 from "/public/assets/Group22.png";
import Forward from "/public/assets/Forward.png";
import Back from "/public/assets/Back.png";

const PRODUCT_PER_PAGE = 3;

export default function Products() {
  const dispatch = useDispatch();
  const { productsCount, products } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(productsCount / PRODUCT_PER_PAGE);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(getProductsCount());
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./assets/dell.png",
    "./assets/hp.png",
    "./assets/lenovo.png",
    "./assets/msi.png",
    "./assets/apple.png",
    "./assets/acer.png",
    "./assets/asus.png",
    "./assets/dell.png",
  ];

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (
      let i = currentIndex;
      visibleImages.length < 8;
      i = (i + 1) % images.length
    ) {
      visibleImages.push(images[i]);
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="flex flex-col lg:px-20">
      <div className="my-10 lg:mx-20">
        <div class="w-full rounded-[2.5rem] borderStyle p-1">
          <div class=" w-full rounded-[2.5rem] bg-white">
            <div class=" w-full rounded-[2.5rem] bg-color1 flex justify-center items-center relative">
              <img
                className="absolute -bottom-[100px] -left-[100px] w-[280px]"
                src={Group22}
                alt=""
              />
              <div className="mx-8 flex flex-col items-center py-10">
                <h1 className="text-4xl font-black my-3">
                  Ensuring Your Laptop Necessities are Met,
                  <br />
                  Every Twist and Turn.
                </h1>
                <h3 className="text-lg leading-10 my-3 mx-20">
                  Discover our range of products by browsing through our
                  selection, or for a faster and personalized experience,
                  leverage our AI assistant. Simply tap 'AI Guide' for immediate
                  support from our AI model, guiding you to the right laptop
                  price based on its features.
                </h3>
                <Link
                  to="/products/predict-product-price"
                  className="buttonStyle px-5 py-2"
                >
                  Ai Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-container relative overflow-visible">
        <div className="grid grid-cols-8 gap-10 my-20 ">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
          <button
            type="button"
            className="carousel-prev absolute -right-[50px]"
            onClick={prevSlide}
          >
            <span class="inline-flex items-center justify-center">
              <img src={Forward} />
              <span class="sr-only">Next</span>
            </span>
          </button>
          <button
            type="button"
            className="carousel-next absolute -left-[50px]"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center">
              <img src={Back} />
              <span class="sr-only">Previous</span>
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-12 ">
        <Sidebar />
        <div class="p-4 grid grid-cols-1 gap-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

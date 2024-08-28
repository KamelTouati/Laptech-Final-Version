import { Card } from "../../components";
import Sidebar from "../../components/sidebar/Sidebar";
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
import { companies } from "./data";

const PRODUCT_PER_PAGE = 3;

export default function Products() {
  const dispatch = useDispatch();
  const { productsCount, products } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ selectedCompanies: [] }); // Initialize filters with selectedCompanies
  const pages = Math.ceil(productsCount / PRODUCT_PER_PAGE);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(getProductsCount());
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? companies.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = (currentIndex + 1) % companies.length;
    setCurrentIndex(index);
  };

  const getVisibleCompanies = () => {
    const visibleCompanies = [];
    for (
      let i = currentIndex;
      visibleCompanies.length < 8;
      i = (i + 1) % companies.length
    ) {
      visibleCompanies.push(companies[i]);
    }
    return visibleCompanies;
  };

  const visibleCompanies = getVisibleCompanies();

  const handleFilterChange = (filters) => {
    setFilters(filters);
  };

  const handleCompanyFilter = (company) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      selectedCompanies: [{ value: company.name }],
    }));
  };

  const applyFilters = (product) => {
    if (
      filters.selectedCompanies.length &&
      !filters.selectedCompanies.some(
        (company) => company.value === product.company
      )
    ) {
      return false;
    }
    if (
      filters.selectedModels.length &&
      !filters.selectedModels.some((model) => model.value === product.model)
    ) {
      return false;
    }
    if (
      filters.selectedOperatingSystems.length &&
      !filters.selectedOperatingSystems.some(
        (os) => os.value === product.operatingSystem
      )
    ) {
      return false;
    }
    if (
      filters.selectedProcessorCompanies.length &&
      !filters.selectedProcessorCompanies.some(
        (procCompany) => procCompany.value === product.processorCompany
      )
    ) {
      return false;
    }
    if (
      filters.selectedProcessorModels.length &&
      !filters.selectedProcessorModels.some(
        (procModel) => procModel.value === product.processorModel
      )
    ) {
      return false;
    }
    if (
      filters.selectedGraphicsCards.length &&
      !filters.selectedGraphicsCards.some(
        (gpu) => gpu.value === product.graphicsCard
      )
    ) {
      return false;
    }
    if (
      filters.selectedRamModels.length &&
      !filters.selectedRamModels.some((ram) => ram.value === product.ram)
    ) {
      return false;
    }
    if (
      filters.selectedDisplayOptions.length &&
      !filters.selectedDisplayOptions.some(
        (display) => display.value === product.display
      )
    ) {
      return false;
    }
    if (
      filters.selectedStorageOptions.length &&
      !filters.selectedStorageOptions.some(
        (storage) => storage.value === product.storage
      )
    ) {
      return false;
    }
    return true;
  };

  const filteredProducts = products.filter(applyFilters);
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
          {visibleCompanies.map((company, index) => {
            const isSelected = filters.selectedCompanies.some(
              (selectedCompany) => selectedCompany.value === company.name
            );

            return (
              <div
                key={index}
                className={`carousel-item active cursor-pointer p-2 rounded-lg transition duration-300 ${
                  isSelected ? "bg-blue-200" : "hover:bg-gray-200"
                }`}
                onClick={() => handleCompanyFilter(company)}
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-[80px]"
                />
              </div>
            );
          })}
          <button
            type="button"
            className="carousel-prev absolute -right-[50px]"
            onClick={prevSlide}
          >
            <span class="inline-flex items-center justify-center">
              <img src={Forward} alt="Forward" />
              <span class="sr-only">Next</span>
            </span>
          </button>
          <button
            type="button"
            className="carousel-next absolute -left-[50px]"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center">
              <img src={Back} alt="Back" />
              <span class="sr-only">Previous</span>
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-12 ">
        <Sidebar onFilterChange={handleFilterChange} />
        <div class="p-4 grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
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

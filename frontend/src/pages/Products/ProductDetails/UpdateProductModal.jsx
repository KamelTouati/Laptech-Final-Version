import { useState, useEffect } from "react";
import "./UpdateProductModal.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../../redux/apiCalls/productApiCall";
import { fetchCategories } from "../../../redux/apiCalls/categoryApiCall";
import { IoCloseCircleSharp } from "react-icons/io5";

const UpdateProductModal = ({ setUpdateProduct, product }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");
  const [processorCompany, setProcessorCompany] = useState("");
  const [processorModel, setProcessorModel] = useState("");
  const [graphicCard, setGraphicCard] = useState("");
  const [display, setDisplay] = useState("");
  const [memory, setMemory] = useState("");
  const [storage, setStorage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct(
        {
          company,
          model,
          operatingSystem,
          processorCompany,
          processorModel,
          graphicCard,
          display,
          memory,
          storage,
          description,
          price,
        },
        product?._id
      )
    );
    setUpdateProduct(false);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="update-product">
      <form onSubmit={formSubmitHandler} className="update-product-form">
        <abbr title="close">
          <IoCloseCircleSharp
            onClick={() => setUpdateProduct(false)}
            className="text-red-500 update-product-form-close"
          />
        </abbr>
        <h1 className="update-product-title">Update Product</h1>
        <div className="mb-6">
          <input
            type="text"
            id="model"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Enter pc model"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="operating_system"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="operating_system"
            value={operatingSystem}
            onChange={(e) => setOperatingSystem(e.target.value)}
            placeholder="Enter pc operating system"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="processor_company"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="processor_company"
            value={processorCompany}
            onChange={(e) => setProcessorCompany(e.target.value)}
            placeholder="Enter pc Processor company"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="processor_model"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="processor_model"
            value={processorModel}
            onChange={(e) => setProcessorModel(e.target.value)}
            placeholder="Enter pc Processor model"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="graphic_card"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="graphic_card"
            value={graphicCard}
            onChange={(e) => setGraphicCard(e.target.value)}
            placeholder="Enter pc graphic Card"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="memory"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="memory"
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
            placeholder="Enter pc memory"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="display"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="display"
            value={display}
            onChange={(e) => setDisplay(e.target.value)}
            placeholder="Enter pc display"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="storage"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="storage"
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
            placeholder="Enter pc storage"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="description"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter pc description"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="number"
            id="price"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter pc price "
            required
          />
        </div>
        <select
          className="mb-6 inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option disabled value="">
            Select A Company
          </option>
          {categories.map((company) => (
            <option key={company._id} value={company.title}>
              {company.title}
            </option>
          ))}
        </select>
        <textarea
          className="mb-6 inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows="5"
          placeholder="Enter pc description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="buttonStyle px-5 py-2">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProductModal;

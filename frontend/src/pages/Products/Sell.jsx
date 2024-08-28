import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/apiCalls/productApiCall";
import { RotatingLines } from "react-loader-spinner";
import girl1 from "/public/assets/girl1.png";
import {
  companies,
  models,
  operatingSystems,
  processorCompanies,
  processorModels,
  graphicsCards,
  ramModels,
  displayOptions,
  storageOptions,
} from "./data";

const Sell = () => {
  const dispatch = useDispatch();
  const { loading, isProductCreated } = useSelector((state) => state.product);
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [operating_system, setOperatingSystem] = useState("");
  const [processor_company, setProcessorCompany] = useState("");
  const [processor_model, setProcessorModel] = useState("");
  const [graphic_card, setGraphicCard] = useState("");
  const [display, setDisplay] = useState("");
  const [memory, setMemory] = useState("");
  const [storage, setStorage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (company.trim() === "")
      return toast.error("Product Company is required");
    if (model.trim() === "") return toast.error("Product Model is required");
    if (operating_system.trim() === "")
      return toast.error("Product Operating System is required");
    if (processor_company.trim() === "")
      return toast.error("Product Processor Company is required");
    if (processor_model.trim() === "")
      return toast.error("Product Processor Model is required");
    if (graphic_card.trim() === "")
      return toast.error("Product Graphic Card is required");
    if (display.trim() === "")
      return toast.error("Product Display is required");
    if (memory.trim() === "") return toast.error("Product Memory is required");
    if (storage.trim() === "")
      return toast.error("Product Storage is required");
    if (description.trim() === "")
      return toast.error("Product Description is required");
    if (price.trim() === "") return toast.error("Product Price is required");

    if (!file) return toast.error("Product Image is required");

    const formData = new FormData();
    formData.append("company", company);
    formData.append("model", model);
    formData.append("operatingSystem", operating_system);
    formData.append("processorCompany", processor_company);
    formData.append("processorModel", processor_model);
    formData.append("graphicCard", graphic_card);
    formData.append("display", display);
    formData.append("memory", memory);
    formData.append("storage", storage);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", file);

    dispatch(createProduct(formData));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isProductCreated) {
      navigate("/");
    }
  }, [isProductCreated, navigate]);


  return (
    <div className="lg:px-20">
      <div class="rounded-[2.5rem] borderStyle p-1 m-10">
        <div class="rounded-[2.5rem] bg-white">
          <div class="rounded-[2.5rem] bg-color1 flex justify-around items-center relative p-10">
            <div>
              <h1 className="text-3xl font-black text-color3 py-2">
                You want to sell your computer
              </h1>
              <h1 className="font-bold py-2">try to complete this Form</h1>
              <form onSubmit={formSubmitHandler}>
                <div className="mb-6">
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company
                  </label>
                  <select
                    id="company"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a company
                    </option>
                    {companies.map((companyItem) => (
                      <option key={companyItem.name} value={companyItem.name}>
                        {companyItem.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="model"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Model
                  </label>
                  <select
                    id="model"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a model
                    </option>
                    {models.map((modelItem) => (
                      <option key={modelItem} value={modelItem}>
                        {modelItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="operating_system"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Operating System
                  </label>
                  <select
                    id="operating_system"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="operating_system"
                    value={operating_system}
                    onChange={(e) => setOperatingSystem(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select an operating system
                    </option>
                    {operatingSystems.map((osItem) => (
                      <option key={osItem} value={osItem}>
                        {osItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="processor_company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Processor Company
                  </label>
                  <select
                    id="processor_company"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="processor_company"
                    value={processor_company}
                    onChange={(e) => setProcessorCompany(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a processor company
                    </option>
                    {processorCompanies.map((processorItem) => (
                      <option key={processorItem} value={processorItem}>
                        {processorItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="processor_model"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Processor Model
                  </label>
                  <select
                    id="processor_model"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="processor_model"
                    value={processor_model}
                    onChange={(e) => setProcessorModel(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a processor model
                    </option>
                    {processorModels.map((processorModelItem) => (
                      <option
                        key={processorModelItem}
                        value={processorModelItem}
                      >
                        {processorModelItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="graphic_card"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Graphic Card
                  </label>
                  <select
                    id="graphic_card"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="graphic_card"
                    value={graphic_card}
                    onChange={(e) => setGraphicCard(e.target.value)}
                  >
                    <option value="" disabled>
                      Select a graphic card
                    </option>
                    {graphicsCards.map((graphicCardItem) => (
                      <option key={graphicCardItem} value={graphicCardItem}>
                        {graphicCardItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="memory"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Memory
                  </label>
                  <select
                    id="memory"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="memory"
                    value={memory}
                    onChange={(e) => setMemory(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select memory option
                    </option>
                    {ramModels.map((memoryItem) => (
                      <option key={memoryItem} value={memoryItem}>
                        {memoryItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="display"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Display
                  </label>
                  <select
                    id="display"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="display"
                    value={display}
                    onChange={(e) => setDisplay(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select display option
                    </option>
                    {displayOptions.map((displayItem) => (
                      <option key={displayItem} value={displayItem}>
                        {displayItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="storage"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Storage
                  </label>
                  <select
                    id="storage"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="storage"
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select storage option
                    </option>
                    {storageOptions.map((storageItem) => (
                      <option key={storageItem} value={storageItem}>
                        {storageItem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
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
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price (DA)
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter pc price"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="file"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {loading ? (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="40"
                      visible={true}
                    />
                  ) : (
                    "Create"
                  )}
                </button>
              </form>
            </div>
            <img className="w-[500px]" src={girl1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;

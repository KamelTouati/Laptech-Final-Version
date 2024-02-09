import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/apiCalls/productApiCall";
import { RotatingLines } from "react-loader-spinner";
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";
import girl1 from "/public/assets/girl1.png";

const Sell = () => {
  const dispatch = useDispatch();
  const { loading, isProductCreated } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

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

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

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
                  <input
                    id="company"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="company"
                    placeholder="Enter pc company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="model"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Model
                  </label>
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
                  <label
                    htmlFor="operating_system"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Operating system
                  </label>
                  <input
                    type="text"
                    id="operating_system"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="operating_system"
                    value={operating_system}
                    onChange={(e) => setOperatingSystem(e.target.value)}
                    placeholder="Enter pc operating system"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="processor_company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Processor company
                  </label>
                  <input
                    type="text"
                    id="processor_company"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="processor_company"
                    value={processor_company}
                    onChange={(e) => setProcessorCompany(e.target.value)}
                    placeholder="Enter pc Processor company"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="processor_model"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Processor model
                  </label>
                  <input
                    type="text"
                    id="processor_model"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="processor_model"
                    value={processor_model}
                    onChange={(e) => setProcessorModel(e.target.value)}
                    placeholder="Enter pc Processor model"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="graphic_card"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Graphic Card
                  </label>
                  <input
                    type="text"
                    id="graphic_card"
                    className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="graphic_card"
                    value={graphic_card}
                    onChange={(e) => setGraphicCard(e.target.value)}
                    placeholder="Enter pc graphic Card"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="memory"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Memory
                  </label>
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
                  <label
                    htmlFor="display"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Display
                  </label>
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
                  <label
                    htmlFor="storage"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Storage
                  </label>
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
                    Price
                  </label>
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
                <div className="mb-6">
                  <label
                    htmlFor="description"
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

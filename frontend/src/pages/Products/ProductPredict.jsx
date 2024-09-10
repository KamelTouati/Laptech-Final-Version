import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { predictProductPrice } from "../../redux/apiCalls/predictionModelApiCall";
import { useSelector, useDispatch } from "react-redux";
import robot3 from "/public/assets/robot3.png";
import robot4 from "/public/assets/robot4.png";
import money from "/public/assets/money.png";
import money_1 from "/public/assets/money_1.png";
import { toast } from "react-toastify";

import {
  companies,
  cpuNames,
  gpuNames,
  memoryTypes,
  operatingSystems,
  screenResolutions,
  inchesOptions,
  typeNames,
  rams,
  memorySizes,
} from "../../utils/types";

export default function ProductPredict() {
  const dispatch = useDispatch();

  const { loading, isProductPredicted, price } = useSelector(
    (state) => state.predictionModel
  );
  const [company, setCompany] = useState("");
  const [typeName, setTypeName] = useState("");
  const [inches, setInches] = useState("");
  const [resolution, setResolution] = useState("");
  const [cpu, setCPU] = useState("");
  const [ram, setRAM] = useState("");
  const [gpu, setGPU] = useState("");
  const [opSystem, setOpSystem] = useState("");
  const [weight, setWeight] = useState("");
  const [memoType, setMemoType] = useState("");
  const [memoSize, setMemoSize] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (company.trim() === "")
      return toast.error("Product Company is required");
    if (typeName.trim() === "")
      return toast.error("Product Type Name is required");
    if (inches.trim() === "") return toast.error("Product Inches is required");
    if (resolution.trim() === "")
      return toast.error("Product Resolution is required");
    if (cpu.trim() === "") return toast.error("Product CPU is required");
    if (ram.trim() === "") return toast.error("Product RAM is required");
    if (gpu.trim() === "") return toast.error("Product GPU is required");
    if (opSystem.trim() === "")
      return toast.error("Product Operating System is required");
    // if (weight.trim() === "") return toast.error("Product Weight is required");
    if (memoType.trim() === "")
      return toast.error("Product Memory Type is required");
    if (memoSize.trim() === "")
      return toast.error("Product Memory Size is required");

    const formData = new FormData();
    formData.append("company", company);
    formData.append("typeName", typeName);
    formData.append("inches", inches);
    formData.append("resolution", resolution);
    formData.append("cpu", cpu);
    formData.append("ram", ram);
    formData.append("gpu", gpu);
    formData.append("opSystem", opSystem);
    formData.append("weight", weight);
    formData.append("memoType", memoType);
    formData.append("memoSize", memoSize);
    console.log("formData", formData);
    dispatch(predictProductPrice(formData));
  };
  return (
    <div className="lg:px-20 my-10">
      <div className="flex justify-around items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8 rounded-lg shadow-lg my-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            LapTech Guide: What's Your Ideal Laptop Price?
          </h1>
          <h4 className="text-lg text-gray-600 leading-relaxed text-center mb-6">
            Uncover Your Perfect Laptop Fit! LapTech Guide is here to help.
            What's your preferred RAM, brand, and storage? Let us tailor a
            laptop price just for you. Curious?
          </h4>
        </div>
        <img
          src={robot3}
          alt="Robot Guide"
          className="w-64 h-64 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h1 className="text-4xl font-extrabold text-[#655992] mb-4 text-center">
        Let’s discover !
      </h1>
      <form
        onSubmit={formSubmitHandler}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
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
            htmlFor="typeName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type Name
          </label>
          <select
            id="typeName"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="typeName"
            value={typeName}
            onChange={(e) => setTypeName(e.target.value)}
            required
          >
            <option value="" disabled>
              Select type name
            </option>
            {typeNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="inches"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Inches
          </label>
          <select
            id="inches"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="inches"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            required
          >
            <option value="" disabled>
              Select inches
            </option>
            {inchesOptions.map((inch) => (
              <option key={inch} value={inch}>
                {inch}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="resolution"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Resolution
          </label>
          <select
            id="resolution"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="resolution"
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
            required
          >
            <option value="" disabled>
              Select resolution
            </option>
            {screenResolutions.map((res) => (
              <option key={res} value={res}>
                {res}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="cpu"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CPU
          </label>
          <select
            id="cpu"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="cpu"
            value={cpu}
            onChange={(e) => setCPU(e.target.value)}
            required
          >
            <option value="" disabled>
              Select CPU
            </option>
            {cpuNames.map((cpuItem) => (
              <option key={cpuItem} value={cpuItem}>
                {cpuItem}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="ram"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            RAM
          </label>
          <select
            id="ram"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="ram"
            value={ram}
            onChange={(e) => setRAM(e.target.value)}
            required
          >
            <option value="" disabled>
              Select RAM
            </option>
            {rams.map((ramItem) => (
              <option key={ramItem} value={ramItem}>
                {ramItem}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="gpu"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            GPU
          </label>
          <select
            id="gpu"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="gpu"
            value={gpu}
            onChange={(e) => setGPU(e.target.value)}
            required
          >
            <option value="" disabled>
              Select GPU
            </option>
            {gpuNames.map((gpuItem) => (
              <option key={gpuItem} value={gpuItem}>
                {gpuItem}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="opSystem"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Operating System
          </label>
          <select
            id="opSystem"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="opSystem"
            value={opSystem}
            onChange={(e) => setOpSystem(e.target.value)}
            required
          >
            <option value="" disabled>
              Select operating system
            </option>
            {operatingSystems.map((os) => (
              <option key={os} value={os}>
                {os}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="weight"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Weight
          </label>
          <input
            id="weight"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            step="0.01"
            placeholder="Enter weight"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="memoType"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Memory Type
          </label>
          <select
            id="memoType"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="memoType"
            value={memoType}
            onChange={(e) => setMemoType(e.target.value)}
            required
          >
            <option value="" disabled>
              Select memory type
            </option>
            {memoryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="memoSize"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Memory Size
          </label>
          <select
            id="memoSize"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="memoSize"
            value={memoSize}
            onChange={(e) => setMemoSize(e.target.value)}
            required
          >
            <option value="" disabled>
              Select memory size
            </option>
            {memorySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div></div>
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
            "Get estimate"
          )}
        </button>
      </form>

      {/* {console.log("price", price)} */}
      {price && (
        <div className="relative flex flex-col p-8 bg-white">
          {/* Background Images */}

          <img
            src={money}
            alt="Money"
            className="absolute left-0 top-1/2 w-40 h-40 opacity-50 transform -translate-y-1/2"
          />
          <img
            src={money_1}
            alt="Money"
            className="absolute right-0 top-1/2 w-40 h-40 opacity-50 transform -translate-y-1/2"
          />

          {/* First Section */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Here's your personalized estimate.
            </h1>
          </div>

          {/* Second Section: Price and Robot */}
          <div className="flex items-center justify-center space-x-6">
            {/* Price Section */}
            <div className="bg-green-100 text-green-700 font-bold text-3xl p-6 rounded-lg shadow-md">
              {price ? `${parseFloat(price).toFixed(2)} DA` : "N/A"}
            </div>

            {/* Robot Image */}
            <div>
              <img
                src={robot4}
                alt="Robot"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

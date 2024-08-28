import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { predictProductPrice } from "../../redux/apiCalls/predictionModelApiCall";
import { useSelector, useDispatch } from "react-redux";
import robot3 from "/public/assets/robot3.png";
import {
  companies,
  cpuNames,
  gpuNames,
  memoryTypes,
  operatingSystems,
  screenResolutions,
  typeNames,
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
    if (weight.trim() === "") return toast.error("Product Weight is required");
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

    dispatch(predictProductPrice(formData));
  };
  return (
    <div className="lg:px-20 my-10">
      <div className="flex justify-around items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">
            LapTech Guide: What's Your Ideal Laptop Price?
          </h1>
          <h4>
            Uncover Your Perfect Laptop Fit LapTech Guide is here to help.
            What's your preferred RAM, brand, and storage? Let us tailor a
            laptop price just for you. Curious?
          </h4>
        </div>
        <img src={robot3} />
      </div>
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

        {/* <div className="mb-6">
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
        </div> */}

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

        {/* <div className="mb-6">
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
        </div> */}

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

        {/* <div className="mb-6">
          <label
            htmlFor="weight"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Weight
          </label>
          <select
            id="weight"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          >
            <option value="" disabled>
              Select weight
            </option>
            {weights.map((weightItem) => (
              <option key={weightItem} value={weightItem}>
                {weightItem}
              </option>
            ))}
          </select>
        </div> */}

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

        {/* <div className="mb-6">
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
        </div> */}
      </form>

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
      {/* <h1>price : {price}</h1> */}
    </div>
  );
}

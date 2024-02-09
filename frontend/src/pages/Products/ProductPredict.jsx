import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { predictProductPrice } from "../../redux/apiCalls/predictionModelApiCall";
import { useSelector, useDispatch } from "react-redux";
import robot3 from "/public/assets/robot3.png";

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
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter pc Company"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type Name
          </label>
          <input
            type="text"
            id="typeName"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="typeName"
            value={typeName}
            onChange={(e) => setTypeName(e.target.value)}
            placeholder="Enter pc type name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Inches
          </label>
          <input
            type="text"
            id="inches"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="inches"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            placeholder="Enter pc inches"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Resolution
          </label>
          <input
            type="text"
            id="resolution"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="resolution"
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
            placeholder="Enter pc resolution"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CPU
          </label>
          <input
            type="text"
            id="cpu"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="cpu"
            value={cpu}
            onChange={(e) => setCPU(e.target.value)}
            placeholder="Enter pc CPU"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            RAM
          </label>
          <input
            type="text"
            id="ram"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="ram"
            value={ram}
            onChange={(e) => setRAM(e.target.value)}
            placeholder="Enter pc RAM"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            GPU
          </label>
          <input
            type="text"
            id="gpu"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="gpu"
            value={gpu}
            onChange={(e) => setGPU(e.target.value)}
            placeholder="Enter pc GPU"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Operating System
          </label>
          <input
            type="text"
            id="opSystem"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="opSystem"
            value={opSystem}
            onChange={(e) => setOpSystem(e.target.value)}
            placeholder="Enter pc Operating System"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Weight
          </label>
          <input
            type="text"
            id="weight"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter pc weight"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Memory Type
          </label>
          <input
            type="text"
            id="memoType"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="memoType"
            value={memoType}
            onChange={(e) => setMemoType(e.target.value)}
            placeholder="Enter pc Memory Type"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Memory Size
          </label>
          <input
            type="text"
            id="memoSize"
            className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="memoSize"
            value={memoSize}
            onChange={(e) => setMemoSize(e.target.value)}
            placeholder="Enter pc Memory Size"
            required
          />
        </div>
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

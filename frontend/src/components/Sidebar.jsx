import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

export default function Sidebar() {
  const [laptopsData, setLaptopsData] = useState([]);
  const [isOpen, setIsOpen] = useState({});

  useEffect(() => {
    axios
      .get("/data/data.json")
      .then((response) => {
        setLaptopsData(response.data);
        const initialIsOpenState = {};
        response.data.forEach((item) => {
          for (const key in item) {
            // if (key !== "id" && key !== "price" && key !== "link") {
            initialIsOpenState[key] = false;
            // }
          }
        });
        setIsOpen(initialIsOpenState);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleMenu = (attribute) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [attribute]: !prevState[attribute],
    }));
  };

  function displayUniqueValues() {
    const uniqueValues = {};

    laptopsData.forEach((item) => {
      for (const key in item) {
        // if (key !== "id" && key !== "price" && key !== "link") {
        if (!uniqueValues[key]) {
          uniqueValues[key] = new Set();
        }
        uniqueValues[key].add(item[key]);
        // }
      }
    });

    return Object.entries(uniqueValues).map(([attribute, values]) => (
      <div key={attribute}>
        <div className="flex justify-between buttonStyle3 p-2 my-4 gap-4">
          <div className="w-2/3 overflow-hidden p-2">
            <h6 className="text-xs font-bold my-1">{attribute}</h6>
          </div>
          <button
            onClick={() => toggleMenu(attribute)}
            aria-controls="model"
            aria-expanded={isOpen[attribute]}
            type="button"
            className="z-50 w-1/3 buttonStyle3 z-30 flex items-center justify-center cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center">
              <img
                src="./assets/Down.png"
                className="w-[50px]"
                alt="Down arrow"
              />
              <span className="sr-only">Down</span>
            </span>
          </button>
        </div>
        <ul className={`${isOpen[attribute] ? "block" : "hidden"}`} id="model">
          {[...values].map((value, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                id={index}
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={index}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {value}
              </label>
            </div>
          ))}
        </ul>
      </div>
    ));
  }

  return (
    <>
      {/* button for opening/closing sidebar */}
      {/* aside sidebar container */}
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        {/* SVG for sidebar */}
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="flex-1 relative top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {/* sidebar content */}
        {/* form and other elements */}
        <div class="h-full px-3 py-4">
          <h1 className="text-xl font-bold">Filters :</h1>

          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaSearch />
              </button>
            </div>
          </form>
          <ul className="space-y-2 font-medium my-4">
            <li>
              <div>
                {laptopsData.length > 0 ? (
                  displayUniqueValues()
                ) : (   
                  <p>Loading...</p>
                )}
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

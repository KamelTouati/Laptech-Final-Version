import React, { useState, useEffect } from "react";
import Select from "react-select";
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

export default function Sidebar({ onFilterChange }) {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedOperatingSystems, setSelectedOperatingSystems] = useState([]);
  const [selectedProcessorCompanies, setSelectedProcessorCompanies] = useState(
    []
  );
  const [selectedProcessorModels, setSelectedProcessorModels] = useState([]);
  const [selectedGraphicsCards, setSelectedGraphicsCards] = useState([]);
  const [selectedRamModels, setSelectedRamModels] = useState([]);
  const [selectedDisplayOptions, setSelectedDisplayOptions] = useState([]);
  const [selectedStorageOptions, setSelectedStorageOptions] = useState([]);

  useEffect(() => {
    onFilterChange({
      selectedCompanies,
      selectedModels,
      selectedOperatingSystems,
      selectedProcessorCompanies,
      selectedProcessorModels,
      selectedGraphicsCards,
      selectedRamModels,
      selectedDisplayOptions,
      selectedStorageOptions,
    });
  }, [
    selectedCompanies,
    selectedModels,
    selectedOperatingSystems,
    selectedProcessorCompanies,
    selectedProcessorModels,
    selectedGraphicsCards,
    selectedRamModels,
    selectedDisplayOptions,
    selectedStorageOptions,
  ]);

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="relative top-0 left-0 z-40 w-64 min-h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4">
        <h1 className="text-xl font-bold">Filters :</h1>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Company
          </label>
          <Select
            isMulti
            options={companies}
            value={selectedCompanies}
            onChange={(selected) => setSelectedCompanies(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Model
          </label>
          <Select
            isMulti
            options={models}
            value={selectedModels}
            onChange={(selected) => setSelectedModels(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Operating System
          </label>
          <Select
            isMulti
            options={operatingSystems}
            value={selectedOperatingSystems}
            onChange={(selected) => setSelectedOperatingSystems(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Processor Company
          </label>
          <Select
            isMulti
            options={processorCompanies}
            value={selectedProcessorCompanies}
            onChange={(selected) => setSelectedProcessorCompanies(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Processor Model
          </label>
          <Select
            isMulti
            options={processorModels}
            value={selectedProcessorModels}
            onChange={(selected) => setSelectedProcessorModels(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Graphics Card
          </label>
          <Select
            isMulti
            options={graphicsCards}
            value={selectedGraphicsCards}
            onChange={(selected) => setSelectedGraphicsCards(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            RAM Model
          </label>
          <Select
            isMulti
            options={ramModels}
            value={selectedRamModels}
            onChange={(selected) => setSelectedRamModels(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Display Option
          </label>
          <Select
            isMulti
            options={displayOptions}
            value={selectedDisplayOptions}
            onChange={(selected) => setSelectedDisplayOptions(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Storage Option
          </label>
          <Select
            isMulti
            options={storageOptions}
            value={selectedStorageOptions}
            onChange={(selected) => setSelectedStorageOptions(selected)}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>
      </div>
    </aside>
  );
}

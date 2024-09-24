import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import LoadingSpinner from "../components/loading.jsx";

const CreateServicesPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(!name || !description || !price){
      toast.error("Please fill all the fields");
    }

    setLoading(true);

    fetch("https://healthcare-crud.onrender.com/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
      }),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center pt-10">
        Add a Service
      </h1>
      {loading && <LoadingSpinner />}
      
      {!loading && <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full h-screen pt-10"
      >
        <div className="mb-5 md:w-1/3 w-1/2">
          <label
            htmlFor="name"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Service Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5 md:w-1/3 w-1/2">
          <label
            htmlFor="desc"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Service Description
          </label>
          <input
            type="text"
            id="desc"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-5 md:w-1/3 w-1/2">
          <label
            htmlFor="price"
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            Service Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center 
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-1/8 w-1/3"
        >
          Add
        </button>
      </form>}
    </>
  );
};

export default CreateServicesPage;

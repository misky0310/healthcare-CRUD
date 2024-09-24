import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateServicesPage = () => {

  const { id } = useParams(); //get the id from the url
  const navigate=useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5001/service/${id}`)
    .then((res) => res.json())
    .then((data)=> {
      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
    })
  },[id])

  

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5001/update/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        description,
        price
      })
    }).then(() => {
      navigate('/');
    })
    
  }

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center pt-10">
        Update Service
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full h-screen pt-10">
        <div className="mb-5 md:w-1/3 w-1/2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Service Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5 md:w-1/3 w-1/2">
          <label
            htmlFor="desc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Service Description
          </label>
          <input
            type="text"
            id="desc"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-5 md:w-1/3 w-1/2">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Service Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 
        font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center 
        dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 md:w-1/8 w-1/3"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateServicesPage;

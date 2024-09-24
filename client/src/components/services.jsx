import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import LoadingSpinner from "../components/loading.jsx";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchServices = () => {
    fetch("https://healthcare-crud.onrender.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = (e) => {
  
    const id = e.target.id;

    setLoading(true);
    
    fetch(`https://healthcare-crud.onrender.com/service/${id}`, {
      method: "DELETE",
    })
      .then((res)=> {
        if(res.ok)
          fetchServices();
      })
      .then(() => {
        navigate('/');
      })
  };


  return (
    <section className="bg-slate-800 md:max-w-[1200px] md:mx-auto">
      <h1 className="text-center text-white text-3xl pt-5 pb-3">
        OUR SERVICES
      </h1>
      {loading &&(
        <LoadingSpinner/>
      )}

      {!loading && services.length === 0 && (
          <div className="pt-10">
            <p className="text-center text-xl text-white p-10 font-bold w-fit border-2 mx-auto">NO SERVICES AVAILABLE</p>
          </div>
        )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 w-fit">
        {!loading && services.map((service, index) => (
          <div key={index}>
            <div className="bg-white p-5 rounded-lg shadow-lg h-[100%] hover:scale-110 hover:cursor-pointer">
              <h2 className="text-xl font-bold">{service.name}</h2>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-gray-800 font-bold mt-2">Rs {service.price}</p>
              <div className="flex gap-5 pt-5">
                <Link
                  to={`/update/${service._id}`}
                  className="border-2 rounded-md border-blue-500 text-sm px-5 py-2 bg-blue-700 text-white hover:bg-blue-900"
                >
                  Edit
                </Link>
                <button
                  onClick={handleDelete}
                  id={service._id}
                  className="border-2 rounded-md border-red-500 text-sm px-5 py-2 bg-red-700 text-white hover:bg-red-900"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-5 pb-5">
        <Link
          to={"/create"}
          className="border-2 border-green-500 px-5 py-2 rounded-lg bg-green-700 text-white hover:bg-green-900"
        >
          Add Service
        </Link>
      </div>
    </section>
  );
};

export default ServicesPage;

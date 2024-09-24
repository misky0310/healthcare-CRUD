
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const ServicesPage = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5001/services')
    .then((res) => res.json())
    .then((data) => {
      setServices(data)
    })
  }, [])

  return (
    <section className='bg-slate-800'>

      <h1 className='text-center text-white text-3xl pt-5 pb-3'>OUR SERVICES</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
        
        {services.map((service,index) => (
          <div key={index}>
            <div className='bg-white p-5 rounded-lg shadow-lg h-[100%] hover:scale-110 hover:cursor-pointer'>
              <h2 className='text-xl font-bold'>{service.name}</h2>
              <p className='text-gray-600'>{service.description}</p>
              <p className='text-gray-800 font-bold mt-2'>Rs {service.price}</p>
              <div className='flex gap-5 pt-5'>
                <Link to={`/update/${service._id}`} className='border-2 rounded-md border-blue-500 text-sm px-5 py-2 bg-blue-700 text-white hover:bg-blue-900'>Edit</Link>
                <button className='border-2 rounded-md border-red-500 text-sm px-5 py-2 bg-red-700 text-white hover:bg-red-900'>Delete</button>
              </div>
            </div>
          </div>
        ))}
      
      </div>

      <div className='flex justify-center pt-5 pb-5'>
        <Link to={"/create"} className='border-2 border-green-500 px-5 py-2 rounded-lg bg-green-700 text-white hover:bg-green-900'>Add Service</Link>
      </div>

    </section>
  )
}

export default ServicesPage

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreateServicesPage from './createServices'

const ServicesPage = () => {

  const [services, setServices] = useState([
    {
      "name": "General Consultation",
      "description": "A standard medical consultation with a general physician to diagnose and treat common illnesses.",
      "price": 500
    },
    {
      "name": "Blood Test",
      "description": "Comprehensive blood test to check various health markers, including cholesterol, sugar levels, and complete blood count.",
      "price": 300
    },
    {
      "name": "X-ray Imaging",
      "description": "Diagnostic X-ray imaging to assess injuries, fractures, or abnormalities in bones and tissues.",
      "price": 1000
    },
    {
      "name": "Vaccination",
      "description": "Administration of vaccines for protection against infectious diseases like flu, hepatitis, or COVID-19.",
      "price": 200
    },
    {
      "name": "Physical Therapy Session",
      "description": "One-hour session with a licensed physical therapist to assist with rehabilitation and pain management.",
      "price": 750
    }
  ])


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

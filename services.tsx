import Image from 'next/image'
import React from 'react'

 const Services = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Our Services</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Future Flame IT offers cutting-edge technology courses and expert guidance to equip students with the skills needed to thrive in the rapidly evolving digital landscape. Unlock your potential and ignite your future with our innovative training and industry-focused services.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
        src='/service1.png'
            alt='Service'
            className='object-cover object-center h-full w-full'
            width={300}
            height={250}
            />

        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Training</h2>
        <p className="text-base leading-relaxed mt-2">Future Flame: Offers cutting-edge training in the latest technologies, empowering students with the skills and knowledge to thrive in the digital era.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
        src='/ser2.png'
            alt='Service'
            className='object-cover object-center h-full w-full'
            width={300}
            height={250}
            />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Website Development and Promotion</h2>
        <p className="text-base leading-relaxed mt-2">Future Flame: Igniting Minds through Cutting-Edge Website Development and Promotion</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
            <Image
            src='/ser3.png'
            alt='Service'
            className='object-cover object-center h-full w-full'
            width={300}
            height={250}
            />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Digital Promotion</h2>
        <p className="text-base leading-relaxed mt-2">Future Flame: Ignite your potential with cutting-edge digital promotion strategies and unlock a world of endless opportunities in the tech industry.</p>
        <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}
export default Services

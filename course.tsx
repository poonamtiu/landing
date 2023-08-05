import React from 'react'


const Course = () => {
  return (
    <div className='bg-white'>
    <div className='container mx-auto pt-[80px] pb-[80px]'>
        <div className='flex items-center justify-center flex-col'>
            <h1 className='text-[32px] font-bold text-[#0e1d34]'>Most Popular Courses</h1>
            <div className='h-[4px] w-[40px] mt-[8px] bg-[#0e1d34]'>
        </div>
        <div className='grid grid-cols-3 gap-[30px] mt-[50px]'>
           <div className='border shadow-lg p-[5px]'>
            <img src="php-logo-removebg-preview.png" className='h-[350px] '  w-full object-cover alt="" />
            <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>PHP</h2>
            <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>PHP is a powerful programming language for writing server-side web applications.</p>
           </div>

           <div className='border shadow-lg p-[5px]'>
            <img src="graphic-design-logo-removebg-preview.png" className='h-[350px]' w-full object-cover alt="" />
            <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Grapic Design</h2>
            <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>After graphic designing you can creat banner,leaflet,visiting card.</p>
           </div>

           <div className='border shadow-lg p-[5px]'>
            <img src="java-logo-removebg-preview.png" className='h-[350px]' w-full object-cover alt="" />
            <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Java</h2>
            <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>JAVA is a programming language.it makes bright future.</p>
           </div>

           <div className='border shadow-lg p-[5px]'>
            <img src="data-science-logo-removebg-preview.png" className='h-[350px]' w-full object-cover alt="" />
            <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Data Science</h2>
            <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>Data science extract insights and make informed decisions from vast amounts of data, driving innovation and solving complex problems.</p>
           </div>

           <div className='border shadow-lg p-[5px]'>
            <img src="react-native-logo-removebg-preview.png" className='h-[350px]' w-full object-cover alt="" />
            <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>React Native</h2>
            <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>React Native for efficient cross-platform mobile app development.</p>
           </div>

           <div className='border shadow-lg p-[5px]'>
            <img src="search-engine-optimization-logo-removebg-preview.png" className='h-[350px]' w-full object-cover alt="" />
            <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Seo</h2>
            <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>SEO to improve online visibility and rank higher in search engine results.</p>
           </div>
        </div>
        </div>
    </div>
    </div>
  )
}
export default Course

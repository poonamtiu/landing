import Image from 'next/image'
import React from 'react'

const ClientReview = () => {
  return (
    <div className='bg-white pt-[80px] pb-[80px]'>
        <div className='flex items-center justify-center flex-col'>
             <h1 className='text-32px font-bold text-[#0e1d34]'>Client Review</h1>
             <div className='h-[4px] w-[40px] mt-[8px] bg-[#0e1d34]'></div>
        </div>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image
            src='/client.png'
            alt='testimonial'
            className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
            width={100}
            height={100}
            />
          <p className="leading-relaxed">Future Flame surpassed our expectations, delivering highly skilled talent that ignited our projects with exceptional expertise and dedication.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Shiv</h2>
          <p className="text-gray-500">CEO</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
        <Image
            src='/client2.png'
            alt='testimonial'
            className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
            width={100}
            height={100}
            />
          <p className="leading-relaxed">Future Flame delivered highly skilled talent that exceeded our expectations, making a significant impact on our projects and team's success.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Karan Tiu</h2>
          <p className="text-gray-500">Director</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <Image
            src='/client3.png'
            alt='testimonial'
            className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
            width={100}
            height={100}
            />
          <p className="leading-relaxed">Future Flame delivered highly qualified and expertly skilled aspirant, exceeding our expectations in every way.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Sundar Singh</h2>
          <p className="text-gray-500">Senior Web Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>


    

    

  )
}
export default ClientReview

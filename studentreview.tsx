import React from 'react'
import Image from 'next/image'

const StudentReview = () => {
  return (
    
    <div className='bg-white pt-[-30px] pb-[10px]'>
        <div className='flex items-center justify-center flex-col'>
             <h1 className='text-32px font-bold text-[#0e1d34]'>Student Review</h1>
             <div className='h-[4px] w-[40px] mt-[8px] bg-[#0e1d34]'></div>
        </div>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image
            src='/student review.png'
            alt='testimonial'
            className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
            width={100}
            height={100}
            />
          <p className="leading-relaxed">Future Flame provides top-notch education with excellent guidence and practical learning opportunities.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Poonam Tiu</h2>
          <p className="text-gray-500">Web Developer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
        <Image
            src='/student review1.png'
            alt='testimonial'
            className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
            width={100}
            height={100}
            />
          <p className="leading-relaxed">Future Flame provides an exceptional learning experience with expert faculty and cutting-edge resources.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Sunita Nyak</h2>
          <p className="text-gray-500">UI Develeoper</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <Image
            src='/student review2.png'
            alt='testimonial'
            className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
            width={100}
            height={100}
            />
          <p className="leading-relaxed">Future Flame offers top-notch education with exceptional teaching process, and a dynamic learning environment.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Jay Jha</h2>
          <p className="text-gray-500">SEO</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
export default StudentReview

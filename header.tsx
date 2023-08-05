import Image from 'next/image';
import React from 'react'
import CountUp,{useCountUp} from 'react-countup';

type props = {}
const Header = (props: props) => {
    useCountUp ({
       ref: 'counter',
       end: 1234567,
       enableScrollSpy: true,
       scrollSpyDelay: 1000, 
    });
    return (
        <div className='bg-[#0e1d34] banner'>
            <div className='container mx-auto f pt-[20px] text-white'>
                <div className='flex items-center justify-between'>
                <div className='main'>
                    <Image
                    src='/logo2-removebg-preview.png'
                    alt='logo2-removebg-preview'
                    className='w-[30] h-[30] logo rounded-full" viewbox="0 0 24 24 text-white'
                    width={300}
                    height={250}
                    /> 
                    </div>
                <div className='flex items-center gap-[30px]'>
                    <ul className='flex items-center gap-[40px] cursor-pointer font-semibold '>
                        <li><a className="hover:bg-indigo-600"href=''>Home</a></li>
                        <li><a className="hover:bg-indigo-600" href=''>About</a></li>
                        <li><a className="hover:bg-indigo-600" href=''>Course</a></li>
                        <li><a  className="hover:bg-indigo-600" href=''>Pages</a></li>
                        <li><a className="hover:bg-indigo-600" href=''>Services</a></li>
                       
                        <li><a className="hover:bg-indigo-600" href=''>Contact</a></li>
                    </ul>
                    <button className='btn bg-[#2756ff] py-[10px] px-[20px] text-[white] text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] '>Join Us</button>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-[40px] pb-[40px]'>
            <div>
            <div className='text-white'>
            <h1 className='text-[48px] leading-[58px] w-[60%] font-bold mt-[50px]'>Transforming Dreams into Code</h1>
            <p className='text-[15px] leading-[23px] font-normal mt-[30px] w-[80%]'>Empowering Minds, Building Futures: Your Gateway to Tech Excellence: Join Future Flame for a Brighter Future</p>
            <div className='bg-white w-[60%] pr-[4px] rounded-[6px] flex items-center mt-[30px]'>
                <input type='text' className='bg-white outline-none w-full text-black py-[17px] pl-[14px]' placeholder='zip code or city' />
                <button className='bg-[#2756ff] py-[12px] px-[20px] text-white rounded-[4px]'>Search</button>
            </div>
            </div>
            <div className='grid grid-cols-4 mt-[30px] pl-[20px]'>
                <div className='space-y-[10px] flex flex-col items-start justify-start'>
                    <h2 className='text-[32px] font-semibold'><CountUp end={3400} enableScrollSpy /></h2>
                    <div className='h-[5px] w-[20px] bg-[#2756ff]'></div>
                    <p>clients</p>
                </div>

                <div className='space-y-[10px] flex flex-col items-start justify-start'>
                    <h2 className='text-[32px] font-semibold'><CountUp end={1234} enableScrollSpy /></h2>
                    <div className='h-[5px] w-[20px] bg-[#2756ff]'></div>
                    <p>Students</p>
                </div>

                <div className='space-y-[10px] flex flex-col items-start justify-start'>
                    <h2 className='text-[32px] font-semibold'><CountUp end={2500} enableScrollSpy /></h2>
                    <div className='h-[5px] w-[20px] bg-[#2756ff]'></div>
                    <p>supports</p>
                </div>

                <div className='space-y-[10px] flex flex-col items-start justify-start'>
                    <h2 className='text-[32px] font-semibold'><CountUp end={4500} enableScrollSpy /></h2>
                    <div className='h-[5px] w-[20px] bg-[#2756ff]'></div>
                    <p>Workers</p>
                </div>

            </div>
            </div>

           <div className='flex items-center justify-end'>
                <img src='banner-bg.png' className='z-10 w-[87%] alt=""'></img>
            </div>
            </div>
            </div>
        </div>
      )
    }


  

export default Header;

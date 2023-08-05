import {FaAward, FaCaretRight} from "react-icons/fa"
import Image from 'next/image'



 const About = () => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto grid grid-cols-2 gap-[40px] pt-[40px]'>
        <div>
                <h1 className='text-[32px] font-bold text-[#0e1d43]'>About</h1>
                <p className='text-[15px] font-normal leading-[23px] text-gray-600'>FUTURE FLAME is the NO1 Computer training institute in Odisha.This institute provides most demanding computer courses like DCA,PGDCA,TALLY,GRAPHIC DESIGNING,WEB DESIGNING,PHP & MY SQL,2D ANIMATION,3D ANIMATION.</p>
        <div className='Space-y-[15px] pt-[20px] pl-[10px}'>
        <div className='flex gap - [15px] border-[#0e1d34]/{0.2} border-b-{1px} pb-[10px] items-center'>
                    <FaAward fontSize={38} />
                    <div>
                    <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0de1d43]'>High-standards of training available here..</h2>
                    <p className='text-[15px] font-normal leading-[23px] text-gray-600'>One to one interaction with each student,also personal workstations.Our high standards of training ensure personalized learning, hands-on experience, and expert guidance.
                    </p>
                        </div>
                    </div>
                
                    <div className='flex gap - [15px] border-[#0e1d34]/{0.2} border-b-{1px} pb-[10px] items-center'>
                    <FaAward fontSize={38} />
                    <div>
                    <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0de1d43]'>Speed broadband internet access</h2>
                    <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Experience lightning-fast internet with our high-speed broadband connection, delivering seamless streaming, instant downloads, Regularly quick updated course material.</p>
                        </div>
                    </div>

                    <div className='flex gap - [15px] border-[#0e1d34]/{0.2} border-b-{1px} pb-[10px] items-center'>
                    <FaAward fontSize={38} />
                    <div>
                    <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0de1d43]'>Library</h2>
                    <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Explore a vast collection of cutting-edge tech resources at our modern library with extensive range of books ,online resources on programming, cybersecurity, AI, and more.</p>
                        </div>
                    </div>

                    <div className='flex gap - [15px] border-[#0e1d34]/{0.2} border-b-{1px} pb-[10px] items-center'>
                    <FaAward fontSize={38} />
                    <div>
                    <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0de1d43]'>Weekend classes for working professional.</h2>
                    <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Empower your career with our IT Institute's weekend classes tailored for working professionals. Upgrade your skills and achieve success at your own pace.</p>
                        </div>
                    </div>

                    <div className='flex gap - [15px] border-[#0e1d34]/{0.2} border-b-{1px} pb-[10px] items-center'>
                    <FaAward fontSize={38} />
                    <div>
                    <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0de1d43]'>100% career assistance for you future.</h2>
                    <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Empower your future with our IT institute's 100% career assistance. Unlock your potential and seize the opportunities in the ever-evolving tech industry.</p>
                        </div>
                    </div>


                    </div>
            </div>

                   <div className='relative'>
    <img src="online-certification.jpg" alt="" className="about" />
    <div className='absolute top-[50%] transform left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer bg-[#0d42ff] h-60px w-60px rounded-full flex items-center justify-center'>
    <FaCaretRight color='#fff' fontSize={30} />
    <div className='absolute h-[45px] w-[45px] rounded-full bg-[#0d42ff] animate-ping'>
         
    </div>
    </div>
</div>

        </div>
    </div>
  )
}
export default About;

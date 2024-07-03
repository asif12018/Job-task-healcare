
import { MdArrowOutward } from "react-icons/md";

import xray from '../../../public/Rectangle27-2.png';
import arrow from '../../../public/arrow2.svg';
import docSime from '../../../public/Rectangle27-1.png';
import femaleDocsmile from '../../../public/Rectangle27.png'

const Services = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-3">
            
            <div className=" bg-[#FFFFF5] rounded-3xl border p-6">
            <button className="btn btn-outline text-[16px] font-[400] rounded-3xl w-[105px]">Service</button>
            <h3 className="text-[36px] font-[600] text-[#020043]  py-[16px]">
            Empowering Health, Enriching Lives
            </h3>
            <p className="text-[#4D4C7B] text-[16px] font-[400] pb-[20px]">
            We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
            </p>
            <button className="btn bg-[#FFC637] rounded-3xl w-[171px]"> <span className="flex">Appointment <MdArrowOutward /></span></button>
            </div>


            <div className=" relative">
               <img className="rounded-3xl w-full" src={xray} alt="" />
               <div className='hidden md:flex md:flex-col bg-[#343268] opacity-80 w-4/5 text-white rounded-3xl absolute bottom-10 translate-x-[30px]'>
                            <h3 className='text-[26px] font-[500] pt-[47px] pl-[30px] '>Our mission is simple</h3>
                            
                            <div className=" pt-[20px] pb-[47px] pl-[30px] flex justify-center items-center">
                            <p className='text-[16px]'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                            <img className="mr-3" src={arrow} alt="" />
                            </div>
                        </div>
            </div>


            
            <div className=" relative">
               <img className="rounded-3xl w-full" src={docSime} alt="" />
               <div className='hidden md:flex md:flex-col bg-[#343268] opacity-80 w-4/5 text-white rounded-3xl absolute bottom-10 translate-x-[30px]'>
                            <h3 className='text-[26px] font-[500] pt-[47px] pl-[30px] '>Online Doctor Meet</h3>
                            
                            <div className=" pt-[20px] pb-[47px] pl-[30px] flex justify-center items-center">
                            <p className='text-[16px]'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precisio</p>
                            <img className="mr-3" src={arrow} alt="" />
                            </div>
                        </div>
            </div>


           
            <div className="relative">
               <img className="rounded-3xl w-full" src={femaleDocsmile} alt="" />
               <div className='hidden md:flex md:flex-col bg-[#343268] opacity-80 w-4/5 text-white rounded-3xl absolute bottom-10 translate-x-[30px]'>
                            <h3 className='text-[26px] font-[500] pt-[47px] pl-[30px] '>Consultancy your health</h3>
                            
                            <div className=" pt-[20px] pb-[47px] pl-[30px] flex justify-center items-center">
                            <p className='text-[16px]'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                            <img className="mr-3" src={arrow} alt="" />
                            </div>
                        </div>
            </div>

        </div>
    );
};

export default Services;
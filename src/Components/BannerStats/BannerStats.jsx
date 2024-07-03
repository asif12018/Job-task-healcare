

import pieImg from '../../../public/pieIcons.svg'
import videoImg from '../../../public/videoIcons.svg'
import contact from '../../../public/contract.svg';
import start from '../../../public/start.svg'
import user1 from '../../../public/Ellipse2.svg'
import user2 from '../../../public/Ellipse3.svg'
import user3 from '../../../public/Ellipse4.svg'
import user4 from '../../../public/Ellipse5.svg'
import coin from '../../../public/coin.svg';

const BannerStats = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {/*==== left card ====*/}
                <div className="col-span-1 bg-[#FBFBFB] border rounded-[24px] order-2 md:order-1">
                    <h3 className="text-[48px] font-[600] ml-[20px]">90%</h3>
                    <p className="text-[14px] ml-[20px]">Patient satisfaction rate, reflecting our commitment.</p>
                    <div className='flex justify-center  w-full py-[23px]  '>
                        <img className='w-[130px] ' src={pieImg} alt="" />
                    </div>
                </div>

                {/*====== middle section card group========*/}


                <div className="col-span-1 md:col-span-3 order-1 sm:order-2">

                    <div className=''>
                        <h3 className='text-[#020043] text-[48px] font-[600] text-center'>Comprehensive Care for Every Patient</h3>
                    </div>


                    <div className=''>


                        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 '>


                            <div className='bg-[#fffff5]  border rounded-3xl'>
                                <h3 className="text-[48px] font-[600] ml-[20px]">500+</h3>
                                <p className="text-[14px] ml-[20px]">Board-certified doctors</p>
                                <div className='flex justify-end items-center w-[85%] py-[23px]  '>
                                    <img className='w-[77px] ' src={contact} alt="" />
                                </div>
                            </div>


                            <div className='bg-[#FBFBFB] mt-0 border rounded-3xl md:mt-12'>
                                <div className='flex'>
                                    <h3 className="text-[48px] font-[600] ml-[20px]">4.8
                                    </h3>
                                    <img src={start} alt="" />
                                </div>
                                <p className="text-[14px] ml-[20px]">Over 20,000 Patient</p>
                                <div className='flex justify-start items-center w-[85%] py-[23px]'>
                                    <div>
                                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                            <div className="avatar">
                                                <div className="w-12">
                                                    <img src={user1} />
                                                </div>
                                            </div>
                                            <div className="avatar">
                                                <div className="w-12">
                                                    <img src={user2} />
                                                </div>
                                            </div>
                                            <div className="avatar">
                                                <div className="w-12">
                                                    <img src={user3} />
                                                </div>
                                            </div>
                                            <div className="avatar">
                                                <div className="w-12">
                                                    <img src={user4} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='border  bg-[#FFFFF5] rounded-3xl '>
                                <h3 className="text-[48px] font-[600] ml-[20px]">$5000</h3>
                                <p className="text-[14px] ml-[20px]">Money spend
                                    for poor patient</p>
                                <div className='flex justify-end items-center w-[85%] py-[23px]'>
                                    <img className='w-[77px] ' src={coin} alt="" />
                                </div>
                            </div>

                        </div>




                    </div>

                </div>

                {/**====== right card ======= */}

                <div className="col-span-1 order-3 bg-[#FBFBFB] border-2 rounded-[24px] ">
                    <h3 className="text-[48px] font-[600] ml-[20px]">50+</h3>
                    <p className="text-[14px] ml-[20px]">Free lession video
                        for patient</p>
                    <div className='flex justify-center items-center w-full py-[23px]'>
                        <img className='w-[130px] ' src={videoImg} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BannerStats;

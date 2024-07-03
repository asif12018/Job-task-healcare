
import heroImg from '../../../public/Rectangle24.png'

const Hero = () => {
    return (
        <div className="my-[160px]">
            <div className="">
                <div className="flex justify-between flex-col md:flex-row-reverse">

                    <div className="w-[100%] md:w-[45%] relative ">
                        <img
                            src={heroImg}
                            className=" rounded-lg shadow-2xl" />

                        <div className='hidden md:flex md:flex-col bg-[#343268] w-4/5 text-white rounded-3xl absolute -bottom-16 -translate-x-[100px]'>
                            <h3 className='text-[26px] font-[500] pt-[47px] pl-[30px] pr-[18px]'>Our mission is simple</h3>
                            <p className='text-[16px] pt-[20px] pb-[47px] pl-[30px] pr-[18px]'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                        </div>
                    </div>


                    <div className="w-[100%] md:w-[40%] h-full ">
                        <button className="btn btn-outline w-[139px] bg-[#FFFFF5] text-[#343268CC] rounded-3xl">Who we are </button>
                        <h1 className="text-[36px] font-[600] ">We Help To Get Soultions</h1>
                        <p className="py-6">
                            We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.

                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
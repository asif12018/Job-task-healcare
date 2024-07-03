import { MdArrowOutward } from "react-icons/md";


const Promotion = () => {
    return (
        <div
        className="hero min-h-[470px] mb-[40px] mt-[100px]"
        style={{
          backgroundImage: "radial-gradient(648.07% 142.78% at 98.23% 78.35%, #020043 0%, rgba(2, 0, 67, 0.30) 100%),url(https://i.postimg.cc/KYSSMxYY/Rectangle32.png)",
          borderRadius:"43px"
        }}>
        <div className=""></div>
        <div className=" text-left">
          <div className="">
           
          <h3 className="mb-5 text-5xl max-w-[530px] font-bold text-white leading-normal">Get Your
First Appointment
at 50% Off!</h3>
      <p className="mb-5 opacity-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className="space-x-2">
      <button className="btn border-0 bg-[#FFC637] w-[170px]"><span className="flex gap-3">Appointment <MdArrowOutward /></span></button>
      <button className="btn btn-outline outline-white text-white w-[170px]"><span className="flex gap-3">Learn More <MdArrowOutward /></span></button>
      </div>
            
          </div>
        </div>
      </div>
    );
};

export default Promotion;
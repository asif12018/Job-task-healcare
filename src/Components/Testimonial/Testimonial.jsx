
import user1 from '../../../public/review1.svg'
import user2 from '../../../public/review2.svg'
import user3 from '../../../public/review3.svg'

const Testimonial = () => {
    return (
        <div className="mt-[170px]">
            <button className="btn btn-outline w-[134px] rounded-3xl">Testimonial</button>
            <h3 className="text-[36px] font-[600] pt-[16px] pb-[30px]">What they say about us</h3>

            <div className='flex flex-col md:flex-row gap-2'>

                <div className="card bg-[#FFFFF5] w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[19px] font-[600]">Expertise and Compassion Combined</h2>
                        <p className="text-[12px] font-[400] text-[#4D4C7B] pt-[12px] pb-[20px]">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                        <div className="card-actions justify-start">
                            <div className='flex w-full gap-5'>
                                <div className="avatar">
                                    <div className=" w-[50px] h-[50px] rounded-full ">
                                        <img src={user1} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[12px]'> <span className='font-bold'>Sarah D,</span> IT Professional </h4>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]"  />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]"defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-[#FFFFF5] w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[19px] font-[600]">Life-Saving Care, Life-Changing Experience</h2>
                        <p className="text-[12px] font-[400] text-[#4D4C7B] pt-[12px] pb-[20px]">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                        <div className="card-actions justify-start">
                            <div className='flex w-full gap-5'>
                                <div className="avatar">
                                    <div className=" w-[50px] h-[50px] rounded-full ">
                                        <img src={user2} />        
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[12px]'> <span className='font-bold'>Michael R,</span>  Business Executive </h4>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]"  />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]"defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-[#FFFFF5] w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[19px] font-[600]">A Partner in Health and
                        Wellness</h2>
                        <p className="text-[12px] font-[400] text-[#4D4C7B] pt-[12px] pb-[20px]">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                        <div className="card-actions justify-start">
                            <div className='flex w-full gap-5'>
                                <div className="avatar">
                                    <div className=" w-[50px] h-[50px] rounded-full ">
                                        <img src={user3} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-[12px]'> <span className='font-bold'>David S,</span> Lawyer </h4>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]"  />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFE03D]"defaultChecked />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Testimonial;
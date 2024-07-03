

const Faq = () => {
    return (
        <div className="mt-[160px]">
            <button className="btn btn-outline  rounded-3xl text-[16px]">Faq</button>

            <h3 className="text-[36px] font-bold pt-[16px] pb-[20px]">Frequntly Asked Question</h3>

            <div className="flex flex-col gap-3">


            <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium"><span className="ml-[40px] text-[#343268]"> What are your office hours?</span></div>
                    <div className="collapse-content">
                    <div className="ml-[40px] bg-[#FFFFFF]">
                        <p className="text-[#343268]"><span className="">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</span></p>
                        </div>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium"><span className="ml-[40px] bg-[#FFFFFF]">How can I schedule an appointment?</span></div>
                    <div className="collapse-content">
                        <div className="ml-[40px] ">
                        <p className="text-[#343268]"><span className="">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</span></p>
                        </div>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium"><span className="ml-[40px] bg-[#FFFFFF]">Do you accept insurance?</span></div>
                    <div className="collapse-content">
                    <div className="ml-[40px] ">
                        <p className="text-[#343268]"><span className="">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</span></p>
                        </div>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-[#FFFFF5]">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium"><span className="ml-[40px] bg-[#FFFFFF]">What should I bring to my appointment?</span></div>
                    <div className="collapse-content">
                    <div className="ml-[40px] ">
                        <p className="text-[#343268]"><span className="">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</span></p>
                        </div>
                    </div>
                </div>
               
               


            </div>

        </div>
    );
};

export default Faq;
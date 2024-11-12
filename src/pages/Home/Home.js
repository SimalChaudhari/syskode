import enquiry from "../../assets/images/enquiry.jpg";
import TopBG from "../../assets/images/TopBG.png";
import TopImage from "../../assets/images/TopImage.png";
import cogwheel from "../../assets/images/cogwheel.png";
import code from "../../assets/images/code.png";
import LG1 from "../../assets/images/LG1.png";
import LG2 from "../../assets/images/LG2.png";
import LG3 from "../../assets/images/LG3.png";
import LG4 from "../../assets/images/LG4.png";
import LG5 from "../../assets/images/LG5.png";
import LG6 from "../../assets/images/LG6.png";
import LG7 from "../../assets/images/LG7.png";
import LG8 from "../../assets/images/LG8.png";
import LG9 from "../../assets/images/LG9.png";
import conversation from "../../assets/images/conversation.png";
import Zoho_authorized_partner from "../../assets/images/Zoho_authorized_partner.png";
import { CustomSlider } from "../../components";
import { HiMiniArrowRightCircle } from "react-icons/hi2";

const Home = () => {
    return (
        <div className="text-center ">
            {/* First Content */}
            <div
                className="bg-white bg-cover bg-center relative"
                style={{ backgroundImage: `url(${TopBG})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-custome-blue-dark opacity-85"></div>

                {/* Centered Container Wrapper */}
                <div className="relative py-16 px-5 lg:px-16">
                    <div className="max-w-webContainer mx-auto text-white">
                        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:text-left">

                            {/* Text Content */}
                            <div className="flex-1 max-w-full lg:max-w-[50%]">
                                <b className="text-sm font-bold block font-montserrat mb-2 text-left">
                                    GET THE ULTIMATE TECHNOLOGY AND STRATEGY
                                </b>
                                <h1 className="text-3xl lg:text-5xl font-bold font-montserrat mb-7 text-left">
                                    Bahrain Zoho Partner and Zoho Consultant
                                </h1>
                                <p className="text-base font-semibold font-nunitosans text-left">
                                    Our team of consultants and business strategists invests the necessary time to
                                    comprehensively grasp your challenges and potential opportunities. This enables us
                                    to craft tailored solutions to address your specific requirements. You can place
                                    your trust in our expertise with Zoho. Explore our certifications, including our
                                    status as a Reseller, Vertical Partner (specializing in crafting industry-specific
                                    CRMs using Zoho), Certified Solution Provider, and our seasoned team boasting
                                    numerous certified Creator Developers. Our approach is multi-faceted and thorough.
                                </p>
                                <p className="text-base font-nunitosans mt-12 font-bold">
                                    Bahrain | UAE | Saudi Arabia
                                </p>
                            </div>

                            {/* Image */}
                            <div className="flex-1 max-w-full lg:max-w-[50%] flex justify-center lg:justify-end lg:mt-0 mt-10">
                                <img src={TopImage} alt="Top BannerImage" className="lg:w-[80%] rounded-lg shadow-md" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Second Content */}

            <CustomSlider />

            {/* Third Content */}

            <div className="max-w-webContainer mx-auto">
                <div className="bg-white my-14">
                    <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between max-w-webContainer gap-10 my-24">
                        {/* Left Side Content */}

                        <div className="w-full lg:max-w-[50%] mt-5 lg:mt-0  h-full flex items-center">
                            <img src={enquiry} alt="EnquiryImage" className="w-full object-cover ml-auto" />
                        </div>


                        {/* Right Side Image */}
                        <div className="flex flex-col items-start max-w-full lg:max-w-[50%] text-center lg:text-left h-full">

                            <p className='font-montserrat font-semibold text-base text-left'>Prepare for the Future and Safeguard Your Success</p>
                            <h2 className="text-custome-black text-2xl lg:text-4xl font-bold font-montserrat items-start text-left">
                                Optimize Unify and Enhance Your Business Process
                            </h2>
                            <p className="mt-3 mb-10 text-base lg:text-lg font-nunitosans font-bold text-custome-gray tracking-wide text-left">
                                Achieve operational excellence by seamlessly integrating data, automating workflows, and improving collaboration with Zoho. Consult Syskode Technologies to acquire Zoho for your business at a competitive price.
                            </p>

                            <div className="flex items-center gap-1">
                                <p className="text-white bg-custome-yellow hover:bg-custome-blue font-nunitosans font-bold px-4 py-2 cursor-pointer  transition-all duration-300 ">
                                    Quick Enquiry
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Forth Content */}
            <div className="bg-white my-14 relative">


                {/* Third Wave (Top) */}

                {/* Main Content */}
                <div className="mx-5 lg:mx-auto max-w-screen-xl mt-24 relative z-10">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8 gap-6 ">
                        <div className="text-center bg-white p-6 rounded-lg shadow-xl border-s-slate-50 border-2 transition-transform transform hover:scale-105 mt-5">
                            <img src={cogwheel} alt="cogwheel" className="mx-auto mb-4 w-20 h-20 object-contain" />
                            <h3 className="font-semibold text-base font-montserrat mb-3">IMPLEMENTATION</h3>
                            <p className="text-base text-custome-gray font-nunitosans">The anticipated growth of customer attrition rates has spurred enterprises to invest in Customer Relationship Management (CRM) software, leading to a projected market value of US$48.4 billion by 2020.</p>
                        </div>

                        <div className="text-center bg-white p-6 rounded-lg shadow-xl border-s-slate-50 border-2 transition-transform transform hover:scale-105 mt-5">
                            <img src={code} alt="code" className="mx-auto mb-4 w-20 h-20 object-contain" />
                            <h3 className="font-semibold text-base font-montserrat mb-3">DEVELOPMENT</h3>
                            <p className="text-base text-custome-gray font-nunitosans">We invest the effort to thoroughly comprehend our clients’ requirements, leveraging our expertise to craft a tailored solution that aligns perfectly with their business goals. Even if you don’t possess the technical know-how to address your business challenges, we’ve got you covered!</p>
                        </div>

                        <div className="text-center bg-white p-6 rounded-lg shadow-xl border-s-slate-50 border-2 transition-transform transform hover:scale-105 mt-5">
                            <img src={conversation} alt="conversation" className="mx-auto mb-4 w-20 h-20 object-contain" />
                            <h3 className="font-semibold text-base font-montserrat mb-3">CONSULTING</h3>
                            <p className="text-base text-custome-gray font-nunitosans">We assist our clients in pinpointing various areas of improvement within their business, and subsequently tailor, integrate, and deploy Zoho solutions designed to address these specific challenges. With our support, clients can expect enhanced efficiency and a reduction in operational frustrations.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Content */}
            <div className="mx-5 lg:mx-auto max-w-screen-xl mt-24">
                <div>
                    <p className="text-custome-blue-dark font-bold font-montserrat">Zoho Product Suit</p>
                    <h3 className="text-custome-black font-montserrat font-bold lg:text-3xl text-xl">Experience the Complete Operating System for Business</h3>
                    <p className="text-custome-gray  font-nunitosans content_container lg:text-lg text-base">Innovative and robust software suite designed to streamline your entire business operations, provided by a forward-thinking company committed to revolutionizing your work processes for the long term.</p>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-8 gap-6 my-10">

                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG1} alt="LG1" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho One</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Experience the Complete Operating System for Business</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG2} alt="LG2" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho CRM</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Accelerate business expansion through CRM solutions powered by AI</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG3} alt="LG3" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho Analytics</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Uncover Practical Insights through Business Intelligence and Analytics</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG4} alt="LG4" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho Desk</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Enable your support team to provide exceptional customer experiences</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG5} alt="LG5" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho Projects</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Efficiently Strategize, Monitor, and Implement Elaborate Projects Across</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG6} alt="LG6" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho Books</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Effortlessly and Safely Handle Your Financial Affairs while Ensuring Compliance.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG7} alt="LG7" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho Inventory</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Supervise orders, monitor inventory levels, process tax invoices, and manage warehouse operations.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG8} alt="LG8" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho Form</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Generate and distribute forms online, gather information, and work together with your team while on the move.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-5">
                        <img src={LG9} alt="LG9" className="w-[20%] mb-4" />
                        <p className="font-montserrat font-bold text-custome-black text-sm">Zoho Sign</p>
                        <p className="font-nunitosans text-custome-gray content_zoho">Ensure complete security and reliability while digitally signing your business documents online.</p>
                    </div>

                </div>


            </div>




            {/* Sixth Skip */}
            <div className="bg-custome-blue-brite my-14 p-4  flex flex-col items-center text-center text-white py-16 px-5 relative">
                <div className="lg:flex max-w-webContainer items-center justify-between w-full py-10 gap-12">
                    <div className="flex flex-col items-center justify-between  w-full">
                        <div className="flex  items-center justify-between w-full my-5">
                            <div className="w-full border-0"></div>
                            <div className="w-full border-2"></div>
                        </div>
                        <div>
                            <h2 className="font-montserrat font-bold text-4xl">Ready To Get Started?</h2>
                        </div>
                        <div className="flex  items-center justify-between w-full my-5">
                            <div className="w-full border-2"></div>
                            <div className="w-full border-0"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between w-full lg:mt-0 mt-10">
                        <button className="bg-custome-orange hover:bg-custome-blue rounded-lg lg:font-bold font-semibold font-montserrat lg:text-xl text-lg lg:px-5 px-3 lg:py-3 py-2 flex items-center gap-2">
                            <div>Schedule a Consultation</div>
                            <div>
                                <HiMiniArrowRightCircle className="text-2xl" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Seventh Content */}

            <div className="max-w-webContainer mx-auto">
                <div className="bg-white my-14">
                    <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between max-w-webContainer my-24">
                        {/* Left Side Content */}
                        <div className="flex flex-col items-start max-w-full lg:max-w-[60%] text-center lg:text-left h-full">

                            <p className='font-montserrat font-bold text-base text-custome-blue-dark text-left'>WHY SYSKODE FOR ZOHO</p>
                            <h2 className="text-custome-black text-xl lg:text-2xl font-bold font-montserrat items-start text-left">
                                We Ourselves Run Entirely on Zoho
                            </h2>
                            <p className="mt-3 mb-10 text-sm lg:text-base font-nunitosans text-custome-gray text-left">
                                Right from the beginning of our partnership with Zoho, Suskode made the strategic decision to initially deploy Zoho One within our own organization, ensuring that we gained comprehensive expertise before extending Zoho services to our clients. This guarantees that our team of Zoho experts is consistently attuned to any possible challenges that could affect your business.
                            </p>



                        </div>


                        {/* Right Side Image */}

                        <div className="w-full lg:max-w-[40%] mt-5 lg:mt-0  h-full flex items-center">
                            <img src={Zoho_authorized_partner} alt="Zoho_authorized_partnerImage" className="lg:w-3/4 object-cover ml-auto" />
                        </div>


                    </div>

                </div>

            </div>








        </div>
    );
};

export default Home;

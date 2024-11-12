import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterLogo from "../../assets/images/footer_logo.png";
import { BsGlobe2 } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footerContent bg-gray-800 text-white py-10">
      <div className="max-w-webContainer mx-auto flex flex-col items-center">

        {/* Logo Section */}
        <img src={FooterLogo} alt="Footer Logo" className="w-auto h-20 mb-6" />

        {/* Contact Information Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          {/* Bahrain Office */}
          <div className="flex flex-col items-center justify-center  space-y-3">
            <BsGlobe2 className="text-custome-icon-color text-4xl mb-2" />
            <div className="space-y-1">
              <h4 className="font-bold">Kingdom of Bahrain</h4>
              <p>Syskode Technologies W.L.L</p>
              <p>Exhibition Tower</p>
              <p>Office No – 1102, Sanabis</p>
              <p className="font-nunitosans text-custome-footer-color font-bold">Our Address</p>
            </div>
          </div>

          {/* UAE Office */}
          <div className="flex flex-col items-center justify-center  space-y-3">
            <BsGlobe2 className="text-custome-icon-color text-4xl mb-2" />
            <div className="space-y-1">
              <h4 className="font-bold">United Arab Emirates</h4>
              <p>Syskode Technologies SPCFZE</p>
              <p>Entrance No. 2, Al Zahia Area</p>
              <p>Sheikh Mohammed Bin Zayed Rd, UAE</p>
              <p className="font-nunitosans text-custome-footer-color font-bold">Our Address</p>
            </div>
          </div>

          {/* Saudi Arabia Office */}
          <div className="flex flex-col items-center justify-center  space-y-3">
            <BsGlobe2 className="text-custome-icon-color text-4xl mb-2" />
            <div className="space-y-1">
              <h4 className="font-bold">Saudi Arabia</h4>
              <p>Al Khobar North</p>
              <p>Prince Talal Bin Abdulaziz Street</p>
              <p>Building 7879</p>
              <p className="font-nunitosans text-custome-footer-color font-bold">Our Address</p>
            </div>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">

          {/* Email */}
          <div className="flex flex-col items-center justify-center  space-y-3">
            <HiMail className="text-custome-icon-color text-4xl mb-3" />
            <div>
              <h4 className="font-bold">info@syskode.com</h4>
              <p className="font-nunitosans text-custome-footer-color font-bold my-2">Our Mailbox</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center  space-y-3"></div>

          {/* Phone */}
          <div className="flex flex-col items-center justify-center  space-y-3">
            <BiSolidPhoneCall className="text-custome-icon-color text-4xl mb-3" />
            <div>
              <h4>+973 1607 2321</h4>
              <h4>+973 3751 3751</h4>
              <h4>+966 50 348 5565</h4>
              <p className="font-nunitosans text-custome-footer-color font-bold my-2">Our Phone</p>
            </div>
          </div>
        </div>

        <p className="text-custome-footer-color font-nunitosans mt-7">Copyright © 2024  All Rights Reserved.</p>

        <div className=" flex gap-4 text-slate-300 mt-7">
          <FaTwitter className="text-2xl bg-white text-custome-icon-x rounded-full p-1" /> <FaFacebookF className="text-2xl bg-white text-custome-icon-fb rounded-full p-1" /> <FaLinkedinIn className="text-2xl bg-white text-custome-icon-in rounded-full p-1" /> <FaInstagram className="text-2xl bg-white text-custome-icon-ig rounded-full p-1" />
        </div>

      </div>
    </div>
  );
};

export default Footer;

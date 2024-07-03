

import logo from '../../../public/logolight.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer flex flex-col md:flex-row items-center justify-evenly  bg-[#020043] text-white py-36">
  <nav>
    <img src={logo} alt="" />
    <a className="link link-hover py-[33px]">123 Main Street Anytown, USA <br /> Postal Code: 12345   </a>
    <a className="link link-hover">Support: support@oyolloo.com <br />
    (Available : 10:00am to 07:00pm)</a>
   
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title">Home</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Success Page</a>
    <a className="link link-hover">Terms And Condition</a>
    
  </nav>
  <nav className='space-y-3'>
    <h6 className="footer-title">Service</h6>
    <a className="link link-hover">Scheduling</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Patient Portal</a>
  </nav>

  <nav>
    <h6 className="footer-title">Follow Us</h6>
    <div className='flex gap-5'>
    <a className="link link-hover"><FaFacebook size={'25px'} /></a>
    <a className="link link-hover"><FaInstagram size={'25px'} /></a>
    <a className="link link-hover"><FaLinkedin size={'25px'} /></a>
    <a className="link link-hover"><FaYoutube size={'25px'} /></a>
    </div>
  </nav>
 
</footer>
    );
};

export default Footer;
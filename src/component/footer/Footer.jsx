import React from 'react';
import softsynthlogo from '../../images/softsynthlogo.png';
import { FaFacebookF,FaInstagram,FaLinkedin,FaWhatsapp,FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import {IoLocationOutline} from "react-icons/io5";


const Footer = () => {
return (
<>
<footer className='bg-black w-full text-white px-3 sm:px-16 pb-8'>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between border-b-2 border-solid border-gray-800 pb-4 ">
            <img src={softsynthlogo} alt="Softsynth Logo" className='w-[200px] pt-4' />
            <div className="md:flex md:items-center">
                <p className="text-sm my-4">Visit us on social networks:</p>
                <div className="Social-icon flex gap-2">
                    <a href="https://www.facebook.com/softsynth" target="_blank">
                        <FaFacebookF
                            className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-2xl mx-2 my-2" />
                    </a>
                    <a href="https://www.instagram.com/softsynthsoftwaresolutions/" target="_blank">
                        <FaInstagram
                            className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-2xl mx-2 my-2" />
                    </a>
                    <a href="https://www.linkedin.com/company/softsynth-software-solutions" target="_blank">
                        <FaLinkedin
                            className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-2xl mx-2 my-2" />
                    </a>
                    <a href="https://wa.me/919821121575" target="_blank">
                        <FaWhatsapp
                            className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-2xl mx-2 my-2" />
                    </a>
                    <a href="mailto:info@softsynthsoftfwaresolution.com" target="_blank">
                        <FaRegEnvelope
                            className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-2xl mx-2 my-2" />
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-content sm:flex sm:flex-wrap sm:flex-row md:gap-4 sm:justify-between text-left">
            <div className="contacts">
                <h4 className="text-2xl mt-5 relative mb-10 before:content-[''] before:absolute before:top-10 before:w-[2rem] before:h-0.5 before:bg-[var(--font-color)]">Contact us anytime</h4>
                <li  className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300 my-2">
                    <FaPhoneAlt className="inline-block mr-4" /><a href="tel:9821121575"> 9821121575</a><a href="tel:+91 129-4154215"> +91 129-4154215
                    </a>
                </li>
                <li  className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300 my-2">
                    <FaRegEnvelope className="inline-block mr-4" /><a
                        href="mailto:info@softsynthsoftfwaresolution.com">info@softsynthsoftwaresolution.com</a>
                </li>

                <li  className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300">
                    <IoLocationOutline className="inline-block mr-4" /><a href="https://goo.gl/maps/ru5kgBZxPE9jgyAa9" className="">SCF - 165, First Floor, Sector
                        - 9<br/> Faridabad, Haryana, 121006</a>
                </li>
            </div>
            <div className="Information">
                <h4 className="text-2xl mt-5 mb-10 relative before:content-[''] before:absolute before:top-10 before:w-[2rem] before:h-0.5 before:bg-[var(--font-color)]">Information</h4>
                <li  className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300 my-2">
                    <a href="internCounselling">Counselling</a>
                </li>
                <li  className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300 my-2">
                    <a href="internfacility">Facilities</a>
                </li>

                <li  className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300 my-2">
                    <a href="internFaq">FAQs</a>
                </li>
            </div>
            <div className="Useful-Link">
                <h4 className="text-2xl mt-5 mb-10 relative before:content-[''] before:absolute before:top-10 before:w-[2rem] before:h-0.5 before:bg-[var(--font-color)]">Useful Link</h4>
                <li className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300 my-2">
                    <a href="services">Our Development</a>
                </li>
                <li  className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300 my-2">
                    <a href="internCourse">All Courses</a>
                </li>

                <li  className="text-md sm:text-lg hover:text-[var(--font-color)] hover:ease-in-out duration-300 my-2">
                    <a href="#">Our Events</a>
                </li>
            </div>
        </div>

        
    </footer>
    <div className="copyright-bar bg-gradient-to-r from-black to-[var(--font-color)] text-md py-4 text-white">
        <p className='text-center'>&copy; 2024 : Made with ❤️ by Softsynth Software Solutions</p>
        <p className='hidden'>Gourav and Satyadev Mishra</p> 
    </div>
</>

)
}

export default Footer;
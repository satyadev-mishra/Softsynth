import React from "react";
import Pagehead from "../pageHeader/Pagehead";
const ContactUs = () => {
  return (
    <>
      <Pagehead pageName="Get in touch" pageDesc="/contact" />
      <div className="flex flex-col sm:flex-row justify-around items-center mb-8">
        <div className="rounded-lg bg-white border py-6 px-4 shadow-lg w-[80%] sm:w-[35%]">
          <form>
            <ContactInputBox type="text" name="name" placeholder="Your Name" />
            <ContactInputBox
              type="text"
              name="email"
              placeholder="Your Email"
            />
            <ContactInputTelBox
              type="text"
              name="phone"
              placeholder="Your Phone"
              pattern="[0-9]"
              maxLength="10"
            />
            <ContactTextArea
              row="6"
              placeholder="Your Message"
              name="details"
              defaultValue=""
            />
            <div>
              <button
                type="button"
                className=" w-full rounded border bg-[var(--font-color)] p-3 text-white transition hover:opacity-70"
              >
                Send Message
              </button>
            </div>
          </form>
          <div></div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4242677503507!2d77.32797507396688!3d28.376250895675344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd39d6fadd25%3A0x3aaefaf6cbcb36ef!2sSoftsynth%20Software%20Solutions%3ASoftware%20company%20%7C%20Best%20Java%2C%20MERN%2C%20MEAN%2C%20PYTHON%20Six%20months%20Courses%2F%20Internship!5e0!3m2!1sen!2sin!4v1705579273437!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" w-[80%] sm:w-[50%] h-[500px] my-4 rounded border-4 shadow-lg"
        />
      </div>
    </>
  );
};

export default ContactUs;

const ContactTextArea = ({ row, placeholder, name }) => {
  return (
    <>
      <div className="mb-4">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-[var(--font-color)] dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          
        />
      </div>
    </>
  );
};

export const ContactInputBox = ({ type, placeholder, name,pattern,maxLength}) => {
  return (
    <>
      <div className="mb-4">  
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          pattern={pattern}
          maxLength={maxLength}
          
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-[var(--font-color)] dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};


const ContactInputTelBox = ({
  type,
  placeholder,
  name,
  maxLength,
  pattern,
}) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          maxLength={maxLength}
          pattern={pattern}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-[var(--font-color)] dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};

import React from "react";
import Pagehead from "../pageHeader/Pagehead";

const About = () => {
  return (
    <>
      <Pagehead pageName="About us" pageDesc="/about" />
      <div className='bg-[url("https://cdn.pixabay.com/photo/2017/08/08/21/31/skyscrapers-2612766_1280.jpg")] bg-no-repeat bg-cover bg-fixed'>
        <div className="max-w-[600px] sm:m-auto text-xl mx-2">
          <p className="bg-white p-4 rounded-xl drop-shadow-md mb-12 mt-1">
            <b>Softsynth</b> is well known for its best software development
            services and has been recommended by most of the clients as we
            deliver custom solutions and products to the clients based on latest
            technologies and IT advancement that perfectly fits the needs and
            usability of the end users and that's what makes us the
            <b> best software development company in Delhi/NCR.</b>
          </p>

          <p className="bg-white p-4 rounded-xl drop-shadow-md mb-12">
            Our team will help you in transforming your business with the latest
            technologies, improvisation and innovation.
          </p>
          <div className="bg-white p-4 rounded-xl drop-shadow-md mb-12">
            <h2 className="border-b-4 border-[#d23031] w-[80px] mb-4 font-bold ">
              EXPERTISE
            </h2>

            <p>
              We Deals in ERP, CRM, E-learning, Medical software,GYM software,
              inventory, Poultry management system, E-commerce, Real estate,
              news applications, quiz app, CRM, Medical software. .
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl drop-shadow-md mb-12">
            <h2 className="border-b-4 border-[#d23031] w-[95px] mb-4 font-bold">
              EXPERIENCE
            </h2>
            <p>
              We have a great team of more than 20 IT experts having vast
              experience in the software industry.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl drop-shadow-md mb-1">
          <h2 className="border-b-4 border-[#d23031] w-[110px] mb-4 font-bold">
            Quick Support
          </h2>
          <p>
            We have a separate team of customer support to help our clients in
            solving their technical issues.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import Accordion from "../Accordions/Accordions";

const FAQ = () => {
  return (
    <div className="text-center">
      <span className="block text-base font-semibold text-[var(--font-color)] ">
        Faq's
      </span>
      <h2 className="text-[30px] font-bold capitalise text-black lg:text-[32px]">
        Frequently Asked Questions
      </h2>
      <div className="w-1/2 my-4 p-4 mx-auto">
        <Accordion
          title="Do you prefer Android or iOS"
          answer="I like to use iOS products"
        />
        <Accordion
          title="Do you prefer writing CSS or Tailwind?"
          answer="I like to use Tailwind"
        />
        <Accordion
          title="Firebase or Supabase?"
          answer="I am using Supabase!"
        />
        <Accordion
          title="Firebase or Supabase?"
          answer="I am using Supabase!"
        />
        <Accordion
          title="Firebase or Supabase?"
          answer="I am using Supabase!"
        />
        <Accordion
          title="Firebase or Supabase?"
          answer="I am using Supabase!"
        />
        <Accordion
          title="Firebase or Supabase?"
          answer="I am using Supabase!"
        />
      </div>
    </div>
  );
};

export default FAQ;

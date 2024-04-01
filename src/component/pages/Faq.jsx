import React from "react";
import Accordion from "../Accordions/Accordions";
import Pagehead from "../pageHeader/Pagehead";
const FAQ = () => {
  return (
    <>
      <Pagehead pageName="Frequently Asked Questions" pageDesc="/faq" />
      <div className="w-[90%] my-4 p-4 mx-auto text-left">
        <Accordion
          title="What are software outsourcing services?"
          answer="Software outsourcing is a remote service that is provided by software development companies. The service can consist of services ranging from full software or mobile application development, design development, testing, to project launch and project support. So, in the simplest words, software outsourcing services is all about hiring a developer or a development team that is external to your company staff to help create some digital product for your business."
        />
        <Accordion
          title="What are the main industries we serve?"
          answer="To provide the best services in the market we mainly focus our software development outsourcing services on product development for several primary industries:
          E-commerce Development Solutions
          Healthcare Application Development
          Software Development For Real Estate
          Besides, we have a lot of successful projects in other industries like entertainment, financial, hospitality, media, education and other."
        />
        <Accordion
          title="Do you provide software development consulting services?"
          answer="Yes. Softsynth Software Solutions Pvt. Ltd. provides custom software consulting services and helps improve the functioning of your business processes and existing software systems in your company. Our experts can help in case:
          You have a new web store and you want to customize it;
          Your existing web store needs integration with third-party platforms and services;
          You wish to design or redesign your website or app UI and improve UX;"
        />
        <Accordion
          title="How do we assure privacy and confidentiality?"
          answer="We sign NDAs and Confidentiality Agreements as required by you. All our employees are full-time employees and are bound by company Confidentiality and Non-Disclosure clauses. Additionally, for sensitive projects, we can sign custom NDAs."
        />
        <Accordion
          title="What are the success factors that can influence my project in a positive way?"
          answer="We’ve made up a brief list of such factors that will help create a positive effect for your project. The list accumulates a decade of our experience in the custom software development space..
          Make notes. The factors we’d highlight are:
          Availability of an experienced project manager authorized to make strategic decisions on your project;
          Opportunity to change the funding, hire additional qualified specialists to expand functionality and shorten the time frames;
          Open communication, well-defined expectations, high accountability of the team members;"
        />
        <Accordion
          title="How do we ensure security and risk management of your product?"
          answer="When you outsource your projects to our company, we not only provide software development services but manage all possible compliance and security issues.
          Our specialists evaluate all types of threats before creating your digital product including confidentiality weak points, IP compliance, third-party integrations, data management, and others. This approach allows us to discover the possible risks on the prospecting stage and create the appropriate policies to prevent them."
        />
        <Accordion
          title="What kind of customised software projects do you work on?"
          answer="The expertise of our company covers the 3 main types of projects:
          Custom software development;
          Bespoke software maintenance;
          Customised software support.
          Softsynth Software Solutions Pvt. Ltd. experts have a wide range of skills, which enables us to diversify our services and work on various project kinds such as complex web app services, online stores building, custom ecommerce development, online delivery services, ERP or CRM system integration projects, UI/UX website design projects. See some of the projects we worked on and delivered in our portfolio."
        />
        <Accordion
          title="Do you get any product support?What kind of customised software projects do you work on?"
          answer="In the initial stages of software development, we reserve up to 40 hours per month for your product support. Even after launching your product our QA engineer provides manual and automated testing of your and reports your and that our developers fix in an immediate way. After 3 months of project development, the client is moved to the service desk. Here you have access to key management personnel to escalate any issue you probably might get within your product.
          Depending on the priority of the issue, your request can be resolved within 24 hours in case of high urgency so as to match its priority."
        />
        <Accordion
          title="What is Java technology and why do I need it?"
          answer="Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.
          While most modern Java applications combine the Java runtime and application together, there are still many applications and even some websites that will not function unless you have a desktop Java installed. Java.com, this website, is intended for consumers who may still require Java for their desktop applications – specifically applications targeting Java 8. Developers as well as users that would like to learn Java programming should visit the dev.java website instead and business users should visit oracle.com/java for more information."
        />
        <Accordion
          title="How do you guarantee product quality?"
          answer="We evaluate the result after every two weeks, we test our work (we conduct both development and acceptance tests), we present it to you, we apply your feedback so you know you get what you are paying for."
        />
      </div>
    </>
  );
};

export default FAQ;

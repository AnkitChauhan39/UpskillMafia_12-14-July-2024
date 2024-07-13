import React, { useMemo } from "react";
import Ques from "./Ques";

const Curious = () => {
  const faqs = useMemo(
    () => [
      {
        question: "What is EcoSaathi?",
        answer:
          "EcoSaathi is a platform dedicated to empowering rag pickers by providing them with stable income opportunities, education and skill development, healthcare support, and a reliable donation platform. We also connect individuals and businesses with trusted rag pickers for various services.",
      },
      {
        question: "How does EcoSaathi work?",
        answer:
          "EcoSaathi works by linking rag pickers with income-generating opportunities, offering educational and skill-based courses, providing healthcare support, and enabling donations. We also ensure that businesses and individuals have access to reliable and vetted rag pickers for their needs.",
      },
      {
        question: "Who can benefit from EcoSaathi?",
        answer:
          "Both rag pickers and those who need their services can benefit from EcoSaathi. Rag pickers receive support in terms of income, education, and healthcare, while users gain access to reliable and vetted service providers.",
      },
      {
        question: "How can I donate to support rag pickers?",
        answer:
          "You can donate to support rag pickers through our secure online donation platform. Simply visit our donation page, choose the amount you wish to contribute, and complete the transaction.",
      },
      {
        question: "Where do my donations go?",
        answer:
          "Your donations go directly to supporting rag pickers by providing them with stable income opportunities, education and skill development, and healthcare services. We ensure that every contribution makes a tangible impact on their lives.",
      },
      {
        question: "How can I hire rag pickers through EcoSaathi?",
        answer:
          "To hire rag pickers, simply visit our platform, browse the available services, and select the one that suits your needs. Our vetted rag pickers will then be dispatched to your location to provide reliable and professional services.",
      },
      {
        question: "What kind of tasks can rag pickers help with?",
        answer:
          "Rag pickers can assist with various tasks such as waste collection, recycling, and other essential services. We ensure they are well-trained and reliable for all types of assignments.",
      },
      {
        question: "Is it safe to hire rag pickers through EcoSaathi?",
        answer:
          "Yes, it is safe to hire rag pickers through EcoSaathi. We thoroughly vet and train all our rag pickers to ensure they provide professional and trustworthy services. We also address any concerns related to misconduct or property issues promptly.",
      },
      {
        question: "How can I join EcoSaathi as a rag picker?",
        answer:
          "If you are a rag picker interested in joining EcoSaathi, you can sign up through our platform or visit one of our local offices. We will guide you through the registration process and provide the necessary training.",
      },
      {
        question: "What benefits do rag pickers receive from EcoSaathi?",
        answer:
          "Rag pickers receive various benefits, including a stable income, access to education and skill development courses, healthcare support, and opportunities for alternative work if desired.",
      },
      {
        question: "How does EcoSaathi support my healthcare needs?",
        answer:
          "EcoSaathi provides access to healthcare services and resources to ensure that rag pickers maintain good health and well-being. We partner with healthcare providers to offer regular check-ups and medical assistance.",
      },
      {
        question: "How do I register on the platform?",
        answer:
          "Registration is easy as pie! Just click on the 'Join now' button and follow simple steps to complete 'Sign Up'",
      },
    ],
    []
  );

  return (
// <<<<<<< HEAD
//     <div className="p-10 flex justify-center items-center flex-col">
//       <div className="text-[44px] font-semibold">Curious Minds Ask</div>
//       <div className="flex flex-col gap-3 justify-center items-center">
//         {faqs.map((ele, index) => {
//           return <Ques key={ele.question} ques={ele.question} ans={ele.answer} />;
//         })}
//       </div>
// =======
    <div className='p-10 flex justify-center items-center flex-col' >
        <div className=' text-[28px] md:text-[44px] font-bold' >Curious Minds Ask</div>
        <div className='md:w-[1200px] p-10 flex flex-col gap-3 justify-center items-center' >
            {
                faqs.map( (ele,index) => {
                    return <Ques key={ele.question} ques={ele.question} ans={ele.answer}/>
                })
            }
        </div>
{/* >>>>>>> 515f26d8be7c24652b932a4a4c01d15a1f12d57d */}
    </div>
  );
};

export default Curious;

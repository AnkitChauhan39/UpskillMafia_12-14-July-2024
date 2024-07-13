import React, { memo, useMemo } from "react";
import AboutCard from "./AboutCard";
import stableIncomeSrc from "../../assets/Images/continuous income.jpeg";
import donationPlatform from "../../assets/Images/donate for them.jpeg";
import eduAndSkillDev from "../../assets/Images/edu and dev.jpeg";
import healthCareSupport from "../../assets/Images/health care.jpeg";
import relaiableService from "../../assets/Images/realiable.jpeg";

const AboutSection = memo(() => {
  const serviceDetails = useMemo(() => [
    {
      imgUrl: stableIncomeSrc,
      heading: "Stable Income Source",
      description:
        "We offer rag pickers a consistent source of income, fostering financial stability and independence.",
    },
    {
        imgUrl: healthCareSupport,
        heading: "Healthcare Support",
        description:
        "We prioritize the health and well-being of rag pickers with access to healthcare services and resources.",
    },
    {
        imgUrl: eduAndSkillDev,
        heading: "Education and Skill Development",
        description:
        "Rag pickers have access to tailored education and skill-based courses, enhancing their capabilities and career opportunities.",
    },
    {
        imgUrl: relaiableService,
        heading: "Reliable Service for Users",
        description:
        "Businesses and individuals benefit from reliable, vetted rag pickers for various tasks. We ensure smooth operations and handle any concerns such as misconduct or property issues professionally.",
    },
    {
      imgUrl: donationPlatform,
      heading: "Donation Platform",
      description:
        " Users can support rag pickers through our secure donation platform, directly impacting their livelihood and well-being.",
    },
]);
return (
    <div className="flex flex-col gap-10 justify-center min-h-dvh h-fit items-center pt-20">
      <div className="heading text-5xl font-bold text-center">What we do</div>
      <div className="description text-xl text-center">
        At EcoSaath, we are committed to empowering rag pickers while providing
        a reliable solution for those in need of their essential services. Our
        platform serves as a trusted link between the community and businesses,
        ensuring mutual benefits through:
      </div>
      <div className="cards flex flex-wrap gap-10 items-center justify-center">
        {serviceDetails.map((elem) => {
          return (
            <AboutCard
              key={elem.heading}
              imgUrl={elem.imgUrl}
              heading={elem.heading}
              description={elem.description}
            />
          );
        })}
      </div>
      <div className="ending text-center text-xl">
        By connecting rag pickers with opportunities and ensuring reliable
        service for users, we create a sustainable ecosystem where everyone
        benefits.
      </div>
    </div>
  );
});

export default AboutSection;

import React, { memo } from "react";

const AboutCard = memo(({ imgUrl, heading, description }) => {
  return (
    <div className="p-4 rounded-3xl flex-1 max-w-96 shadow-[0_0_4px_gray] sm:min-w-60 self-stretch">
      <div className="img rounded-lg overflow-hidden flex-1 aspect-square mb-4">
        <img src={imgUrl} alt={heading} className="h-full w-full object-cover" />
      </div>
      <div className="details flex flex-col gap-2">
        <div className="heading text-xl font-semibold">{heading}</div>
        <div className="descriptions text-base text-gray-500">{description}</div>
      </div>
    </div>
  );
});
export default AboutCard;

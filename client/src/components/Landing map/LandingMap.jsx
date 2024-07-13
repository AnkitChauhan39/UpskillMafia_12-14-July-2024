import React, { useMemo } from "react";

const LandingMap = () => {
  const listItems = useMemo(
    () => [
      "Easily locate rag pickers in your vicinity.",
      "View detailed profiles of rag pickers operating in your selected area.",
      "Support the community by providing reliable work opportunities.",
    ],
    []
  );
  return (
    <div className="flex gap-10 max-w-screen-2xl mx-auto items-center md:flex-row flex-col py-20">
      <div className="details flex-1 h-fit text-lg text-gray-500 flex flex-col gap-4">
        <div className="heading text-5xl font-bold text-black">
          Find Rag pickers by area
        </div>
        <p>
          You can use the interactive map below to select your area and find rag
          pickers available for hire in your locality. Simply click on the map
          to pinpoint your location, and we will show you a list of rag pickers
          operating in that area.
        </p>
        <ul className="list-disc list-inside">
          {listItems.map((elem) => (
            <li key={elem}>{elem}</li>
          ))}
        </ul>
        <p>
          By hiring rag pickers, you are not only ensuring a cleaner environment
          but also providing them with a reliable source of income and access to
          essential services. Thank you for supporting our community!
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59542.84756315308!2d79.0659072!3d21.135360000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720860415942!5m2!1sen!2sin"
        title="Example Map"
        className="flex-1 rounded-xl w-full self-stretch min-h-96"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LandingMap;

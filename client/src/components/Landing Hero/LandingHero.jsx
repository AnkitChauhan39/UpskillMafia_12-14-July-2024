import React from "react";
import SecondaryBtn from "../Secondary Btn/SecondaryBtn";
import {useAuth0} from "@auth0/auth0-react"

export default function LandingHero() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div
      className="h-[95vh] text-center flex flex-col justify-end items-center gap-4 text-white sm:pb-32 pb-20 border-green-800 border-2 rounded-xl after:content-[''] after:absolute after:w-full after:h-full after:bg-black after:top-0 after:bg-opacity-30 overflow-hidden after:z-0 relative bg-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5909870/pexels-photo-5909870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="heading sm:text-6xl text-4xl font-black z-10 lg:w-1/2 sm:w-2/3 w-full">
        Empower Rag Pickers: Join the Ecosaathi Movement
      </div>
      <div className="subheading sm:text-2xl text-xl z-10 text-gray-300 max-w-[80%]">
        Support local rag pickers with skills, knowledge, and healthcare.
        Together, we can create a cleaner, brighter future.
      </div>
      <SecondaryBtn onClick={() => loginWithRedirect()} className="text-white p-4 rounded-full px-8 text-xl font-bold w-fit z-10">
        Join the Movement
      </SecondaryBtn>
    </div>
  );
}

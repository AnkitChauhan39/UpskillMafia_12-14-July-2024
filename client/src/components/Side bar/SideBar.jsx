import React, { memo } from "react";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";
import { useAuth0 } from "@auth0/auth0-react";

const SideBar = memo(() => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex flex-col w-60 bg-white rounded-xl shadow-[0_0_4px_grey] text-center">
      <div
        className="home hover:bg-gray-200 p-4
    "
      >
        <a href="#home">Home</a>
      </div>
      <div
        className="home hover:bg-gray-200 p-4
    "
      >
        <a href="#about">About</a>
      </div>
      <div
        className="home hover:bg-gray-200 p-4
    "
      >
        <a href="#contact">Contact us</a>
      </div>
      <PrimaryBtn
        className="p-4 text-white rounded-full w-fit mx-auto block my-4"
        onClick={loginWithRedirect}
      >
        Join Now
      </PrimaryBtn>
    </div>
  );
});
export default SideBar;

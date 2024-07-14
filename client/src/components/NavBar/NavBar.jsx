import React, { memo, useCallback, useEffect } from "react";
import logo from "../../assets/EcoSathi (2).jpg";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import SERVER_URL from "../../constants.mjs";
import { useNavigate } from "react-router-dom";

const NavBar = memo(() => {
  const navigate = useNavigate();
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  const getAccountDetail = useCallback((email) => {
    console.log(email);
    fetch(`${SERVER_URL}/auth/getAccountType`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => {
        console.log(data);
        switch (data.type) {
          case "user":
            navigate(`/userDash/${btoa(user.email)}`);
            break;
          case "ragPicker":
            navigate(`/userDash/indiRP`);
            break;
          case "organisation":
            navigate(`/serviceProvider/org`);
            break;
          default:
            navigate(`/userType`);
        }
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);

  const handleClick = useCallback(() => {
    console.log(isAuthenticated);
    console.log(user);
    if (isAuthenticated && user) {
      getAccountDetail(user.email);
    } else {
      loginWithRedirect();
    }
  }, [isAuthenticated, user]);

  // useEffect(() => {
  // }, [isAuthenticated, user, getAccountDetail]);

  return (
    <div className="p-4 rounded-full justify-between flex bg-white bg-opacity-70 items-center fixed top-8 left-8 z-10 right-8">
      <div className="logo flex items-center gap-4">
        <div className="img bg-black w-32 max-w-full max-[400px]:w-24 overflow-hidden rounded-full flex-1 aspect-[128/56] ">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="name h-full text-xl font-bold">EcoSaathi</div>
      </div>
      <div className="navLinks lg:gap-14 sm:gap-6 font-semibold hidden md:flex">
        <div className="cursor-pointer font-bold hover:text-opacity-50 text-black">
          Home
        </div>
        <div className="cursor-pointer font-bold hover:text-opacity-50 text-black">
          About
        </div>
        <div className="cursor-pointer font-bold hover:text-opacity-50 text-black">
          Contact
        </div>
      </div>
      <div className="callToAction flex gap-4 items-center">
        <PrimaryBtn
          onClick={handleClick}
          className="text-white w-32 h-14 rounded-full font-bold px-6 hidden min-[540px]:block"
        >
          Join now
        </PrimaryBtn>
        <div className="hamburger shrink-0 md:hidden">
          <RxHamburgerMenu size="2rem" />
        </div>
      </div>
    </div>
  );
});
export default NavBar;

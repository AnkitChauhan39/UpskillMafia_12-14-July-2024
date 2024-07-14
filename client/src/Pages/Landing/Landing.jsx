import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import LandingHero from "../../components/Landing Hero/LandingHero";
import Updates from "../../components/LatestUpdate/Updates";
import AboutSection from "../../components/About/AboutSection";
import Testimonial from "../../components/Testimonials/Testimonial";
import Curious from "../../components/Curious/Curious";
import Social from "../../components/SocialLinks/Social";
import Contact from "../../components/Contact/Contact";
import LandingMap from "../../components/Landing map/LandingMap";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import SERVER_URL from "../../constants.mjs";
import Askme from "../../components/Askme/Askme";

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const [show, setShow] = useState(false);

  const getAccountDetail = useCallback(
    (email) => {
      fetch(`${SERVER_URL}/auth/getAccountType`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.type !== "none") {
            navigate("/serviceProvider");
          } else {
            navigate("/userType");
          }
        })
        .catch((error) => {
          console.error("Error fetching account details:", error);
        });
    },
    [navigate]
  );

  useEffect(() => {
    if (isAuthenticated && user) {
      getAccountDetail(user.email);
    }
  }, [isAuthenticated, user, getAccountDetail]);

  return (
    <div className="relative p-4">
      <NavBar />
      <LandingHero />
      <AboutSection />
      <Updates />
      <Testimonial />
      <Curious />
      <Social />
      <Contact />
      <LandingMap />
      {!show && (
        <div className=" absolute bottom-10 right-5 rounded-2xl">
          <span  
           onClick={ () => {
            setShow(!show)
           }
           }
           className="inline-flex items-center shadow-black shadow-md font-semibold justify-center w-20 h-20 rounded-full bg-blue-500 text-white overflow-hidden animate-bounce">
            ASK ME
          </span>
        </div>
      )}
      {show && (
        <div className=" absolute bottom-10 right-5 rounded-2xl">
          <Askme show={show} setshow={setShow} />
        </div>
      )}

      {/* <Organiztion/> */}
    </div>
  );
}

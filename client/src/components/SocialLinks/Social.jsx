import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex flex-col  justify-center items-center p-10" >
      <div className="text-[44px] font-semibold p-4"  >Join Our Eco Revolution</div>
      <div className="flex gap-10 p-10 text-[40px] text-blue-600 " >
        <a>
          <FaFacebookF  />
        </a>
        <a>
          <FaTwitter />
        </a>
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaLinkedinIn />
        </a>
        <a>
        <FaTwitch />
        </a>
      </div>
    </div>
  );
};

export default Social;

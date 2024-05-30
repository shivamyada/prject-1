import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className=" bg-[#1d1d1d] text-white flex flex-col items-center gap-6 py-20 ">
      <div className=" flex gap-2 text-3xl tracking-wider font-bold font-poppins">
        {" "}
        <div className=" text-red-600">SPOT</div>
        <div className=" text-white">FINDER</div>
      </div>

      <div className=" ">
        Park hassle free at your nearby <br /> hotels
      </div>
      <div className=" flex gap-5 cursor-pointer">
        <div className="">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

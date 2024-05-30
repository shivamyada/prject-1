import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  return (
    <div className=" flex justify-between sapce bg-black text-white px-10 py-6">
      {" "}
      <div
        className=" flex gap-2 text-3xl font-bold cursor-pointer"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        {" "}
        <div className=" text-red-600">SPOT</div>
        <div className=" text-white">FINDER</div>
      </div>
      <div className=" cursor-pointer flex justify-center items-center gap-8 font-poppins text-xl px-4">
        <div className=" text-red-600">Home</div>
        <div
          onClick={() => {
            window.location.href = "/aboutUs";
          }}
        >
          About Us
        </div>
        <div
          onClick={() => {
            window.location.href = "/login";
          }}
          className=" border border-red-600 rounded-full px-4 py-2 bg-red-600 text-black"
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;

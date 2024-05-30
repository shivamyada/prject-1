import React from "react";
import Navbar from "../components/Navbar";
import PlaceCaraousal from "../components/Place";
import About from "../components/About";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className=" bg-black">
      <Navbar />
      <div className=" middle_text grid py-8 px-12 font-poppins bg-black text-white gap-4">
        <div className="text-xl">Welcome to</div>
        <div className=" flex gap-2 text-5xl font-bold">
          {" "}
          <div className=" text-red-600">SPOT</div>
          <div className=" text-white">FINDER</div>
        </div>
        <div className=" text-3xl font-bold">
          Park hassle free at your nearby hotels
        </div>
      </div>
      <div className="search bg-black flex flex-col ">
        <div className=" m-10 rounded-xl overflow-auto  text-black bg-gray-300 ">
          {" "}
          <div className=" flex font-bold font-poppins text-3xl items-center justify-center mt-4">
            Book Now
          </div>
          <div className=" text-xl ml-6 text-black mt-9 mb-8">
            {" "}
            <div className="pl-10 mb-2 font-poppins font-bold">
              {" "}
              SELECT HOTEL{" "}
            </div>
            <div className=" bg-gray-300 text-black flex space-x-80 pl-10 font-bold font-poppins items-center ">
              <div className="grid">
                <input
                  type="text"
                  placeholder="Search Location "
                  className=" bg-black px-52 text-white py-4 rounded-lg"
                />
              </div>
              &nbsp;
              <div>
                <button className=" text-2xl font-bold font-poppins bg-red-600 text-black rounded-xl px-4 py-2">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid bg-black text-white mt-4 p-8 gap-6">
        <div className=" font-bold text-4xl">Nearby Hotels</div>
        <div className=" text-3xl font-light">
          Please checkout nearby hotels for your vehicle parking
        </div>
      </div>

      <PlaceCaraousal />
      <About />

      <div className="testimonial grid gap-10 mb-5">
        <div className=" flex text-red-600 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
        <div className=" flex justify-center text-xl text-white font-bold">
          TESTIMONIAL
        </div>
        <div className=" flex justify-center text-gray-400 items-center px-80 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          accusantium sed corrupti dolores quod ipsa, minima facilis quisquam
          dicta consequatur inventore ad nam ea voluptates cupiditate fugit
          magnam, necessitatibus perspiciatis.
        </div>
      </div>
      <TestimonialCard />
      <Footer />
    </div>
  );
};

export default Layout;

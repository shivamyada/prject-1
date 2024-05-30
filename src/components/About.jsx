import React from "react";

const About = () => {
  const place = {
    title: "Goia",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-970-80.jpg.webp",
    _id: 5,
    rating: 8,
    type: "Club",
  };
  return (
    <div className="m-10 p-5  flex font-poppins pl-32 bg-black gap-5">
      <div className="pair flex gap-5 ">
        <div className="w-[350px] ">
          <div
            className=" object-contain bg-cover bg-center w-[350px] h-[200px] relative"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1614469422872-6e09d2569cc0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          ></div>{" "}
          <div className=" bg-white text-black grid w-[350px] h-[300px] p-4">
            <div className=" text-2xl font-bold pl-5 ">
              Safety parking <br />
              under CCTV
            </div>
            <div className=" w-[60px] h-[4px] bg-black pl-6 m-3"></div>
            <div className=" pl-5 font-extralight">
              Enjoy peace of mind with our CCTV-monitored parking, ensuring the
              safety and security of your vehicle at all times.
            </div>
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[350px] ">
          <div
            className=" object-contain bg-cover bg-center w-[350px] h-[200px] relative"
            style={{
              backgroundImage: `url("https://plus.unsplash.com/premium_photo-1670002247328-76fb3b2f8373?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          ></div>{" "}
          <div className=" bg-white text-black grid w-[350px] h-[300px] p-4">
            <div className=" text-2xl font-bold pl-5 ">
              Security Guard or <br /> Anti Thief
            </div>
            <div className=" w-[60px] h-[4px] bg-black pl-6 m-3"></div>
            <div className=" pl-5 font-extralight">
              Choose our Security Guard service or Anti-Thief feature for
              maximum protection, ensuring your property stays safe and secure.
            </div>
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" object-contain bg-cover bg-center w-[500px] h-[500px] transition-opacity text-white "
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1549288830-f95a7354fea8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        >
          <div className=" p-10">
            <div className=" pl-32 text-4xl font-bold"> ABOUT US</div>
            <br />
            <div className=" font-extralight">
              Effortless parking solutions with state-of-the-art facilities and
              attentive service. Trust us for secure and hassle-free car parking
            </div>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default About;

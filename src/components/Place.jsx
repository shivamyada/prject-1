import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import image from "../assets/back.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Pl6aceCard from "./PlaceCard";

const PlaceCaraousal = () => {
  const [places, setPlaces] = useState([]);
  const placess = [{
    title: "plassio mall ",
    imageUrl:
      // "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-970-80.jpg.webp",
      "https://a0.muscache.com/im/pictures/miso/Hosting-993851135762573280/original/e34d9346-42bd-43ab-8e53-4aae8d91de74.jpeg?im_w=960",
      _id: 5,
    rating: 8,
    type: "Club",
  },{
    title: "plassio mall ",
    imageUrl:
      // "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-970-80.jpg.webp",
      "https://www.lucknowportal.com/wp-content/uploads/Phoenix-Palassio-Mall-Amar-Shaheed-Path-Gomti-Nagar-Extension-Lucknow.jpg",
    _id: 5,
    rating: 8,
    type: "Club",
  },{
    title: "plassio mall ",
    imageUrl:
      // "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-970-80.jpg.webp",
      "https://www.lucknowportal.com/wp-content/uploads/Phoenix-Palassio-Mall-Amar-Shaheed-Path-Gomti-Nagar-Extension-Lucknow.jpg",
    _id: 5,
    rating: 8,
    type: "Club",
  },{
    title: "plassio mall ",
    imageUrl:
      // "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-970-80.jpg.webp",
      "https://a0.muscache.com/im/pictures/miso/Hosting-993851135762573280/original/e34d9346-42bd-43ab-8e53-4aae8d91de74.jpeg?im_w=960",
      _id: 5,
    rating: 8,
    type: "Club",
  },{
    title: "plassio mall ",
    imageUrl:
      // "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-970-80.jpg.webp",
     // "https://www.lucknowportal.com/wp-content/uploads/Phoenix-Palassio-Mall-Amar-Shaheed-Path-Gomti-Nagar-Extension-Lucknow.jpg",
     "https://a0.muscache.com/im/pictures/miso/Hosting-993851135762573280/original/e34d9346-42bd-43ab-8e53-4aae8d91de74.jpeg?im_w=960",
    _id: 5,
    rating: 8,
    type: "Club",
  },
]

  // useEffect(() => {
  //   axios.get("/place/places").then((response) => {
  //     console.log(response.data, "calling api from front");
  //     setPlaces(response.data.data);
  //   });
  // }, []);

  return (
    <div className=" text-white">
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{ clickable: true }}
        mousewheel={{ clickable: true }}
        navigation={{ clickable: true }}
        keyboard={{ clickable: true }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        modules={[Pagination, Navigation, Keyboard]}
        className=""
      >
        {placess.map((place) => {
          console.log("oplace");
          return (
            <SwiperSlide>
              <PlaceCard place={place} />
            </SwiperSlide>
          );
        })}
        
         {/* <SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide><SwiperSlide>
              <PlaceCard  />
            </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default PlaceCaraousal;

import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = (place) => {
  const { _id, title, imageUrl, type,rating } = place.place;
 


 
  return (
    <Link to={`/place/${rating}`}>
      {" "}
      <div className="flex flex-col rounded-md border overflow-hidden shadow-md w-[95%] h-96 mb-8 relative cursor-pointer ">
        <div
          className=" object-contain bg-cover bg-center w-full h-[400px] relative"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div>
          <p className=" font-bold">{title}</p>
          <p>{type}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;

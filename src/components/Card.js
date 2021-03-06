import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Card({
  imageUrl,
  location,
  googleMapsUrl,
  title,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="flex justify-center my-5">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={imageUrl}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <div className="flex justify-between">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-500" />
              <p className="ml-2 tracking-[0.17em] text-xs">
                {location.toUpperCase()}
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 underline text-xs"
            >
              View on Google Maps
            </a>
          </div>
          <h5 className="text-gray-900 text-2xl font-bold mb-2">{title}</h5>
          <p className="text-gray-900 font-bold text-xs my-3">
            {startDate} - {endDate}
          </p>
          <p className="text-gray-900 text-xs mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

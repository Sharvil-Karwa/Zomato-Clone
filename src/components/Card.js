import React from "react";
import { AiFillStar } from "react-icons/ai";

function Card({ src, title, description }) {
  return (
    <div>
      <div className="flex fles-row">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg" src={src} alt="" />
          </a>
          <div className="flex items-center justify-between p-4">
            <div className="text-left">
              <div className="text-lg truncate w-48">{title} </div>
              <div className="text-sm w-48 truncate">{description}</div>
            </div>
            <div className="flex items-center px-1.5 py-0.5 bg-green-700 rounded-lg text-white">
              4.5
              <AiFillStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

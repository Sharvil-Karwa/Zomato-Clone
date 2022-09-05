import React from "react";
import { AiFillStar } from "react-icons/ai";

function Card({ src, title }) {
  return (
    <div>
      <div className="flex fles-row">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg" src={src} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

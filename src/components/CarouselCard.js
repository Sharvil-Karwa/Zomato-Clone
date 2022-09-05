import React from "react";

function carouselCard({ src, name }) {
  return (
    <div className="mx-5">
      <img src={src} className="h-40 rounded-full" />
      <label className="text-gray-700 text-lg">{name}</label>
    </div>
  );
}

export default carouselCard;

import React from "react";

function Suggestion({ src, title }) {
  return (
    <div className="text-center w-fit">
      <img src={src} alt={title} className="w-40 mx-2" />
      <p>{title}</p>
    </div>
  );
}

export default Suggestion;

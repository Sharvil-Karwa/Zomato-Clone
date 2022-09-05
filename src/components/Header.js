import React from "react";
import Location from "./Location";
import SearchComponent from "./Search";

function Header() {
  return (
    <div>
      <div className="header flex flex-row justify-center items-center">
        <div className="leading-tight font-sans italic text-5xl mt-0 mb-2 font-bold mr-2">
          zomato
        </div>
        <div>
          <SearchComponent />
        </div>
        <div>
          <Location />
        </div>
      </div>
    </div>
  );
}

export default Header;

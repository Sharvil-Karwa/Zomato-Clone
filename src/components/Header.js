import React from "react";
import Location from "./Location";
import SearchComponent from "./Search";
import Login from "./Login";
import { Link } from "react-router-dom";

function Header() {
  let isLogin = false;

  function login() {
    console.log("login");
    isLogin = true;
  }

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
        <Link to="/cart">
          <div
            className="ml-5 text-lg font-extralight font-sans inline"
            onClick={login}
          >
            Log in
          </div>
          <div className="ml-5 text-lg font-extralight font-sans inline">
            Sign up
          </div>
        </Link>
      </div>
      <div id="login">{isLogin && <Login />}</div>
    </div>
  );
}

export default Header;

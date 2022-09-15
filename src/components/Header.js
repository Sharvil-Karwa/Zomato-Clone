import React, { useState, useEffect } from "react";
import Location from "./Location";
import SearchComponent from "./Search";
import Login from "./Login";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

function Header() {
  const [open, setOpen] = useState(false);

  // const onSuccess = (res) => {
  //   console.log("[Login Success] currentUser:", res.profileObj);
  // };

  // const onSuccess2 = (res) => {
  //   console.log("Logged out");
  // };

  // const onFailure = (res) => {
  //   console.log("[Login failed] res:", res);
  // };

  // useEffect(() => {
  //   function start() {
  //     gapi.auth2.init({
  //       clientId: clientId,
  //       plugin_name: "chat",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // });

  return (
    <div>
      <div className="header flex flex-row justify-center items-center">
        <Link to="/">
          <div className="leading-tight font-sans italic text-5xl mt-0 mb-2 font-bold mx-4">
            zomato
          </div>
        </Link>
        <div>
          <SearchComponent />
        </div>
        <div>
          <Location />
        </div>
        <Link to="">
          <div
            className="mx-5 text-lg  font-sans inline"
            onClick={() => setOpen(true)}
          >
            Log in
          </div>
          <div className="mx-5 text-lg  font-sans inline">Sign up</div>
          {/* <div
            id="signInButton"
            className="ml-5 text-lg font-extralight font-sans inline"
          >
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div> */}
          {/* <div
            id="signOutButton"
            className="ml-5 text-lg font-extralight font-sans inline"
          >
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onSuccess={onSuccess}
            />
          </div> */}
        </Link>
      </div>
      <div id="login">
        <Login trigger={open} />
      </div>
    </div>
  );
}

export default Header;

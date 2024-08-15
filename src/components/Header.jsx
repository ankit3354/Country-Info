import React, { useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { Link } from "react-router-dom";

function Header({ toggle, setToggle }) {
  return (
    <header
      className={`Header w-full ${toggle ? "bg-gray-950" : "bg-gray-500"}`}
    >
      <div
        className={`container max-w-screen-lg h-14 flex-wrap flex justify-between items-center px-2 sm:px-12 mx-auto ${
          toggle ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <h1 className="text-xl  md:text-3xl">
          <Link to={"/"}>Where in the world!</Link>
        </h1>

        <div
          onClick={(e) => setToggle((prev) => !prev)}
          className={`theme_toggler flex items-center gap-1 text-xl  md:text-2xl cursor-pointer  ${
            toggle ? " text-gray-100 " : "text-gray-700"
          }`}
        >
          {toggle ? <TiWeatherSunny /> : <IoMoonSharp />}
          <h2>{toggle ? "Light Mode" : "Dark Mode"}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;

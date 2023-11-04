import React from "react";
import { Link } from "react-router-dom";

const Header = ({ dev }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 grid-col-[20%_auto] sm:grid-col-[30%_auto] mx-auto max-w-screen px-3">
      <div>
        <img
          className="sm:w-[160px] w-[120px] ml-7 sm:ml-[15px] md:ml-[55px] lg:ml-[160px]"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="flex justify-end items-center sm:pr-16 md:pr-10 lg:pr-48">
        <div>
          <span className="material-symbols-outlined text-white absolute text-[12px] pt-2 px-1 sm:text-lg sm:top-3 sm:px-1 md:top-5 md:px-2 md:py-[2px]">
            translate
          </span>
          <select className="bg-transparent border-2 rounded-md text-md pl-3 text-xs px-0 sm:text-sm sm:text-md sm:pl-7 sm:py-1 text-white shadow-xl">
            <option className="bg-white text-black" value="English">
              English
            </option>
            <option className="bg-white text-black" value="Hindi">
              Hindi
            </option>
          </select>
        </div>
        <div>
          <Link to="/login">
            <button
              onClick={dev}
              className="bg-red-600 text-white rounded-md text-xs ml-2 mr-5 px-3 py-1 mx-4 flex-nowrap sm:px-3 sm:py-2 sm:ml-3 sm:text-sm md:px-6 md:py-2 md:mr-20 "
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

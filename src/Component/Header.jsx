import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Lock from "../assets/Lock.png";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/" },
    { name: "Adversite", link: "/adversite" },
    { name: "Supports", link: "/supports" },
    { name: "About", link: "/about" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white shadow-md">
      <div
        className={`md:flex pr-3 bg-white md:static transition-all ease-in duration-500 absolute p-2 md:shadow- md:shadow-none shadow-md w-screen md:container m-auto md:justify-between item-center ${
          open ? "top-0 left-0" : "-top-96"
        }`}
      >
        {/* Left Side Section */}
        <div className="items-center p-3 md:flex">
          <div className="flex items-center">
            <img src={Logo} alt="logo" />
            <h1 className="ml-4 font-bold">StartupLand</h1>
          </div>

          <ul className="md:flex md:ml-24">
            {Links.map((item, index) => (
              <li className="md:ml-3" key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Side Div */}
        <div className="items-center md:flex">
          <div className="flex ml-2">
            <img src={Lock} alt="Lock" />
            <a href="#" className="ml-2 font-bold">
              Login
            </a>
          </div>
          <div className="mt-2 md:mt-0">
            <button className="px-2 py-2 ml-2 text-white bg-green-600 rounded-md font-semi-bold">
              Join Community
            </button>
          </div>
        </div>
      </div>
      <div onClick={handleClick} className="absolute z-10 top-5 right-8 md:hidden ">
        {open ? (
          <span className="text-3xl">
            <RxCross1 />
          </span>
        ) : (
          <span className="text-3xl">
            <LiaBarsSolid />
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;

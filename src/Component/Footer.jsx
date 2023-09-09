import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <div className="bg-blue-50">
        <div className="p-4 m-auto md:justify-around md:flex md:container">
          <div className="text-center md:text-start">
            <h1 className="font-semibold text-black">Company</h1>
            <br />
            <ul>
              <li>
                <a className="text-blue-950" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Affiliate
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Careers & Culture
                </a>
              </li>
              <li>
                {" "}
                <a className="text-blue-950" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h1 className="font-semibold text-black">About Us</h1>
            <br />
            <ul>
              <li>
                <a className="text-blue-950" href="#">
                  Support Center
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Customer Support
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  About Us
                </a>
              </li>
              <li>
                {" "}
                <a className="text-blue-950" href="#">
                  Copyright
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Popular Campaign
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h1 className="font-semibold text-black">My Information</h1>
            <br />
            <ul>
              <li>
                <a className="text-blue-950" href="#">
                  Return Policy
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Terms & Condition
                </a>
              </li>
              <li>
                {" "}
                <a className="text-blue-950" href="#">
                  Site Map
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Store Hours
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h1 className="font-semibold text-black">My Account</h1>
            <br />
            <ul>
              <li>
                <a className="text-blue-950" href="#">
                  Press inquires
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Social media
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  directories
                </a>
              </li>
              <li>
                {" "}
                <a className="text-blue-950" href="#">
                  Image & B-roll
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Permissions
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h1 className="font-semibold text-black">Policy</h1>
            <br />
            <ul>
              <li>
                <a className="text-blue-950" href="#">
                  Policy
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Software principles
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Unwanted software policy
                </a>
              </li>
              <li>
                {" "}
                <a className="text-blue-950" href="#">
                  Responsible supply cain
                </a>
              </li>
              <li>
                <a className="text-blue-950" href="#">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <br />
        </div>
        <hr className="bg-gray-700" />
        <div className="justify-between p-4 md:flex">
          <div className="flex items-center">
            <img src={logo} alt="logo" />
            <h1 className="text-blue-950">StartupLanding</h1>
            <p className="ml-2 text-gray-300">Copyright by 2023 Redq, Inc</p>
          </div>
          <div className="flex items-center">
            <ul className="flex">
              <li className="ml-2">
                <a className="font-semibold text-blue-900" href="/home">Home</a>
              </li>
              <li className="ml-2">
                <a className="font-semibold text-blue-900" href="/adversite">Adversite</a>
              </li>
              <li className="ml-2">
                <a className="font-semibold text-blue-900" href="/about">Supports</a>
              </li>
              <li className="ml-2">
                <a className="font-semibold text-blue-900" href="/home">Marketing</a>
              </li>
              <li className="ml-2">
                <a className="font-semibold text-blue-900" href="/home">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import {RxCross2} from 'react-icons'

const Business = () => {
  const items = [
    {
      title: "Startup Pack",
      description: "For the startup team who work with new come data stack",
      price: "$25.99/per mo.",
      button: "Start Free Trail",
    },
    {
      title: "Premium Pack",
      description: "For the startup team who work with new come data stack",
      price: "$29.99/per mo.",
      button: "Start Free Trail",
    },
    {
      title: "Startup Pack",
      description: "For the startup team who work with new come data stack",
      price: "$34.99/per mo.",
      button: "Start Free Trail",
    },
  ];
  return (
    <div className="bg-white">
        <br />
        <br />
        <div className="text-center">
            <p className="font-semibold text-green-500">Deal for your business</p>
            <h1 className="font-semibold">Meet our pricing plan that suit you</h1>
        </div>
        <br />
      <div className="grid gap-4 m-auto md:container md:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="px-6 py-8 shadow-md">
            <button className="w-full p-1 font-semibold text-white transition-all duration-300 ease-in border hover:bg-blue-500 rounded-t-md">
              HIGHLY RECOMMENDED
            </button>
            <br />
            <h1 className="font-semibold">{item.title}</h1>
            <p className="text-slate-500">{item.description}</p>
            <br />
            <button className="px-4 py-2 font-semibold text-green-500 transition-all duration-200 ease-in border rounded-md hover:bg-green-500 hover:text-white ">
              {item.button}
            </button>
            <br />
            <br />
            <div>
              <div className="flex items-start ">
                {" "}
                <span className="text-yellow-500 ">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <p>
                  Ultimate access to al course,exercises <br />
                  and assessments
                </p>
              </div>
              <br />
              <div className="flex items-start">
                <span className="text-yellow-500 ">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <p>
                  Free access for all kind of exercise <br />
                  connections with downloads.
                </p>
              </div>
              <br />
              <div className="flex items-start">
                <span className="text-yellow-500 ">
                  <IoIosCheckmarkCircleOutline />
                </span>
                <p>
                  total assessment corrections with free <br />
                  download access system
                </p>
              </div>
              <br />
              <div className="flex items-start">
                <span className="text-yellow-500 ">
                  <IoIosCheckmarkCircleOutline />
                </span>{" "}
                <p>
                  Ultimate download of al courses,on the <br />
                  mobile app contents
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;

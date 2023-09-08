import React, { useState } from "react";
import website from "../assets/website.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Adversite = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);


  const handler = () => {
    setOpen(!open);
  };
  
  const handler1 = () => {
    setOpen1(!open1);
  };
  
  const handler2 = () => {
    setOpen2(!open2);
  };

  const items = [
    {
      title: "Organize your project content",
    },
    { title: "Collaborate your multiple team support easily" },
    { title: "Build your  multiple team support easily" },
  ];

  return (
    <div className="w-screen p-4 bg-white">
      <div className="justify-between m-auto md:flex md:container">
        <div className="md:w-1/2">
          <img src={website} alt="website" />
        </div>
        <div className="p-6">
          <p className="text-emerald-500 font-semi-bold">Website content builder</p>
          <br />
          <h1 className="text-3xl font-semibold text-blue-950">
            Meet our premium features <br />
            that will make you wow
          </h1>
          <br />
          <p className="text-blue-950">
            Build an incredible workplace and grow your business with <br />
            Gusto`s all-in-one platform with amazing contents.
          </p>
          <br />
          <div className="relative px-6 py-4 bg-white shadow-md">
            <span onClick={handler} className="absolute hover:cursor-pointer right-8 top-7">
              {open ? <AiOutlineMinus /> :  <AiOutlinePlus />}
            </span>
            <h1 className={`font-bold ${open ? "" : 'bg-slate-300 py-2 px-4 rounded-md'}`}>Organize your project content</h1>
            <p className={`${open ? 'show' : 'hidden'} `}>
              Get your website ads tests delivered at let collect sample from{" "}
              <br /> the victory of the managements that supplies best design
              system <br /> which guidelines ever with multiple features.
            </p>
          </div>
          <div className="relative px-6 py-4 bg-white shadow-md">
            <span onClick={handler1} className="absolute hover:cursor-pointer right-8 top-7">
              {open1 ? <AiOutlineMinus /> :  <AiOutlinePlus />}
            </span>
            <h1 className={`font-bold ${open1 ? "" : 'bg-slate-300 p-2 rounded-md'}`}>Collaborate your multiple team support easily</h1>
            <p className={`${open1 ? 'show' : 'hidden'} `}>
              Get your website ads tests delivered at let collect sample from{" "}
              <br /> the victory of the managements that supplies best design
              system <br /> which guidelines ever with multiple features.
            </p>
          </div>
          <div className="relative px-6 py-4 bg-white shadow-md">
            <span onClick={handler2} className="absolute hover:cursor-pointer right-8 top-7">
              {open2 ? <AiOutlineMinus /> :  <AiOutlinePlus />}
            </span>
            <h1 className={`font-bold ${open2 ? "" : 'bg-slate-300 p-2 rounded-md'}`}>Build your team`s knowledge base system</h1>
            <p className={`${open2 ? 'show' : 'hidden'} `}>
              Get your website ads tests delivered at let collect sample from{" "}
              <br /> the victory of the managements that supplies best design
              system <br /> which guidelines ever with multiple features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adversite;

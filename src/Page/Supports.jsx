import React from "react";
import {AiOutlineRight} from 'react-icons/ai'

import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import feature5 from '../assets/feature5.png';
import feature6 from '../assets/feature6.png';




const Supports = () => {

const items = [
  {img:feature1, title:'Email Hosting',button:"Most Popular"},
  {img:feature2, title:'Dedicated Hosting'},
  {img:feature3, title:'VPS Services'},
  {img:feature4, title:'WP Website Builder'},
  {img:feature5, title:'CMS Hosting', button:'Latest'},
  {img:feature6, title:'Cloud Hosting'},

]

  return (
    <div className="p-10 bg-slate-100">
      <div className="m-auto md:container">
        <div className="text-center">
          <p className="font-semibold text-emerald-500">Product Features</p>
          <h1 className="font-semibold text-blue-950">
            Ultimate features that works
          </h1>
        </div>
        <br />
        <br />
        <div className="grid gap-8 md:grid-cols-3">
          {
            items.map((item,index)=>(
              <div className="mb-4 md:flex" key={index}>
                  <div className="flex justify-center h-10">
                   <img src={item.img} alt="img" />
                  </div>
                  <div className="text-center md:ml-4 md:text-start">
                    <h1 className="font-semibold">{item.title}</h1>
                    <p>Get your info tests delivered at <br />
                      home collect a sample from the <br />
                      your progress actual tests.
                    </p>
                    <div className="flex justify-center md:justify-start ">
                    <button className="flex items-center font-semibold text-blue-500 md:flex-initial">
                      Buy Now <span className="ml-2 text-blue-500"><AiOutlineRight/></span>
                    </button>
                    </div>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Supports;

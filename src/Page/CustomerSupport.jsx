import React from "react";
import tick from "../assets/tick.png";
import massage from "../assets/massage.png";

const CustomerSupport = () => {
  return (
    <div className="bg-white">
        <br />
        <br />
      <div className="m-auto md:flex md:container">
        <div className="md:w-1/2">
          <img src={massage} alt="massage" />
        </div>
        <div className="px-6">
            <br />
          <p className="font-semibold text-green-500">
            24 hours customer support
          </p>
          <h1 className="font-semibold text-blue-950">
            Customer support is our main <br />
            priority with their hundred <br />
            percent satisfaction.
          </h1>
          <p>
            Get your tests delivered at let home collect sample from the <br />
            victory of the managements that supplies best design system <br />
            guidelines ever.
          </p>
          <br />
          <div className="md:flex">
          <div>
           <div className="flex">
                <div>
                    <img src={tick} alt="tick" />
                </div>
                <div  className="ml-2">
                    <h1 className="font-semibold text-blue-950">Medical and vision</h1>
                </div>
            </div>
            <div className="flex md:mt-4">
                <div>
                    <img src={tick} alt="tick" />
                </div>
                <div  className="ml-2">
                    <h1 className="font-semibold text-blue-950">Life insurance</h1>
                </div>
            </div>
           </div>
           <div className="md:ml-8">
           <div className="flex">
                <div>
                    <img src={tick} alt="tick" />
                </div>
                <div className="ml-2">
                    <h1 className="font-semibold text-blue-950">Medical and vision</h1>
                </div>
            </div>
            
            <div className="flex md:mt-4">
                <div>
                    <img src={tick} alt="tick" />
                </div>
                <div  className="ml-2">
                    <h1 className="font-semibold text-blue-950">Life insurance</h1>
                </div>
            </div>
           </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerSupport;

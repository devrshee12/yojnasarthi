import React from "react";
import "../index.css";
const Section = () => {
  return (
    <>
      <div className="flex flex-col pb-20 main">
        <div className="items-start flex mx-12">
          <h1 className="font-sans text-4xl font-bold mb-10 mt-5">
            {" "}
            How to Search ?{" "}
          </h1>
        </div>

        <div className="flex flex-row justify-around section">
          <div className="flex justify-between py-6 p-4 w-[30%] container bg-white rounded-md  shadow-2xl ...">
            <div className="w-[40%]">
              <p className="text-xl font-bold text-start">
                {" "}
                Enter your details{" "}
              </p>
            </div>
            <div className="w-[60%]">
              <img
                src="./img3.jpg"
                alt=""
                className="ml-8 w-[80%] h-[100%] rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-between py-6 p-4 w-[30%] container bg-white rounded-md shadow-2xl ...">
            <div className="w-[40%]">
              <p className="text-xl font-bold text-start">
                Filter out your schemes
              </p>
            </div>
            <div className="w-[60%]">
              <img
                src="./img2.jpg"
                alt=""
                className=" ml-8 w-[80%] h-[100%] rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-between py-6 p-4 w-[30%] container bg-white rounded-md shadow-2xl ...">
            <div className="w-[40%]">
              <p className="text-xl font-bold text-start">
                Apply for your schemes
              </p>
            </div>
            <div className="w-[60%]">
              <img
                src="./img1.jpeg"
                alt=""
                className="w-[80%] h-[100%] ml-8 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <button className="bg-[#FEB347] hover:bg-blue-700 text-white font-bold px-16 py-4 rounded-full mb-10 ">
        Enter Your Details
      </button>
    </>
  );
};

export default Section;

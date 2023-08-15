import React from "react";
import Categories from "./Categories";

const HeroSection = () => {
  return (
    <div className="flex flex-col space-y-10 md:space-y-10 h-[500px] w-full md:mb-10">
      <Categories />

      <div className=" p-4">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col  space-y-8  w-full md:w-[750px]">
            <h2 className="text-4xl md:text-6xl  text-center font-extrabold font-inter text-[#cbd5e1] ">
              <span className="block leading-relaxed font-inter">
                Unleash Creativity,
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007cf0] to-[#00dfd8]">
                One Project at a Time
              </span>
              <span className="block leading-relaxed font-inter">
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-600">
                  Hashboard !
                </span>
              </span>
            </h2>
            <p className=" w-full md:w-[440px] mx-auto text-center text-sm font-medium text-[#cbd5e1] font-inter">
              Our platform makes it easy to gather feedback and analyze it to
              improve your product recommendations to users.
            </p>
            <div className="flex justify-center items-center ">
              <button className="border-1 bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-lg text-gray-50 font-semibold py-[10px] px-6">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className=" w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-yellow-500 text-xl">Hi, my name is</p>
        <h1 className=" text-white text-4xl sm:text-7xl font-bold">
          Korakot Jarunongkran
        </h1>
        <h2 className="text-gray-400 text-4xl sm:text-7xl font-bold">
          I'm a Full Stack Developer.
        </h2>
        <p className=" text-gray-400 py-4 max-w-[700px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          officiis culpa sequi facere quod nam tempora, excepturi odio et
          eligendi quaerat velit consequuntur! Fugit, quisquam! Magnam voluptate
          assumenda accusantium qui.
        </p>
        <div>
          <button className="text-white group border-2 px-5 py-3 my-2 flex items-center hover:bg-white hover:text-black hover:border-transparent active:bg-slate-500 active:text-white active:border-transparent ">
            View Work
            <span className=' group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className=' ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
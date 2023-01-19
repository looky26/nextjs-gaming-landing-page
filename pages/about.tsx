import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className=" bg-[#070320] font-poppins">
      <main className="max-w-[1360px] mx-auto">
        <Navbar />


        <div className="max-w-[1146px] mx-auto">
        <div className="text-white flex items-center justify-around content-center flex-wrap lg:flex-nowrap gap-y-10">
            {/* left */}
            <div className="space-y-5">
              <p className="text-white">Home  > <span className="text-[#D80027]">About us </span>    </p>
              <h1 className="text-5xl lg:text-[30px] leading-normal font-semibold">
              Lorem Ipsum is simply <br /> dummy text of the printing <br /> and.
              </h1>
              <p className="text-sm lg:text-[15px] leading-loose">
                Lorem Ipsum is simply dummy text of the printing and <br />{" "}
                typesetting industry. Lorem Ipsum has been the industry's
                standard.
              </p>
              <button className="text-sm bg-gradient-to-r from-[#D80027] to-[#FB9E3C] p-3 rounded-full px-4">
                Get in touch <span><img className="inline-block ml-2" src="/arrow.svg" alt="" /></span>
              </button>
            </div>
            {/* right */}
            <div className="relative">
              <img src="/creed.png" alt="" />
             
          
            </div>
          </div>
        </div>


      </main>
    </div>
  );
};

export default About;

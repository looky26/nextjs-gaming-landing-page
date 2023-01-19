import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-10 text-white p-5">
      <h1 className="text-4xl font-bold cursor-pointer">LOGO</h1>
      <ul className="lg:flex space-x-16 text-[16px] items-center hidden">
        <Link href={'/'}>
        <li className="cursor-pointer">Home</li>
        </Link>
       <Link href={'/about'}>
       <li className="cursor-pointer">About Us</li>
       </Link>
     
        <li className="cursor-pointer">Portfolio</li>
        <li className="cursor-pointer">News</li>
        <button className="text-sm bg-[#D80027] rounded-md p-2 px-4 cursor-pointer">
          Contact Us
        </button>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 lg:hidden cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default Navbar;

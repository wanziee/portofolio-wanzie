import React, { useState } from "react";
import { HomeIcon, UserIcon, BriefcaseIcon } from "@heroicons/react/16/solid";

const StickyBottomNavigationBar = () => {
  return (
    <>
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-md">
        <ul className="flex justify-around items-center h-16">
          <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <HomeIcon className="h-6 w-6" />
            <span className="text-sm">Home</span>
          </li>
          <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <UserIcon className="h-6 w-6" />
            <span className="text-sm">About</span>
          </li>
          <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <BriefcaseIcon className="h-6 w-6" />
            <span className="text-sm">Works</span>
          </li>
          <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
            <BriefcaseIcon className="h-6 w-6" />
            <span className="text-sm">Contact</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default StickyBottomNavigationBar;

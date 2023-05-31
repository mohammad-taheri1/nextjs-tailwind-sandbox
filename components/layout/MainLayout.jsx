"use client";

import React, { useContext } from "react";
import Link from "next/link";
import MainHeader from "./MainHeader";

import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
   const { open, toggle } = useContext(MenuContext);

   const closeSeideBarHandler = () => {
      toggle();
   };

   return (
      <div className="bg-green-100 min-h-screen">
         <aside
            className={`bg-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
               open ? "w-60 p-4 block fixed" : "w-0 hidden"
            } lg:w-60 lg:p-4 z-50 shadow-sm`}
         >
            <ul>
               <li className="flex justify-end items-center lg:hidden">
                  <AiOutlineClose
                     onClick={closeSeideBarHandler}
                     className="text-red-500 hover:text-red-800 cursor-pointer"
                  />
               </li>

               <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <AiOutlineHome className="mr-2" />
                  <Link href="/" onClick={closeSeideBarHandler}>
                     Home
                  </Link>
               </li>
               <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <GrProjects className="mr-2" />
                  <h3 className="flex-1">Projects</h3>
                  <FaAngleRight />
               </li>
               <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <div className="w-full flex flex-row justify-start items-center">
                     <FaCheck className="mr-2" />
                     <h3 className="flex-1">Singular</h3>
                     <FaAngleRight />
                  </div>
                  <ul className="ml-8 mt-4">
                     <li className="flex justify-center items-center gap-3">
                        <SiSinglestore />
                        <Link href="/singular/selectbox" onClick={closeSeideBarHandler}>
                           Select Box
                        </Link>
                     </li>
                  </ul>
               </li>
               <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <FaCheckDouble className="mr-2" />
                  <h3 className="flex-1">Complex</h3>
                  <FaAngleRight />
               </li>
               <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <SiHelpscout className="mr-2" />
                  <Link href="/about-us" onClick={closeSeideBarHandler}>
                     About us
                  </Link>
               </li>
               <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
                  <FiPhoneCall className="mr-2" />
                  <Link href="/contact-us" onClick={closeSeideBarHandler}>
                     Contact us
                  </Link>
               </li>
            </ul>
         </aside>
         <div className={`${open ? "blur-xl" : "blur-0"}`}>
            <MainHeader />
            <main className="lg:ml-[280px]">{children}</main>
         </div>
      </div>
   );
};

export default MainLayout;

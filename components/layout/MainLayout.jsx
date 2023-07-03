"use client";

import React, { useContext } from "react";
import MainHeader from "./leyout-sections/MainHeader";

import { MenuContext } from "@/context/MenuContext";
import MainSidebar from "./leyout-sections/MainSidebar";
import MobileButtonNavigation from "./leyout-sections/MobileButtonNavigation";

const MainLayout = ({ children }) => {
   const { open } = useContext(MenuContext);

   return (
      <div className="bg-green-100 min-h-screen">
         <MainSidebar />
         <div className={`${open ? "max-lg:blur-xl" : "blur-0"}`}>
            <MainHeader />
            <main className="lg:ml-[280px]">{children}</main>
         </div>
         <MobileButtonNavigation />
      </div>
   );
};

export default MainLayout;

'use client';

import React, { useContext } from 'react';
import MainHeader from './leyout-sections/MainHeader';

import { MenuContext } from '@/context/MenuContext';
import MainSidebar from './leyout-sections/MainSidebar';
import MobileButtonNavigation from './leyout-sections/MobileButtonNavigation';

const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className='min-h-screen bg-gray-200 dark:bg-slate-700'>
      <MainSidebar />
      <div className={`${open ? 'max-lg:blur-xl pointer-events-none' : ''}`}>
        <MainHeader />
        <main className='lg:ml-[280px]'>{children}</main>
      </div>
      <MobileButtonNavigation />
    </div>
  );
};

export default MainLayout;

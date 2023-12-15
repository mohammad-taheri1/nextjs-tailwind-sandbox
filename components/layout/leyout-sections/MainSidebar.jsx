import React, { useContext } from 'react';
import Link from 'next/link';
import { MenuContext } from '@/context/MenuContext';

import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { FaAngleRight, FaCheck, FaCheckDouble } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { SiHelpscout, SiSinglestore } from 'react-icons/si';

const MainSidebar = () => {
  const { open, toggle } = useContext(MenuContext);

  const closeSeideBarHandler = () => {
    toggle();
  };

  return (
    <aside
      className={`bg-white dark:bg-slate-600 dark:text-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
        open ? 'w-60 p-4 block fixed' : 'w-0 hidden'
      } lg:w-60 lg:p-4 max-lg:z-20 shadow-sm`}
    >
      <ul>
        <li className='flex justify-end items-center lg:hidden'>
          <AiOutlineClose onClick={closeSeideBarHandler} className='text-red-500 hover:text-red-800 cursor-pointer' />
        </li>

        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <AiOutlineHome className='mr-2' />
          <Link href='/' onClick={closeSeideBarHandler}>
            Home
          </Link>
        </li>
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <GrProjects className='mr-2' />
          <h3 className='flex-1'>Projects</h3>
          <FaAngleRight />
        </li>
        <li className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <div className='w-full flex flex-row justify-start items-center'>
            <FaCheck className='mr-2' />
            <h3 className='flex-1'>Singular</h3>
            <FaAngleRight />
          </div>
          <ul className='ml-8 mt-4'>
            <li className='flex justify-start items-center gap-3'>
              <SiSinglestore />
              <Link href='/singular/selectbox' onClick={closeSeideBarHandler}>
                Select Box
              </Link>
            </li>
            <li className='flex justify-start items-center gap-3'>
              <SiSinglestore />
              <Link href='/singular/modal' onClick={closeSeideBarHandler}>
                Modal
              </Link>
            </li>
            <li className='flex justify-start items-center gap-3'>
              <SiSinglestore />
              <Link href='/singular/rhform' onClick={closeSeideBarHandler}>
                R.H.Form
              </Link>
            </li>
            <li className='flex justify-start items-center gap-3'>
              <SiSinglestore />
              <Link href='/singular/rhf-yup' onClick={closeSeideBarHandler}>
                R.H.F-Yup
              </Link>
            </li>
          </ul>
        </li>
        <li className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <div className='w-full flex flex-row justify-start items-center'>
            <FaCheckDouble className='mr-2' />
            <h3 className='flex-1'>Complex</h3>
            <FaAngleRight />
          </div>
          <ul className='ml-8 mt-4'>
            <li className='flex justify-start items-center gap-3 my-1'>
              <SiSinglestore />
              <Link href='/complex/horizontal-scrollbar' onClick={closeSeideBarHandler}>
                Ho-Scrollbar
              </Link>
            </li>
            <li className='flex justify-start items-center gap-3 my-1'>
              <SiSinglestore />
              <Link href='/complex/tabs' onClick={closeSeideBarHandler}>
                Tabs
              </Link>
            </li>
            <li className='flex justify-start items-center gap-3 my-1'>
              <SiSinglestore />
              <Link href='/complex/slider' onClick={closeSeideBarHandler}>
                Slider
              </Link>
            </li>
            <li className='flex justify-start items-center gap-3 my-1'>
              <SiSinglestore />
              <Link href='/complex/simple-multi-step-form' onClick={closeSeideBarHandler}>
                Simple M-S-Form
              </Link>
            </li>
          </ul>
        </li>
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <SiHelpscout className='mr-2' />
          <Link href='/about-us' onClick={closeSeideBarHandler}>
            About us
          </Link>
        </li>
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <FiPhoneCall className='mr-2' />
          <Link href='/contact-us' onClick={closeSeideBarHandler}>
            Contact us
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;

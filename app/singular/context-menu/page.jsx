'use client';
import ContextMenu from '@/components/context-menu/ContextMenu';
import React, { useState, useRef } from 'react';
import {
  MdOpenInBrowser,
  MdAttachEmail,
  MdOutlineArchive,
} from 'react-icons/md';

const ContextMenuPage = () => {
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });
  const textAreaRef = useRef();

  const openContextMenuHandler = (e) => {
    e.preventDefault();
    const { pageX, pageY } = e;
    console.log({ pageX, pageY });
    setContextMenu({ show: true, x: pageX, y: pageY });
  };

  const closeContextMenuHandler = (e) => {
    setContextMenu({ show: false, x: 0, y: 0 });
  };

  const menuItems = [
    {
      id: 0,
      label: 'Open',
      icon: <MdOpenInBrowser />,
      onclick: () => alert('Open'),
    },
    {
      id: 1,
      label: 'Email',
      icon: <MdAttachEmail />,
      onclick: () => alert('Email'),
    },
    {
      id: 2,
      label: 'Archive',
      icon: <MdOutlineArchive />,
      onclick: () => alert('Archive'),
    },
  ];

  return (
    <div className='bg-white rounded-lg mx-4 p-4 min-h-[70vh]'>
      <h1>This is ContextMenu page</h1>
      <br />
      <br />
      <br />
      <textarea
        ref={textAreaRef}
        className='p-2 border border-gray-300 rounded-md w-full'
        rows={15}
        onContextMenu={(e) => openContextMenuHandler(e)}
      ></textarea>

      {contextMenu.show && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onCloseContextMenu={closeContextMenuHandler}
          parentRef={textAreaRef}
        >
          <div className='flex flex-col gap-2'>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className='flex items-center gap-2 cursor-pointer hover:text-blue-600'
                onClick={() => {
                  item.onclick();
                  closeContextMenuHandler();
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </ContextMenu>
      )}
    </div>
  );
};

export default ContextMenuPage;

'use client';

import { AiOutlineClose } from 'react-icons/ai';

// Important tip 1:
// We control the Modal state on its parent (open and close state)
// The Modal is just a wrapper component that handles the UI
// It is in the center of screen and It has a semi-transparent background
// We can close this modal by clicking on the background or the close buttton

// Important tip 2:
// We need to receive some props
// 1- isOpen: to handle show and hide this modal
// 2- onDismiss: to be able to send back dismiss command to parent
// 3- children: to render the received children inside of our Modal

const Modal = ({ isOpen, title = 'My Modal', onDismiss, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className='fixed w-screen h-screen bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onDismiss}
    >
      <div
        className='min-w-[400px] max-w-full overflow-x-hidden min-h-[200px] bg-white rounded-xl p-2 flex flex-col relative'
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className='absolute right-4 top-3 text-2xl text-red-600 cursor-pointer'
          onClick={onDismiss}
        />
        <div className='w-full h-10 flex items-center mb-1 border border-b-gray-300'>
          <h1 className='text-xl font-bold'>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

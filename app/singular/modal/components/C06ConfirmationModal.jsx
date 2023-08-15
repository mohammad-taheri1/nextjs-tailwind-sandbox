'use client';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';

const C06ConfirmationModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHanlder = () => {
    setShowModal(true);
  };

  const closeModalHanlder = () => {
    setShowModal(false);
  };

  const onConfirmModalHandler = () => {
    // Do what You wanted it to be confirmed
    alert('Modal Confirmed');
    setShowModal(false);
  };

  return (
    <div>
      <button
        className='px-4 py-2 bg-blue-900 text-white rounded-lg'
        onClick={openModalHanlder}
      >
        Show Confirmation Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHanlder}
        title='Confirmation Modal'
      >
        <div className='my-4 flex flex-col justify-center items-center gap-8'>
          <h1>Are You sure?</h1>
          <div className='flex justify-center items-center gap-4'>
            <button
              className='px-4 py-2 bg-green-900 text-white rounded-lg'
              onClick={onConfirmModalHandler}
            >
              Confirm
            </button>
            <button
              className='px-4 py-2 bg-red-900 text-white rounded-lg'
              onClick={closeModalHanlder}
            >
              Dismiss
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default C06ConfirmationModal;

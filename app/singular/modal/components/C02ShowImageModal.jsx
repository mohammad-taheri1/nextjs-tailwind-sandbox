'use client';
import Modal from '@/components/modal/Modal';
import Image from 'next/image';
import { useState } from 'react';

const C02ShowImageModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHanlder = () => {
    setShowModal(true);
  };

  const closeModalHanlder = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        className='px-4 py-2 bg-blue-900 text-white rounded-lg'
        onClick={openModalHanlder}
      >
        ShowImage Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHanlder}
        title='ShowImage Modal'
      >
        <div className='my-4'>
          <Image
            src='/assets/images/sky.jpg'
            width={600}
            height={300}
            className='rounded-lg'
          />
        </div>
      </Modal>
    </div>
  );
};

export default C02ShowImageModal;

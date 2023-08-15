'use client';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';

const C01SimpleHelloWorldModal = () => {
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
        Show SimpleHelloWorld Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHanlder}
        title='Simple Hello World Modal'
      >
        <div className='my-4 w-[600px] max-w-full'>
          <h1>Hello World </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio,
            quaerat explicabo laborum quas eius dicta nobis eum nam quod! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos odio,
            quaerat explicabo laborum quas eius dicta nobis eum nam quod! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos odio,
            quaerat explicabo laborum quas eius dicta nobis eum nam quod!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default C01SimpleHelloWorldModal;

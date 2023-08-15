'use client';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';

const C03VideoPlayerModal = () => {
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
        Show VideoPlayer Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHanlder}
        title='VideoPlayer Modal'
      >
        <div className='my-4'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/8asf9zF-jbg'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default C03VideoPlayerModal;

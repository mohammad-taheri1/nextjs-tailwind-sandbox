'use client';
import Modal from '@/components/modal/Modal';
import { useState, useEffect } from 'react';

const C08TimerCountdownModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [timerId, setTimerID] = useState('');

  const openModalHanlder = () => {
    setShowModal(true);
  };

  const closeModalHanlder = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      let newTimerID = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      setTimerID(newTimerID);
    } else {
      if (timerId) {
        clearTimeout(timerId);
        setTimerID('');
      }
    }

    // Cleanup function for unmounting phase
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [showModal]);

  return (
    <div>
      <button
        className='px-4 py-2 bg-blue-900 text-white rounded-lg'
        onClick={openModalHanlder}
      >
        Show TimerCountdown Modal
      </button>
      <h1 className='text-2xl text-blue-800'>timer ID: {timerId}</h1>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHanlder}
        title='TimerCountdown Modal'
      >
        <div className='my-4'>
          <h1 className='text-xl'>
            This modal Will be closed after 3 seconds.
          </h1>
          <h2 className='text-xl'>It is just for Your information</h2>
        </div>
      </Modal>
    </div>
  );
};

export default C08TimerCountdownModal;

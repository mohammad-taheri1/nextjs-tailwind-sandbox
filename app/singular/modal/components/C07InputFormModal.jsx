'use client';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';

const C07InputFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const openModalHanlder = () => {
    setShowModal(true);
  };

  const closeModalHanlder = () => {
    setShowModal(false);
  };

  const formSubmitHandler = () => {
    if (fullName === '' || email === '') {
      alert('Please fill all inputs');
    } else {
      alert('Successful form submit');
      setShowModal(false);
    }
  };

  return (
    <div>
      <button
        className='px-4 py-2 bg-blue-900 text-white rounded-lg'
        onClick={openModalHanlder}
      >
        Show InputForm Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHanlder}
        title='InputForm Modal'
      >
        <div className='my-4 w-[600px] max-w-full'>
          <form className='flex flex-col gap-6'>
            <div className='flex flex-col justify-center items-start gap-1'>
              <label>Full Name</label>
              <input
                type='text'
                name='fullName'
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className='w-full outline-none border-2 border-blue-300 focus:border-blue-600 px-2 py-1 rounded-lg'
              />
            </div>
            <div className='flex flex-col justify-center items-start gap-1'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className='w-full outline-none border-2 border-blue-300 focus:border-blue-600 px-2 py-1 rounded-lg'
              />
            </div>
            <div className='flex justify-center items-center gap-4'>
              <button
                className='px-4 py-2 bg-green-900 text-white rounded-lg'
                type='button'
                onClick={formSubmitHandler}
              >
                Submit
              </button>
              <button
                className='px-4 py-2 bg-red-900 text-white rounded-lg'
                type='button'
                onClick={closeModalHanlder}
              >
                Dismiss
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default C07InputFormModal;

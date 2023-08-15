import React from 'react';
import C01SimpleHelloWorldModal from './components/C01SimpleHelloWorldModal';
import C02ShowImageModal from './components/C02ShowImageModal';
import C03VideoPlayerModal from './components/C03VideoPlayerModal';
import C04ShowChartModal from './components/C04ShowChartModal';
import C05MoneyTrackingModal from './components/C05MoneyTrackingModal';
import C06ConfirmationModal from './components/C06ConfirmationModal';
import C07InputFormModal from './components/C07InputFormModal';
import C08TimerCountdownModal from './components/C08TimerCountdownModal';

const ModalPage = () => {
  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
      <h1>This is Modal page</h1>
      <br />
      <br />
      <hr className='bg-sky-400 h-1 my-4' />
      <C01SimpleHelloWorldModal />
      <hr className='bg-sky-400 h-1 my-4' />
      <C02ShowImageModal />
      <hr className='bg-sky-400 h-1 my-4' />
      <C03VideoPlayerModal />
      <hr className='bg-sky-400 h-1 my-4' />
      <C04ShowChartModal />
      <hr className='bg-sky-400 h-1 my-4' />
      <C05MoneyTrackingModal />
      <hr className='bg-sky-400 h-1 my-4' />
      <C06ConfirmationModal />
      <hr className='bg-sky-400 h-1 my-4' />
      <C07InputFormModal />
      <hr className='bg-sky-400 h-1 my-4' />
      <C08TimerCountdownModal />
    </div>
  );
};

export default ModalPage;

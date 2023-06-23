import React from 'react';
import CustomSlider1 from './components/CustomSlider1';

const SliderPage = () => {
  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
      <h1>Slider page</h1>
      <br />

      {/* Slider Component */}
      <CustomSlider1 />
    </div>
  );
};

export default SliderPage;

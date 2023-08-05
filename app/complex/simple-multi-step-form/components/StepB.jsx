const StepB = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div>
      <h1 className='mt-2 text-xl font-bold text-blue-900'>
        Step B: Customer Business Info
      </h1>

      <div className='my-2'>
        <label>Business Name</label>
        <input
          type='text'
          name='businessName'
          value={formData.businessName}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
        />
      </div>
      <div className='my-2'>
        <label>Business City</label>
        <input
          type='text'
          name='businessCity'
          value={formData.businessCity}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
        />
      </div>
      <div className='my-2'>
        <label>Business Website</label>
        <input
          type='text'
          name='businessWebsite'
          value={formData.businessWebsite}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
        />
      </div>
      <div className='my-2'>
        <label>Business Email</label>
        <input
          type='email'
          name='businessEmail'
          value={formData.businessEmail}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
        />
      </div>

      <div className='my-2 flex justify-between items-center'>
        <button
          className='bg-yellow-400 px-4 py-2 rounded-xl'
          onClick={handlePrevStep}
        >
          Prev
        </button>
        <button
          className='bg-green-400 px-4 py-2 rounded-xl'
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepB;

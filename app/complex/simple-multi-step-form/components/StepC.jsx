const StepC = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div>
      <h1 className='mt-2 text-xl font-bold text-blue-900'>
        Step C: Customer Financial Info
      </h1>

      <div className='my-2'>
        <label>Income Per Month</label>
        <input
          type='number'
          name='incomePerMonth'
          value={formData.incomePerMonth}
          onChange={(e) => handleChangeInput(e)}
          className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
        />
      </div>
      <div className='my-2'>
        <label>Tax Percantage</label>
        <input
          type='number'
          name='taxPercantage'
          value={formData.taxPercantage}
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

export default StepC;

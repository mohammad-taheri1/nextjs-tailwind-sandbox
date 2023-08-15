'use client';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';
import { months, incomes, expenses } from '@/__mock/chartData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: true,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 1000,
      max: 5000,
      ticks: {
        stepSize: 1000,
        callback: (value) => Number(value) / 1000 + 'K',
      },
    },
  },
};

const chartData = {
  labels: months,
  datasets: [
    {
      label: 'income',
      data: incomes,
      borderColor: '#047b31',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      tension: 0.5,
    },
    {
      label: 'expense',
      data: expenses,
      borderColor: '#ca3a12',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      tension: 0.25,
    },
  ],
};

const C05MoneyTrackingModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModalHanlder = () => {
    setShowModal(true);
  };

  const closeModalHanlder = () => {
    setShowModal(false);
  };

  const averageMonthlyIncome = () => {
    let count = incomes.length;
    let total = 0;
    incomes.forEach((item) => {
      total += item;
    });
    return Math.round(total / count);
  };

  const averageMonthlyExpense = () => {
    let count = expenses.length;
    let total = 0;
    expenses.forEach((item) => {
      total += item;
    });
    return Math.round(total / count);
  };

  return (
    <div>
      <button
        className='px-4 py-2 bg-blue-900 text-white rounded-lg'
        onClick={openModalHanlder}
      >
        Show MoneyTracking Modal
      </button>
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHanlder}
        title='Money Tracking Modal'
      >
        <div className='my-4 w-[800px] max-w-full flex flex-col gap-4'>
          <div className='flex gap-2'>
            <h1 className='text-xl text-slate-500'>Average Monthly Income:</h1>
            <h4 className='text-xl'>{averageMonthlyIncome()} $</h4>
          </div>
          <div className='flex gap-2'>
            <h1 className='text-xl text-slate-500'>Average Monthly Expense:</h1>
            <h4 className='text-xl'>{averageMonthlyExpense()} $</h4>
          </div>
          <div>
            <Line options={chartOptions} data={chartData} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default C05MoneyTrackingModal;

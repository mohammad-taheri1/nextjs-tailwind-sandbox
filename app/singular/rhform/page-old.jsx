'use client';
import { useState } from 'react';

let x = 0;

const RHFormPage = () => {
  x++;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmitForm = (event) => {
    // prevent page refresh
    event.preventDefault();
    // validation start
    const updatedErrors = {
      ...errors,
    };
    if (name === '') {
      updatedErrors.name = 'Please enter name';
    } else {
      updatedErrors.name = '';
    }
    if (email === '') {
      updatedErrors.email = 'Please enter email';
    } else {
      updatedErrors.email = '';
    }
    if (phone === '') {
      updatedErrors.phone = 'Please enter phone';
    } else {
      updatedErrors.phone = '';
    }
    if (password === '') {
      updatedErrors.password = 'Please enter password';
    } else {
      updatedErrors.password = '';
    }
    setErrors(updatedErrors);
    if (name === '' || email === '' || phone === '' || password === '') {
      return;
    }
    // validation end
    alert(' This Alert means Your submit was successful');
  };

  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
      <h1>This is SelectBox page</h1>
      <h1>Re-Render # {x}</h1>
      <form onSubmit={handleSubmitForm} className='flex flex-col max-w-[500px]'>
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name !== '' && <span className='text-white bg-red-500 p-1'>{errors.name}</span>}

        <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email !== '' && <span className='text-white bg-red-500 p-1'>{errors.email}</span>}

        <input type='text' placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        {errors.phone !== '' && <span className='text-white bg-red-500 p-1'>{errors.phone}</span>}

        <input type='text' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password !== '' && <span className='text-white bg-red-500 p-1'>{errors.password}</span>}

        <button type='submit' className='bg-green-700 text-white rounded-lg p-2 my-2'>
          Send To Backend
        </button>
      </form>
    </div>
  );
};

export default RHFormPage;

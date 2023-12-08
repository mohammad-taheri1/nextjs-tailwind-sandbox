'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

let x = 0;

const RHFormPage = () => {
  x++;

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [password, setPassword] = useState('');

  // const [errors, setErrors] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   password: '',
  // });

  // const handleSubmitForm = (event) => {
  //   // prevent page refresh
  //   event.preventDefault();
  //   // validation start
  //   const updatedErrors = {
  //     ...errors,
  //   };
  //   if (name === '') {
  //     updatedErrors.name = 'Please enter name';
  //   } else {
  //     updatedErrors.name = '';
  //   }
  //   if (email === '') {
  //     updatedErrors.email = 'Please enter email';
  //   } else {
  //     updatedErrors.email = '';
  //   }
  //   if (phone === '') {
  //     updatedErrors.phone = 'Please enter phone';
  //   } else {
  //     updatedErrors.phone = '';
  //   }
  //   if (password === '') {
  //     updatedErrors.password = 'Please enter password';
  //   } else {
  //     updatedErrors.password = '';
  //   }
  //   setErrors(updatedErrors);
  //   if (name === '' || email === '' || phone === '' || password === '') {
  //     return;
  //   }
  //   // validation end
  //   alert(' This Alert means Your submit was successful');
  // };

  // 1
  // const form = useForm();
  // const { register, handleSubmit, formState } = form;
  // const { errors } = formState;

  // 2
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const callBackFunctionTest = (data) => {
    console.log(data);
  };

  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
      <h1>This is RHForm page</h1>
      <h1>Re-Render # {x}</h1>
      <form onSubmit={handleSubmit(callBackFunctionTest)} className='flex flex-col max-w-[500px]'>
        <input
          type='text'
          placeholder='name'
          {...register('name', {
            required: 'The name is required',
            minLength: {
              value: 5,
              message: 'Min Length is 5 for the name',
            },
          })}
        />
        {errors.name && <span className='text-white bg-red-500 p-1'>{errors.name.message}</span>}

        <input
          type='text'
          placeholder='email'
          {...register('email', {
            required: 'The email is required',
          })}
        />
        {errors.email && <span className='text-white bg-red-500 p-1'>{errors.email.message}</span>}

        <input
          type='text'
          placeholder='phone'
          {...register('phone', {
            required: 'The phone is required',
          })}
        />
        {errors.phone && <span className='text-white bg-red-500 p-1'>{errors.phone.message}</span>}

        <input
          type='text'
          placeholder='password'
          {...register('password', {
            required: 'The password is required',
            minLength: {
              value: 12,
              message: 'Min Length is 12 for the name',
            },
          })}
        />
        {errors.password && <span className='text-white bg-red-500 p-1'>{errors.password.message}</span>}

        <button type='submit' className='bg-green-700 text-white rounded-lg p-2 my-2'>
          Send To Backend
        </button>
      </form>
    </div>
  );
};

export default RHFormPage;

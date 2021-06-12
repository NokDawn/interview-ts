import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import { AppRoute } from 'routing/AppRoute.enum';

import './Login.scss';

export const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <Header />
      <form className='login__form' onSubmit={handleSubmit}>
        <h1 className='heading-primary'>Login</h1>
        <Input
          type='text'
          name='username'
          label='Username'
          placeholder='Enter username'
          className='login__form-input-first'
        />
        <Input
          type='password'
          name='password'
          label='Password'
          placeholder='Enter password'
        />
        <Button type='submit' text='Log in' model='normal' />
        <span className='login__form-forgotten-password'>Forgot password?</span>
      </form>
    </div>
  );
};

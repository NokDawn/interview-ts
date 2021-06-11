import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import './Login.scss';

export const Login = () => {
  return (
    <div className='login'>
      <span className='login-company-title'>join.tsh.io</span>
      <form className='login__form'>
        <h1 className='heading-primary'>Login</h1>
        <span className='login__form-subtitle'>Username</span>
        <input
          className='login__form-input'
          type='text'
          placeholder='Enter username'
        />
        <span className='login__form-subtitle'>Password</span>
        <input
          className='login__form-input'
          type='text'
          placeholder='Enter password'
        />
        <button className='login__form-button' type='submit'>
          Log in
        </button>
        <span className='login__form-forgotten-password'>Forgot password?</span>
      </form>
    </div>
  );
};

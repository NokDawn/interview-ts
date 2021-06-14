import React from 'react';

import { InputProps } from './Input.types';

import './Input.scss';

const Input: React.FC<InputProps> = ({
  name,
  label,
  checkbox,
  children,
  ...rest
}) => {
  if (checkbox) {
    return (
      <div className='input-checkbox'>
        <input type='checkbox' id={name} {...rest} />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }

  return (
    <div className='input-wrapper'>
      {label && <label htmlFor={name}>{label}</label>}
      <div className='input-wrapper__ico'>
        <input id={name} {...rest} />
        {children && <span>{children}</span>}
      </div>
    </div>
  );
};

export default Input;

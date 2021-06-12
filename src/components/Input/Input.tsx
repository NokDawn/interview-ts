import React, { InputHTMLAttributes } from 'react';

import './Input.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, label, children, ...rest }) => {
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

import React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

const Button: React.FC<ButtonProps> = ({ text, model, ...rest }) => {
  return (
    <button
      className={`button ${model === 'outline' && 'button-outline'}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;

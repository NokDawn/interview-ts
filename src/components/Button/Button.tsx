import React, { ButtonHTMLAttributes } from 'react';

import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  model: 'normal' | 'outline';
}

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

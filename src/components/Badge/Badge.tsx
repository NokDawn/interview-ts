import React from 'react';

import { BadgeProps } from './Badge.types';

import './Badge.scss';

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return <div className='badge'>{text}</div>;
};

export default Badge;

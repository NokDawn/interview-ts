import React from 'react';

import { BsBag } from 'react-icons/bs';

import './EmptyList.scss';

export interface EmptyListProps {}

const EmptyList: React.FC<EmptyListProps> = () => {
  return (
    <div className='empty-list'>
      <div className='wrapper'>
        <div className='empty-list__box'>
          <div className='empty-list__box__center'>
            <span className='empty-list__box__center-icon'>
              <BsBag />
            </span>
            <span className='empty-list__box__center-text'>
              Oooops...It's empty here
            </span>
            <span className='empty-list__box__center-subtext'>
              There are no products on the list
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyList;

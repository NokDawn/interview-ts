import React, { useCallback } from 'react';

import { FaStar, FaRegStar } from 'react-icons/fa';

import './Rating.scss';

export interface RatingProps {
  value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  return (
    <div className='rating'>
      {value >= 1 ? (
        <FaStar className='rating-full' />
      ) : (
        <FaRegStar className='rating-empty' />
      )}
      {value >= 2 ? (
        <FaStar className='rating-full' />
      ) : (
        <FaRegStar className='rating-empty' />
      )}
      {value >= 3 ? (
        <FaStar className='rating-full' />
      ) : (
        <FaRegStar className='rating-empty' />
      )}
      {value >= 4 ? (
        <FaStar className='rating-full' />
      ) : (
        <FaRegStar className='rating-empty' />
      )}
      {value >= 5 ? (
        <FaStar className='rating-full' />
      ) : (
        <FaRegStar className='rating-empty' />
      )}
    </div>
  );
};

export default Rating;

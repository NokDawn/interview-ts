import React, { useState } from 'react';

import Button from 'components/Button/Button';
import Rating from 'components/Rating/Rating';
import Modal from '../Modal/Modal';
import Badge from 'components/Badge/Badge';

import { Portal } from 'react-portal';

import { ProductProps } from './Product.types';

import './Product.scss';

const Product: React.FC<ProductProps> = ({
  product: { image, active, description, name, promo, rating },
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='product'>
      <div className='wrapper'>
        <div
          className='product__image'
          style={{ backgroundImage: `url(${image})` }}
        >
          {promo && <Badge text='Promo' />}
        </div>
        <div className='product__description'>
          <h2 className='heading-secondary'>{name}</h2>
          <span className='product__description-subtitle'>{description}</span>
          <Rating value={rating} />
          <div className='product__description__buttons'>
            <Button
              disabled={!active}
              text={!active ? 'Unavailable' : 'Show details'}
              model='normal'
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </div>
        </div>
      </div>
      {openModal && (
        <Portal>
          <Modal
            image={image}
            name={name}
            description={description}
            setOpenModal={setOpenModal}
          />
        </Portal>
      )}
    </div>
  );
};

export default Product;

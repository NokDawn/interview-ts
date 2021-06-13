import React from 'react';

import { MdClose } from 'react-icons/md';

import './Modal.scss';

export interface ModalProps {
  image: string;
  name: string;
  description: string;
  setOpenModal: (active: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  image,
  name,
  description,
  setOpenModal,
}) => {
  return (
    <div className='modal'>
      <div className='modal__content'>
        <div
          className='modal__content__image'
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className='modal__content__container'>
          <h2 className='heading-secondary'>{name}</h2>
          <span className='modal__content__container-subtitle'>
            {description}
          </span>
        </div>
        <div className='modal__content__close'>
          <MdClose onClick={() => setOpenModal(false)} />
        </div>
      </div>
      <div className='modal__overlay' onClick={() => setOpenModal(false)} />
    </div>
  );
};

export default Modal;

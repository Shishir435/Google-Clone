

import './ModalIcon.css'

import React from 'react'
import modalDetail from '../data/modalData'

const ModalIcon = () => {
  return (
    <div className='modal__container'>
      {modalDetail.map((item) => (
        <div className='modal__icon'>
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}</div>
  )
}

export default ModalIcon
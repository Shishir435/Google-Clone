

import './ModalIcon.css'

import React from 'react'
import {modalDetailOne, modalDetailTwo} from '../data/modalData'


const ModalIcon = () => {
  return (
    <div>
    <div className='modal__container'>

      {modalDetailOne.map((item) => (
        <a href={item.url}>
          <div key={item.id} className='modal__icon'>
            <img height={40} width={40} src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
         
          </a>
      ))}
      </div>
      <hr style={{borderBottom: '1px solid  rgb(213, 211, 211)', widows: '100%', margin: '4rem 0 1rem 0'}} />
    <div className='modal__container'>

      {modalDetailTwo.map((item) => (
        <a href={item.url}>
          <div key={item.id} className='modal__icon'>
            <img height={40} width={40} src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
         
          </a>
      ))}
      </div>
      
      </div>
  )
}

export default ModalIcon
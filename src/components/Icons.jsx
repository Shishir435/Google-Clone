
const youtubeImage = "https://st.depositphotos.com/1144386/4223/v/600/depositphotos_42236325-stock-illustration-modern-youtube-icon.jpg"

const addIcon = "https://cdn-icons-png.flaticon.com/512/2997/2997933.png";

import './Icons.css'
import React from 'react'
import homePage_IconDetail from '../data/data';

const Icons = () => {
  return (

    <div className='homePage__icons'>

      {homePage_IconDetail.map((item) => (
        <a href={item.url} className='icon__url'>
          <div key={item.id} className="homePage__icon">
            <div className='homepage__imageDiv'>
              <img src={item.imgURL} alt={item.name} width={24} height={24} style={{ borderRadius: '50%' }} />
            </div>
            <div>
              <p>{item.name}</p>
            </div>
          </div></a>
      ))}
    </div>

  )
}

export default Icons
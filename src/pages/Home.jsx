

import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/icons-material/AccountCircle';
import './Home.css'
import Search from './Search';


const Home = () => {
  return (
    <div className='home'>
    
      <div className="home__header">
          <div className="header__left">
          <Link to='/about'>About</Link>
          </div>
          <div className="header__right">
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon />
            <Avatar sx={{fontSize: '40px'}}/>
          </div>
      </div>
      <div className="home__body">
        <img draggable="false" src="/google.svg" alt="Google img" />
        <div className="home__inputcontainer">
          <Search />
        </div>
       
      </div>
    </div>
  )
}

export default Home
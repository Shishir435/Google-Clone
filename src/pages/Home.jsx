

import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/icons-material/AccountCircle';
import './Home.css'
import Search from './Search';

const Home = () => {
  return (
    <div className='home'>
      {/* <h1>This is home</h1> */}
      <div className="home__header">
          <div className="header__left">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
          </div>
          <div className="header__right">
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon />
            <Avatar/>
          </div>
      </div>
      <div className="home__body">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="hjh" />
        <div className="home__inputcontainer">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
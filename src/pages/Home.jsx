

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/icons-material/AccountCircle';
import './Home.css'
import Search from '../components/Search';
import { Box, Button, Modal } from '@mui/material';
import ModalIcon from '../components/ModalIcon';


const Home = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);

  }

  return (
    <>
       <main id='modal__div'>

       
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={{
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,.87)',
          color: 'white',
          top: '300px',
          right: '-150px',
          borderRadius: '0.5rem',
          transform: 'translate(-50%, -50%)',
          width: 350,
          maxHeight: 450,
          overflowY: 'scroll',
          border: '1px solid #000',
          p: 4
        }}>
          <div style={{color: 'white'}}>
             <ModalIcon/>
          </div>
        </Box>

      </Modal>
      </main>
      <div className='home'>

        <div className="home__header">
          <div className="header__left">
            <Link to='/about'>About</Link>
          </div>
          <div className="header__right">
            <a href='https://mail.google.com/mail/u/0/#inbox'>Gmail</a>
            <a href='https://www.google.com/search?q=images'>Images</a>
            <Button onClick={(e) => setOpen(true)}><AppsIcon /></Button>
            <Avatar sx={{ fontSize: '40px' }} />
          </div>
        </div>
        <div className="home__body">
          <img draggable="false" src="/google.svg" alt="Google img" />
          <div className="home__inputcontainer">
            <Search />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
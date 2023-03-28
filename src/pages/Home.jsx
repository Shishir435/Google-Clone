

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/icons-material/AccountCircle';
import './Home.css'
import Search from '../components/Search';
import { Box, Button, Modal } from '@mui/material';


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
          <h2>Hello modal</h2>
          <p>lorrem10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptas.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem soluta ipsam temporibus officia repellendus aspernatur a earum, quas incidunt aut, fuga ipsa ipsum consequuntur, dolores cum ratione perspiciatis non suscipit.
          Vitae, exercitationem recusandae quod repudiandae ullam sequi eveniet quas illo repellat. Alias facilis rem deserunt sapiente, expedita similique laborum obcaecati laudantium suscipit commodi voluptas nemo quo ea magni odit exercitationem.
          Fugiat facilis consequuntur architecto, obcaecati blanditiis, quod nesciunt accusamus odio fuga dignissimos dicta rem quae, inventore quas. Iure harum, qui impedit, minima autem delectus sint reiciendis consequatur illum quia corrupti?
          A odio modi sint adipisci cum, labore iure quisquam perferendis maiores recusandae, corrupti quidem consequatur cumque error sunt, saepe eveniet accusamus illum quam quas voluptatibus magni illo! Ipsa, quasi esse!
          Sit, deleniti deserunt fuga laudantium optio asperiores placeat dolorum, facere fugiat molestiae a nihil quod tempora quaerat facilis dolor voluptates voluptatibus! Animi ut voluptates amet libero aspernatur laudantium modi maiores.
          Ducimus, quae eos dolore suscipit omnis veritatis, amet in non commodi repellat quasi dolorum molestias nam. Soluta provident quisquam, beatae quo suscipit recusandae sapiente veniam! Aperiam qui odit nemo voluptatum?
          Quasi perspiciatis, voluptate iure ullam veritatis dolores quibusdam asperiores ea velit ex possimus nemo perferendis rem, numquam ducimus suscipit dolore voluptatem neque quisquam qui. Dolores non soluta cumque blanditiis consequuntur!
          Inventore dolore deserunt consequuntur doloribus sed hic fuga incidunt, dolor dolores totam fugit! Minima iste optio quam quo quod, exercitationem necessitatibus cumque autem repudiandae odio? Voluptatem modi soluta neque nihil!
          Expedita animi corrupti, officia ut maiores magni magnam est nostrum iure rem suscipit itaque odit, dolorum qui doloremque tenetur pariatur necessitatibus quos dicta porro, explicabo dolores veritatis quia quae. Molestiae.
          Dignissimos voluptatem dicta odio nulla nobis quod illum necessitatibus, libero labore explicabo mollitia facere minima id aperiam consequatur aut laboriosam culpa quasi fugiat pariatur unde itaque aliquam. Laborum, doloribus fuga!
         

          </p>
          <p>lorrem10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptas.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem soluta ipsam temporibus officia repellendus aspernatur a earum, quas incidunt aut, fuga ipsa ipsum consequuntur, dolores cum ratione perspiciatis non suscipit.
          Vitae, exercitationem recusandae quod repudiandae ullam sequi eveniet quas illo repellat. Alias facilis rem deserunt sapiente, expedita similique laborum obcaecati laudantium suscipit commodi voluptas nemo quo ea magni odit exercitationem.
          Fugiat facilis consequuntur architecto, obcaecati blanditiis, quod nesciunt accusamus odio fuga dignissimos dicta rem quae, inventore quas. Iure harum, qui impedit, minima autem delectus sint reiciendis consequatur illum quia corrupti?
          A odio modi sint adipisci cum, labore iure quisquam perferendis maiores recusandae, corrupti quidem consequatur cumque error sunt, saepe eveniet accusamus illum quam quas voluptatibus magni illo! Ipsa, quasi esse!
          Sit, deleniti deserunt fuga laudantium optio asperiores placeat dolorum, facere fugiat molestiae a nihil quod tempora quaerat facilis dolor voluptates voluptatibus! Animi ut voluptates amet libero aspernatur laudantium modi maiores.
          Ducimus, quae eos dolore suscipit omnis veritatis, amet in non commodi repellat quasi dolorum molestias nam. Soluta provident quisquam, beatae quo suscipit recusandae sapiente veniam! Aperiam qui odit nemo voluptatum?
          Quasi perspiciatis, voluptate iure ullam veritatis dolores quibusdam asperiores ea velit ex possimus nemo perferendis rem, numquam ducimus suscipit dolore voluptatem neque quisquam qui. Dolores non soluta cumque blanditiis consequuntur!
          Inventore dolore deserunt consequuntur doloribus sed hic fuga incidunt, dolor dolores totam fugit! Minima iste optio quam quo quod, exercitationem necessitatibus cumque autem repudiandae odio? Voluptatem modi soluta neque nihil!
          Expedita animi corrupti, officia ut maiores magni magnam est nostrum iure rem suscipit itaque odit, dolorum qui doloremque tenetur pariatur necessitatibus quos dicta porro, explicabo dolores veritatis quia quae. Molestiae.
          Dignissimos voluptatem dicta odio nulla nobis quod illum necessitatibus, libero labore explicabo mollitia facere minima id aperiam consequatur aut laboriosam culpa quasi fugiat pariatur unde itaque aliquam. Laborum, doloribus fuga!
         

          </p>
          <p>lorrem10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptas.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem soluta ipsam temporibus officia repellendus aspernatur a earum, quas incidunt aut, fuga ipsa ipsum consequuntur, dolores cum ratione perspiciatis non suscipit.
          Vitae, exercitationem recusandae quod repudiandae ullam sequi eveniet quas illo repellat. Alias facilis rem deserunt sapiente, expedita similique laborum obcaecati laudantium suscipit commodi voluptas nemo quo ea magni odit exercitationem.
          Fugiat facilis consequuntur architecto, obcaecati blanditiis, quod nesciunt accusamus odio fuga dignissimos dicta rem quae, inventore quas. Iure harum, qui impedit, minima autem delectus sint reiciendis consequatur illum quia corrupti?
          A odio modi sint adipisci cum, labore iure quisquam perferendis maiores recusandae, corrupti quidem consequatur cumque error sunt, saepe eveniet accusamus illum quam quas voluptatibus magni illo! Ipsa, quasi esse!
          Sit, deleniti deserunt fuga laudantium optio asperiores placeat dolorum, facere fugiat molestiae a nihil quod tempora quaerat facilis dolor voluptates voluptatibus! Animi ut voluptates amet libero aspernatur laudantium modi maiores.
          Ducimus, quae eos dolore suscipit omnis veritatis, amet in non commodi repellat quasi dolorum molestias nam. Soluta provident quisquam, beatae quo suscipit recusandae sapiente veniam! Aperiam qui odit nemo voluptatum?
          Quasi perspiciatis, voluptate iure ullam veritatis dolores quibusdam asperiores ea velit ex possimus nemo perferendis rem, numquam ducimus suscipit dolore voluptatem neque quisquam qui. Dolores non soluta cumque blanditiis consequuntur!
          Inventore dolore deserunt consequuntur doloribus sed hic fuga incidunt, dolor dolores totam fugit! Minima iste optio quam quo quod, exercitationem necessitatibus cumque autem repudiandae odio? Voluptatem modi soluta neque nihil!
          Expedita animi corrupti, officia ut maiores magni magnam est nostrum iure rem suscipit itaque odit, dolorum qui doloremque tenetur pariatur necessitatibus quos dicta porro, explicabo dolores veritatis quia quae. Molestiae.
          Dignissimos voluptatem dicta odio nulla nobis quod illum necessitatibus, libero labore explicabo mollitia facere minima id aperiam consequatur aut laboriosam culpa quasi fugiat pariatur unde itaque aliquam. Laborum, doloribus fuga!
         

          </p>
          <p>lorrem10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptas.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem soluta ipsam temporibus officia repellendus aspernatur a earum, quas incidunt aut, fuga ipsa ipsum consequuntur, dolores cum ratione perspiciatis non suscipit.
          Vitae, exercitationem recusandae quod repudiandae ullam sequi eveniet quas illo repellat. Alias facilis rem deserunt sapiente, expedita similique laborum obcaecati laudantium suscipit commodi voluptas nemo quo ea magni odit exercitationem.
          Fugiat facilis consequuntur architecto, obcaecati blanditiis, quod nesciunt accusamus odio fuga dignissimos dicta rem quae, inventore quas. Iure harum, qui impedit, minima autem delectus sint reiciendis consequatur illum quia corrupti?
          A odio modi sint adipisci cum, labore iure quisquam perferendis maiores recusandae, corrupti quidem consequatur cumque error sunt, saepe eveniet accusamus illum quam quas voluptatibus magni illo! Ipsa, quasi esse!
          Sit, deleniti deserunt fuga laudantium optio asperiores placeat dolorum, facere fugiat molestiae a nihil quod tempora quaerat facilis dolor voluptates voluptatibus! Animi ut voluptates amet libero aspernatur laudantium modi maiores.
          Ducimus, quae eos dolore suscipit omnis veritatis, amet in non commodi repellat quasi dolorum molestias nam. Soluta provident quisquam, beatae quo suscipit recusandae sapiente veniam! Aperiam qui odit nemo voluptatum?
          Quasi perspiciatis, voluptate iure ullam veritatis dolores quibusdam asperiores ea velit ex possimus nemo perferendis rem, numquam ducimus suscipit dolore voluptatem neque quisquam qui. Dolores non soluta cumque blanditiis consequuntur!
          Inventore dolore deserunt consequuntur doloribus sed hic fuga incidunt, dolor dolores totam fugit! Minima iste optio quam quo quod, exercitationem necessitatibus cumque autem repudiandae odio? Voluptatem modi soluta neque nihil!
          Expedita animi corrupti, officia ut maiores magni magnam est nostrum iure rem suscipit itaque odit, dolorum qui doloremque tenetur pariatur necessitatibus quos dicta porro, explicabo dolores veritatis quia quae. Molestiae.
          Dignissimos voluptatem dicta odio nulla nobis quod illum necessitatibus, libero labore explicabo mollitia facere minima id aperiam consequatur aut laboriosam culpa quasi fugiat pariatur unde itaque aliquam. Laborum, doloribus fuga!
         

          </p>
          <p>lorrem10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptas.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem soluta ipsam temporibus officia repellendus aspernatur a earum, quas incidunt aut, fuga ipsa ipsum consequuntur, dolores cum ratione perspiciatis non suscipit.
          Vitae, exercitationem recusandae quod repudiandae ullam sequi eveniet quas illo repellat. Alias facilis rem deserunt sapiente, expedita similique laborum obcaecati laudantium suscipit commodi voluptas nemo quo ea magni odit exercitationem.
          Fugiat facilis consequuntur architecto, obcaecati blanditiis, quod nesciunt accusamus odio fuga dignissimos dicta rem quae, inventore quas. Iure harum, qui impedit, minima autem delectus sint reiciendis consequatur illum quia corrupti?
          A odio modi sint adipisci cum, labore iure quisquam perferendis maiores recusandae, corrupti quidem consequatur cumque error sunt, saepe eveniet accusamus illum quam quas voluptatibus magni illo! Ipsa, quasi esse!
          Sit, deleniti deserunt fuga laudantium optio asperiores placeat dolorum, facere fugiat molestiae a nihil quod tempora quaerat facilis dolor voluptates voluptatibus! Animi ut voluptates amet libero aspernatur laudantium modi maiores.
          Ducimus, quae eos dolore suscipit omnis veritatis, amet in non commodi repellat quasi dolorum molestias nam. Soluta provident quisquam, beatae quo suscipit recusandae sapiente veniam! Aperiam qui odit nemo voluptatum?
          Quasi perspiciatis, voluptate iure ullam veritatis dolores quibusdam asperiores ea velit ex possimus nemo perferendis rem, numquam ducimus suscipit dolore voluptatem neque quisquam qui. Dolores non soluta cumque blanditiis consequuntur!
          Inventore dolore deserunt consequuntur doloribus sed hic fuga incidunt, dolor dolores totam fugit! Minima iste optio quam quo quod, exercitationem necessitatibus cumque autem repudiandae odio? Voluptatem modi soluta neque nihil!
          Expedita animi corrupti, officia ut maiores magni magnam est nostrum iure rem suscipit itaque odit, dolorum qui doloremque tenetur pariatur necessitatibus quos dicta porro, explicabo dolores veritatis quia quae. Molestiae.
          Dignissimos voluptatem dicta odio nulla nobis quod illum necessitatibus, libero labore explicabo mollitia facere minima id aperiam consequatur aut laboriosam culpa quasi fugiat pariatur unde itaque aliquam. Laborum, doloribus fuga!
         

          </p>
          <p>lorrem10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptas.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem soluta ipsam temporibus officia repellendus aspernatur a earum, quas incidunt aut, fuga ipsa ipsum consequuntur, dolores cum ratione perspiciatis non suscipit.
          Vitae, exercitationem recusandae quod repudiandae ullam sequi eveniet quas illo repellat. Alias facilis rem deserunt sapiente, expedita similique laborum obcaecati laudantium suscipit commodi voluptas nemo quo ea magni odit exercitationem.
          Fugiat facilis consequuntur architecto, obcaecati blanditiis, quod nesciunt accusamus odio fuga dignissimos dicta rem quae, inventore quas. Iure harum, qui impedit, minima autem delectus sint reiciendis consequatur illum quia corrupti?
          A odio modi sint adipisci cum, labore iure quisquam perferendis maiores recusandae, corrupti quidem consequatur cumque error sunt, saepe eveniet accusamus illum quam quas voluptatibus magni illo! Ipsa, quasi esse!
          Sit, deleniti deserunt fuga laudantium optio asperiores placeat dolorum, facere fugiat molestiae a nihil quod tempora quaerat facilis dolor voluptates voluptatibus! Animi ut voluptates amet libero aspernatur laudantium modi maiores.
          Ducimus, quae eos dolore suscipit omnis veritatis, amet in non commodi repellat quasi dolorum molestias nam. Soluta provident quisquam, beatae quo suscipit recusandae sapiente veniam! Aperiam qui odit nemo voluptatum?
          Quasi perspiciatis, voluptate iure ullam veritatis dolores quibusdam asperiores ea velit ex possimus nemo perferendis rem, numquam ducimus suscipit dolore voluptatem neque quisquam qui. Dolores non soluta cumque blanditiis consequuntur!
          Inventore dolore deserunt consequuntur doloribus sed hic fuga incidunt, dolor dolores totam fugit! Minima iste optio quam quo quod, exercitationem necessitatibus cumque autem repudiandae odio? Voluptatem modi soluta neque nihil!
          Expedita animi corrupti, officia ut maiores magni magnam est nostrum iure rem suscipit itaque odit, dolorum qui doloremque tenetur pariatur necessitatibus quos dicta porro, explicabo dolores veritatis quia quae. Molestiae.
          Dignissimos voluptatem dicta odio nulla nobis quod illum necessitatibus, libero labore explicabo mollitia facere minima id aperiam consequatur aut laboriosam culpa quasi fugiat pariatur unde itaque aliquam. Laborum, doloribus fuga!
         

          </p>
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
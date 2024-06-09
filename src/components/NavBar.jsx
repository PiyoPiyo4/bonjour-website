import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
// import logo from '../assets/BONJOUR_WHITE.png'
import { useMediaQuery } from '@mui/material';

import '../fonts/fonts.css';

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

function Navbar(props) {
  const navigate = useNavigate();
  const mobileScreen = useMediaQuery('(max-width: 850px)');
  return (  
    <TransparentAppBar position="absolute" >
      <Toolbar>
        <div style={{ flexGrow: 1 }} >
          <img src={props.logo} style={{ height: mobileScreen ? '40px' : '80px', cursor: 'pointer' }} alt='LogoBonjour' onClick={() => navigate('/')}/>
        </div>
        <SocialIcon url="https://www.instagram.com/bonjour.ent/" fgColor={props.color} bgColor="transparent" target="_blank" rel="noopener noreferrer"/>
        <Button color="primary" 
          style={{ color: props.color, fontWeight: 'bold', fontSize: '20px', fontFamily: "'Kanit', sans-serif"}}
          onClick={() => navigate('/YOL')}
          disableRipple
        >Artists</Button>
        <Button color="primary" 
          style={{ color: props.color, fontWeight: 'bold', fontSize: '20px', fontFamily: "'Kanit', sans-serif" }}
          onClick={() => navigate('/about-us')} 
          disableRipple
        >About Us</Button>
      </Toolbar>
  </TransparentAppBar>
  );
}
  
export default Navbar;
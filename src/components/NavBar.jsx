import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../assets/Logo.png'
import '../fonts/fonts.css';

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

function Navbar(props) {
  const navigate = useNavigate();

  return (  
    <TransparentAppBar position="absolute" >
      <Toolbar>
        <div style={{ flexGrow: 1 }} >
          <img src={logo} style={{ height: '40px', cursor: 'pointer' }} alt='LogoBonjour' onClick={() => navigate('/')}/>
        </div>
        <SocialIcon url="https://www.instagram.com/bonjour.ent/" fgColor={props.color} bgColor="transparent" target="_blank" rel="noopener noreferrer"/>
        <Button color="primary" 
          style={{ fontFamily: 'HFBronte', color: props.color, fontWeight: 'bold', fontSize: '20px' }}
          onClick={() => navigate('/YOL')}  
        >Artists</Button>
      </Toolbar>
  </TransparentAppBar>
  );
}
  
export default Navbar;
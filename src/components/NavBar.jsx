import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../assets/Logo.png'
import '../fonts/fonts.css';

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  // paddingBottom: 50,
}));

// const useStyles = makeStyles((theme) => ({
//   buttons: (props) => ({
//     color: props.color,
//     fontFamily: 'clorin',
//   }),
// }));

function Navbar(props) {
  // const classes = useStyles(props);

  return (  
    <TransparentAppBar position="fixed">
      <Toolbar>
        <Link to ='/' style={{ flexGrow: 1 }} >
          <img src={logo} style={{ height: '40px'}} alt='LogoBonjour' />
        </Link>
        <SocialIcon url="https://www.instagram.com/bonjour.ent/" fgColor={props.color} bgColor="transparent" target="_blank" rel="noopener noreferrer"/>
        <Button component={Link} to="/Artists" color="primary"  style={{ fontFamily: 'HFBronte', color: props.color, fontWeight: 'bold', fontSize: '20px' }}>Artists</Button>
        <Button component={Link} to="/about" color="primary" style={{ fontFamily: 'HFBronte', color: props.color, fontWeight: 'bold', fontSize: '20px' }}>About</Button>
        {/* <Button component={Link} to="/contact" color="primary" style={{ fontFamily: 'HFBronte', color: props.color, fontWeight: 'bold' }}>Contact</Button> */}
      </Toolbar>
  </TransparentAppBar>
  );
}
  
export default Navbar;
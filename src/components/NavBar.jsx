import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { makeStyles } from '@mui/styles';
// import { Link } from 'react-router-dom';
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
  const navigate = useNavigate();
  // const classes = useStyles(props);

  return (  
    <TransparentAppBar position="absolute" >
      <Toolbar>
        {/* <Link to ='/' style={{ flexGrow: 1 }} > */}
        <div style={{ flexGrow: 1 }} >
          <img src={logo} style={{ height: '40px', cursor: 'pointer' }} alt='LogoBonjour' onClick={() => navigate('/')}/>
        </div>
        {/* </Link> */}
        <SocialIcon url="https://www.instagram.com/bonjour.ent/" fgColor={props.color} bgColor="transparent" target="_blank" rel="noopener noreferrer"/>
        <Button color="primary" 
          style={{ fontFamily: 'HFBronte', color: props.color, fontWeight: 'bold', fontSize: '20px' }}
          onClick={() => navigate('/YOL')}  
        >Artists</Button>
        {/* <Button component={Link} to="/about" color="primary" style={{ fontFamily: 'HFBronte', color: props.color, fontWeight: 'bold', fontSize: '20px' }}>About</Button> */}
        {/* <Button component={Link} to="/contact" color="primary" style={{ fontFamily: 'HFBronte', color: props.color, fontWeight: 'bold' }}>Contact</Button> */}
      </Toolbar>
  </TransparentAppBar>
  );
}
  
export default Navbar;
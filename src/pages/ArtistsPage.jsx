import React from 'react';
// import Navbar from '../components/Navbar';
import Navbar from '../components/NavBar';
import pic from '../assets/DSC08115-final2.jpg'
import pic2 from '../assets/DSC08254-final3.jpg'
import { SocialIcon } from 'react-social-icons';
import '../fonts/fonts.css';
import './styles/ArtistsPageCSS.css'

const AristsPage = () => {

  return (<>
    <Navbar color="black" bgColor="white"/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , marginTop: '50px'}}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'HFBronte', fontWeight: '700' }}>YODMG</h1>
        <div className='container'>
          <img
            src={pic}
            alt="YODMG"
            className='pic pic1'
          />
          <img
            src={pic2}
            alt="YODMG"
            className='pic pic2'
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%', margin: '0 auto', marginTop: '25px'}}>
          <SocialIcon url="https://www.instagram.com/bonjour.ent/" fgColor="white" bgColor='#000000' target="_blank" rel="noopener noreferrer"/>
          <SocialIcon url="https://www.youtube.com/@ThisIsYolid" fgColor="white" bgColor='#000000' target="_blank" rel="noopener noreferrer"/>
          <SocialIcon url="https://www.tiktok.com/@yodmg" bgColor='#fffff' target="_blank" rel="noopener noreferrer" network='tiktok' style={{ background:'transparent' }} />
        </div>
        <h2>Latest Release: SHOWDOWN</h2>
        {/* <h1>ABOUT YODMG</h1> */}
      </div>
      <footer style={{ position: 'absolute', bottom: 0, left: 5, width: '95%', backgroundColor: 'transparent', color: 'black', fontFamily: 'HFBronte', overflow: 'hidden' }}>
      <p>This is the transparent and absolutely positioned footer.</p>
    </footer>
    </div>
  </>)
}

export default AristsPage;
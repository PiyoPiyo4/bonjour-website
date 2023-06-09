import React from 'react';
// import Navbar from '../components/Navbar';
import VideoSlide from '../components/VideoSlide';
import '../fonts/fonts.css';
import './styles/MainPageCSS.css'

const HomePage = () => {
  return (<>
  <div>
    {/* <Navbar className={styles.box}/> */}
    <VideoSlide/>
    {/* <h1> Bonjour </h1> */}
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'transparent',
      color: 'white',
      fontFamily: 'HFBronte',
      overflow: 'hidden',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // padding: '10px 0',
      fontSize: '14px',
      
      // Mobile styles
      '@media(max-width: 768px)': {
        position: 'static',
        padding: '20px',
        textAlign: 'center',
      }
    }}>
      <p>&copy; BONJOUR ENTERTAINMENT 2019</p>
    </footer>
  </div>
  </>)
}

export default HomePage;
import React from 'react';
// import Navbar from '../components/Navbar';
import VideoSlide from '../components/VideoSlide';
import '../fonts/fonts.css';

const HomePage = () => {
  return (<>
  <div>
    {/* <Navbar className={styles.box}/> */}
    <VideoSlide/>
    {/* <h1> Bonjour </h1> */}
    <footer style={{  position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'transparent',
      color: 'black',
      fontFamily: 'HFBronte',
      overflow: 'hidden',
      textAlign: 'center',
      padding: '10px 0',
      fontSize: '14px',
      zIndex: 999,}}>
      <p>&copy; BONJOUR ENTERTAIMENT 2019</p>
    </footer>
  </div>
  </>)
}

export default HomePage;
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
    <footer style={{ position: 'absolute', bottom: 0, left: 5, width: '95%', backgroundColor: 'transparent', color: 'white', fontFamily: 'HFBronte' }}>
      <p>&copy; BONJOUR ENTERTAIMENT 2019</p>
    </footer>
  </div>
  </>)
}

export default HomePage;
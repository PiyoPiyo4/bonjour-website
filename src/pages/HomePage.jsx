import React from 'react';
import loadable from '@loadable/component'
import '../fonts/fonts.css';
import './styles/MainPageCSS.css'

const VideoSlide = loadable(() => import('../components/VideoSlide'))
const HomePage = () => {
  return (<>
  <div>
    <VideoSlide/>
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'transparent',
      color: 'white',
      overflow: 'hidden',
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
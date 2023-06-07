import {React, useEffect, useRef, useState} from 'react';
import styles from './styles/VideoSlideCSS.module.css'
import Flickity from 'react-flickity-component'
import VideoPlayer from './VideoPlayer';
import { Button } from '@mui/material';
// import Navbar from './Navbar.jsx';
import Navbar from './NavBar';

import IconButton from '@mui/material/IconButton';
import { SvgIcon } from '@mui/material';

const VideoSlide = () => {
  const flickityRef = useRef(null);

  const flickityOptions = {
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 6000,
    pauseAutoPlayOnHover: false,
  }


  const nextSlide = () => {
    // console.log(flickityRef.current.selectedIndex)
    if (flickityRef.current) {
      flickityRef.current.next();
    } else {
      console.log('Flickity ref is not assigned yet.');
    }
  };

  const CustomArrowIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10l5 5 5-5z" />
    </SvgIcon>
  )

  return (
    <div 
      className={styles.maindiv}
      >
      <Navbar color="white"/>
      <Flickity
      flickityRef={(c) => (flickityRef.current = c)}
      className={styles.carousel}
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      >
          <div 
            style={{ 
              backgroundImage: `url("https://i.ytimg.com/vi/RBnvCgOg0js/maxresdefault.jpg")`,
            }} 
            className={styles.carouselCell}
            >
            <div className={styles.videoContainer}>
              <VideoPlayer videoId='RBnvCgOg0js' />
            </div>
        </div>
        <div
          style={{ 
            backgroundImage: `url("https://i.ytimg.com/vi/wJnh407njNw/maxresdefault.jpg")`,
          }} 
          className= {styles.carouselCell} 
          >
          <div className={styles.videoContainer}>
            <VideoPlayer videoId='wJnh407njNw' className= {styles.carouselCell} />
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default VideoSlide;
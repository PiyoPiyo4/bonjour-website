import {React, useRef} from 'react';
import styles from './styles/VideoSlideCSS.module.css'
import Flickity from 'react-flickity-component'
// import VideoPlayer from './VideoPlayer';
import loadable from '@loadable/component'
// import { Button } from '@mui/material';
// import Navbar from './Navbar.jsx';
import Navbar from './NavBar';

// import { SvgIcon } from '@mui/material';
const VideoPlayer = loadable(() => import('./VideoPlayer'))
const VideoSlide = () => {
  const flickityRef = useRef(null);
  // const [isDragging, setIsDragging] = useState(false);

  const flickityOptions = {
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 6000,
    pauseAutoPlayOnHover: false,
  }
  // const handleClick = (id) => {
  //   const url = `https://youtu.be/${id}`; // Replace with your desired URL
  //   // console.log(flickityRef.current.isPointerDown)
  //   console.log(flickityRef.current.isDragging)
  //   // if(!flickityRef.current.isDragging) {
  //   //   console.log(flickityRef.current.selectedIndex)
  //   //   // window.open(url, '_blank');
  //   // }
  // };
  // console.log(flickityRef.current.isPointerDown)

  // flickityRef.on('staticClick', (e, p ,index) => {
  //   if(!flickityRef.current.isDragging) {
  //     const url = `https://example.com/${index.dataset.id}`;
  //     window.open(url, '_blank');
  //     // console.log(flickityRef.current)
  //   }
  // })

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
            backgroundImage: `url("https://i.ytimg.com/vi/12zWZsSzo2E/maxresdefault.jpg")`,
          }} 
          className= {styles.carouselCell}
          >
          <div className={styles.videoContainer}>
            <VideoPlayer videoId='12zWZsSzo2E' className= {styles.carouselCell} />
          </div>
        </div>
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
        <div
          style={{ 
            backgroundImage: `url("https://i.ytimg.com/vi/5x97V6i_Fd0/maxresdefault.jpg")`,
          }} 
          className= {styles.carouselCell}
          >
          <div className={styles.videoContainer}>
            <VideoPlayer videoId='5x97V6i_Fd0' className= {styles.carouselCell} />
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default VideoSlide;
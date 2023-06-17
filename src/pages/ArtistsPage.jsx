import React from 'react';
// import Navbar from '../components/Navbar';
import Navbar from '../components/NavBar';
import pic from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
// import bgPic from '../assets/bgBonjour.jpeg'
// import bgVid from '../assets/YODMG.mp4'
import { SocialIcon } from 'react-social-icons';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import '../fonts/fonts.css';
import './styles/ArtistsPageCSS.css'

const AristsPage = () => {

  return (<>
  <div className='main-div'>
    <Navbar color="black" bgColor="white"/>
    {/* <div className='vidBg'> */}
    {/* <video className='vidBg' autoPlay loop muted playsinline webkit-playsinline> 
      <source src={bgVid} type="video/mp4"/>
    </video> */}
    {/* </div> */}
    {/* <div className='vids'></div> */}
    {/* <div style={{ objectFit: 'cover', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <img src={bgPic} />
    </div> */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , marginTop: '50px'}}>
      <div style={{ textAlign: 'center', position: 'absolute' }}>
        <h1 style={{ fontFamily: 'HFBronte', fontWeight: '700'}}>YODMG</h1>
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
        <div style={{ fontFamily: 'HFBronte' }}>
          <div className="now-streaming">
            <h2 className="streaming-heading">Music Video out now! - SHOWDOWN</h2>
            <iframe width="100%" height='200vh' src="https://www.youtube.com/embed/12zWZsSzo2E?autoplay=1" title="YouTube video player"></iframe>
            <ul className="streaming-list">
              <li>
                <a
                  href="https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3DAFCE6363-0934-485A-868B2574A503A1FF/destination:https://open.spotify.com/track/2tOM1Rb1vYkKuk7QDkDQNi?si=Of33edkgTG-P2gAoLZzAyQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="streaming-link spotify"
                >
                  <FaSpotify className="streaming-icon" />
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://music.apple.com/au/album/showdown-feat-garry-armando/1686889102?i=1686889103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="streaming-link apple-music"
                >
                  <FaApple className="streaming-icon" />
                  Apple Music
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/KCOOqs3_zzY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="streaming-link youtube-music"
                >
                  <FaYoutube className="streaming-icon" />
                  YouTube Music
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <h2>Latest Release: SHOWDOWN</h2> */}
        {/* <h1>ABOUT YODMG</h1> */}
      </div>
    </div>
    </div>
    <div >
      <footer className='footer--pin'>
        &copy; BONJOUR ENTERTAINMENT 2019
      </footer>
    </div>
  </>)
}

export default AristsPage;
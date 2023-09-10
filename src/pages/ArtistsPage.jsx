import React from 'react';
import pic from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loadable from '@loadable/component'
import { faYoutube, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import '../fonts/fonts.css';
import './styles/ArtistsPageCSS.css'
import YolData from "../artistData/YOL.json"

const NavBar = loadable(() => import('../components/NavBar'))
const SongList = loadable(() => import('../components/ArtistSongsList'))
const cards = YolData

const AristsPage = () => {

  return (<>
  <div className='main-div'>
    <NavBar color="black" bgColor="white"/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , marginTop: '50px', flexWrap: 'wrap'}}>
      <div style={{ textAlign: 'center', position: 'absolute' }} id='yolContain'>
        <h1 style={{ fontFamily: 'HFBronte', fontWeight: '700'}}>YOL</h1>
        <div id='container'>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px', margin: '0 auto', marginTop: '25px', marginBottom: '25px'}}>
          <a href="https://www.instagram.com/yolmusic/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} fontSize='30px'/> </a>
          <a href="https://www.tiktok.com/@yolmusic" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTiktok} fontSize='30px'/> </a>
          <a href="https://www.youtube.com/@ThisIsYolid" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faYoutube} fontSize='30px'/> </a>
        </div>
        <SongList cards={cards}/>
      </div>
    </div>
    </div>
    
    <div>
      <footer className='footer--pin'>
        &copy; BONJOUR ENTERTAINMENT 2019
      </footer>
    </div>
  </>)
}

export default AristsPage;
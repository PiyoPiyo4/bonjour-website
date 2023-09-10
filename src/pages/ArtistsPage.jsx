import React from 'react';
import Navbar from '../components/NavBar';
import pic from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import { Card, CardGroup, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube, faApple, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import '../fonts/fonts.css';
import './styles/ArtistsPageCSS.css'
import YolData from "../artistData/YOL.json"


const AristsPage = () => {
  const cards = YolData
  const icons = [faSpotify, faApple, faYoutube, faYoutube]

  return (<>
  <div className='main-div'>
    <Navbar color="black" bgColor="white"/>
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
        <div id="cardContain">
          <CardGroup id="cardGroup" >
            {cards.map((card) => (
              <Card key={card.title} id='cardItem'>
                <Card.Img src={card.image} id='cardImage' />
                <Card.Body>
                  <Card.Title id='cardTitle'>{card.title}</Card.Title>
                    <Dropdown id='mainDropdown' drop='down-centered'>
                      <Dropdown.Toggle variant="success" id="dropdownToggle" color='#d1aead'> Streams </Dropdown.Toggle>
                      <Dropdown.Menu id="dropdownMenu" >
                        {card.links.map((link, i) => (
                          <Dropdown.Item key={link.text} href={link.url} target="_blank">
                            <FontAwesomeIcon icon={icons[i]} fontSize='25px' fixedWidth /> {link.text}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </div>
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
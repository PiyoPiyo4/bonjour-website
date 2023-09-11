import React from 'react';
import { Card, CardGroup, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube, faApple} from '@fortawesome/free-brands-svg-icons'
import './styles/ArtistSongsListCSS.css'

const AristSongsList = ({cards, type}) => {
  const icons = [faSpotify, faApple, faYoutube, faYoutube]
  return(
  <div id="cardContain">
    <CardGroup id="cardGroup" >
      {cards.map((card) => {
        return card.text === type ?
          (<Card key={card.title} id='cardItem'>
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
          </Card>)
          : null
      })}
    </CardGroup>
  </div>
  )
}
export default AristSongsList;
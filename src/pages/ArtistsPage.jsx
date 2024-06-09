import React from 'react';
import pic from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loadable from '@loadable/component'
import { faYoutube, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import '../fonts/fonts.css';
import './styles/ArtistsPageCSS.css'
import YolData from "../artistData/YOL.json"
import logo from '../assets/BONJOUR_ORI.png'
import background from '../assets/bgBonjour.jpeg'

import { Container, Box, Typography, Grid, IconButton, Divider } from '@mui/material';

const NavBar = loadable(() => import('../components/NavBar'))
const SongList = loadable(() => import('../components/ArtistSongsList'))
const cards = YolData

const AristsPage = () => {
  return (<div style={{backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  fontFamily: "'Kanit', sans-serif",
  display: 'flex',
  flexDirection: 'column',}}>
    <NavBar color="black" bgColor="white" logo={logo} />
    <Box sx={{ flex: 1, overflowY: 'auto', marginTop: '85px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" gutterBottom textAlign='center' fontFamily='inherit'>
              YOL
            </Typography>
            <Grid container justifyContent="center" spacing={1}>
              <Box sx={{ height: '300px', width: '300px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto'}}>
                <img src={pic} alt="YOL" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
              </Box>
            </Grid>
            <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 2, marginBottom: 2 }}>
              <Grid item>
                <IconButton href="https://www.instagram.com/yolmusic/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} fontSize='30px'/>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://www.tiktok.com/@yolmusic" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} fontSize='30px'/>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://www.youtube.com/@ThisIsYolid" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} fontSize='30px'/>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom textAlign='center' fontFamily='inherit'>
              Singles
            </Typography>
            <SongList cards={cards} type='singles'/>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom textAlign='center' fontFamily='inherit'>
              Albums
            </Typography>
            <SongList cards={cards} type='albums'/>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{marginTop: 'auto', // Push footer to bottom
                padding: '1rem', // Use rem unit for spacing
                textAlign: 'center',}}>
        <Typography variant="body2" color="text.secondary">
          &copy; BONJOUR ENTERTAINMENT 2019
        </Typography>
      </Box>
  </div>)
}

export default AristsPage;
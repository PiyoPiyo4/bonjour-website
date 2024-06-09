import React from 'react';
import loadable from '@loadable/component'
import logo from '../assets/BONJOUR_ORI.png'
import background from '../assets/bgBonjour.jpeg'
import {Box, Typography, Grid } from '@mui/material';

const NavBar = loadable(() => import('../components/NavBar'))

const AboutUsPage = () => {

    return (<div style={{backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    fontFamily: "'Kanit', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'}}>
      <NavBar color="black" bgColor="white" logo={logo} />
      <Box sx={{ flex: 1, overflowY: 'auto', marginTop: '100px', ml : 5, mr: 5}}> {/* Content area with overflow handling */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom fontFamily='inherit' textAlign='center'>
              About Us
            </Typography>
            <Typography variant="body1" fontFamily='inherit'>
              {/* Insert your "About" content here */}
              A creative space where we share everything from our artists' work to tips and tricks on starting a career in the entertainment industry. We firmly believe that every talent deserves recognition equally and be the best version of themselves. 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom fontFamily='inherit' textAlign='center'>
              Values
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3}> 
                <Typography variant="h5" fontFamily='inherit' textAlign='center'>Empowerment</Typography>
                <Typography variant="body1" fontFamily='inherit' textAlign='center'> 
                  We provide a platform where talents showcase the best version of themselves. Every individual deserves recognition and 
                  celebration of their own art.
                </Typography>
              </Grid>
              <Grid item xs={3}> 
                <Typography variant="h5" fontFamily='inherit' textAlign='center'>Authenticity</Typography>
                <Typography variant="body1" fontFamily='inherit' textAlign='center'>
                  We value authenticity and integrity in all our interactions. Our commitment to honesty and transparency ensures that our 
                  artists and audience alike can trust us to uphold our values.
                </Typography>
              </Grid>
              <Grid item xs={3}> 
                <Typography variant="h5" fontFamily='inherit' textAlign='center'>Inclusivity</Typography>
                <Typography variant="body1" fontFamily='inherit' textAlign='center'>
                  We champion diversity and inclusivity in the entertainment industry. We believe that talent comes in their own uniqueness and should be celebrated equally. 
                </Typography>
              </Grid>
              <Grid item xs={3}> 
                <Typography variant="h5" fontFamily='inherit' textAlign='center'>Creativity</Typography>
                <Typography variant="body1" fontFamily='inherit' textAlign='center'>
                  We foster a creative space where innovation thrives and boundaries are pushed. From showcasing our artists' work to sharing valuable insights and tips, 
                  creativity knows no bounds at Bonjour Entertainment.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom fontFamily='inherit' textAlign='center'>
              Vision
            </Typography>
            <Typography variant="body1" fontFamily='inherit' >
              To be one of your kind hero by creating a creative space for artists.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom fontFamily='inherit' textAlign='center'>
              Mission
            </Typography>
            <Typography variant="body1" fontFamily='inherit'>
              Be Your Own Hero : Embrace your individuality and be the main character of your own creative journey.
            </Typography>
            <Typography variant="body1" fontFamily='inherit'>
              Grow Together : every artist's success contributes to the flourishing of the entire creative landscape. Together, we rise.
            </Typography>
            <Typography variant="body1" fontFamily='inherit'>
              Rebellious Spirit : Go against the norm. We challenge conventions, defy expectations, and pioneer new, uncharted territories.
            </Typography>
            <Typography variant="body1" fontFamily='inherit'>
              Exploration : Always seeking new horizons in the industry. We encourage artists to experiment, evolve, and redefine their art.
            </Typography>
            <Typography variant="body1" fontFamily='inherit'>
              Breaking Stereotypes : Dedicated to shattering stereotypes and dismantling the biases that have held back countless artists.
            </Typography>
            <Typography variant="body1" fontFamily='inherit'>
              Embrace the Uniqueness : We celebrate diversity and uniqueness. We provide a platform where every artist is valued equally.
            </Typography>
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

export default AboutUsPage;
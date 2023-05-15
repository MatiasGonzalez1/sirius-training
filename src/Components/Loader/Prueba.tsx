import React from 'react';
// import { Container, Grid } from '@mui/system';
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import img from '../../assets/img/pikapika.png';
import './loader.css';
import { Typography, Grid } from '@mui/material';

const Prueba = () => {
  return (
     <Grid sx={{textAlign: 'center', mt:'30px', height:'100vh', flexDirection:'column'}} >
      <Grid>
        <img className='loaderImg' src={img} alt='pikachu-img'/>
      </Grid>
      <Typography variant='h2' sx={{color: 'white'}}>Pika pi?</Typography>
      <CircularProgress color="primary" />
     </Grid>
  )
}

export default Prueba;
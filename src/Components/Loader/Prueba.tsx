import React from 'react';
// import { Container, Grid } from '@mui/system';
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import img from '../../assets/img/pikapika.png';
import './loader.css';
import { Typography, Grid } from '@mui/material';

const Prueba = () => {
  return (
     <Grid sx={{textAlign: 'center'}} height='100vh'>
      <img className='loaderImg' src={img} alt='pikachu-img'/>
      <CircularProgress color="primary" />
      <Typography variant='h2' sx={{color: 'white'}}>Pika pi?</Typography>
     </Grid>
  )
}

export default Prueba;
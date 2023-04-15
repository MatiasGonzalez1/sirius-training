import React from 'react';
import { Container } from '@mui/system';
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import img from '../../assets/img/pikapika.png';
import './loader.css';
import { Typography } from '@mui/material';

const Prueba = () => {
  return (
     <Container sx={{textAlign: 'center'}}>
      <img className='loaderImg' src={img} alt='pikachu-img'/>
      <CircularProgress color="primary" />
      <Typography variant='h2' sx={{color: 'white'}}>Pika pi?</Typography>
     </Container>
  )
}

export default Prueba;
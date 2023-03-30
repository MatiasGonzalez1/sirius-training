import React from 'react';
import { Container } from '@mui/system';
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import img from '../../assets/img/pikapika.png';
import './loader.css';

const Prueba = () => {
  return (
     <Container sx={{textAlign: 'center'}}>
      <img className='loaderImg' src={img} alt='pikachu-img'/>
      <CircularProgress color="primary" />
      <h1 style={{color: 'white'}}>Pika pi?</h1>
     </Container>
  )
}

export default Prueba
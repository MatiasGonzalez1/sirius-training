import React from 'react';
import { Container } from '@mui/system';
import img from '../../assets/img/pikapika.png';
import './loader.css';

const Prueba = () => {
  return (
     <Container>
      <img className='loaderImg' src={img} alt='pikachu-img'/>
      <h1 style={{color: 'white'}}>Wooooooooooooooooooooooop</h1>
     </Container>
  )
}

export default Prueba
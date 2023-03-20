import React from 'react';
import { Container, Box } from "@mui/material";
import psyduc from '../assets/img/png.png'

const NotFound = () => {
  return (
    <>
        <Box sx={{height: '100vh' }}>
          <h1>404 not found</h1>
          <img src={psyduc} alt='Psyduck'/>
          <h2>Oh no! You confused Psyduc!!</h2>
        </Box>
    </>
  )
}

export default NotFound
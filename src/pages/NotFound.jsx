import React from 'react';
import { Container, Box } from "@mui/material";
import psyduc from '../assets/img/png.png'
import ButtonToHome from '../Components/ButtonToHome';

const NotFound = () => {
  return (
    <>
        <Box sx={{height: '100vh', justifyContent: 'center', display:'flex', flexWrap:'wrap'}}>
          <h1 style={{width:'100%'}}>404 not found</h1>
          <img src={psyduc} alt='Psyduck' style={{width:'300px', height:'400px',justifyContent:'center'}}/>
          <h2 style={{width:'100%'}}>Oh no! You confused Psyduc!!</h2>
          <ButtonToHome/>
        </Box>
    </>
  )
}

export default NotFound
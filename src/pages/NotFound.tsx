import React from 'react';
import {Box, Typography} from "@mui/material";
import psyduc from '../assets/img/png.png';
import ButtonReusable from '../Components/Button/ButtonReusable';
import fondoHover from '../assets/img/gif.gif'

const NotFound = () => {
  return (
    <>
        <Box 
        bgcolor={fondoHover}
        sx={{height: '100vh', justifyContent: 'center', display:'flex', flexWrap:'wrap'}}>
          <Typography variant='h1' sx={{width: '100%', color:'white', textAlign:'center'}}>404 not found</Typography>
          <img src={psyduc} alt='Psyduck' style={{width:'300px', height:'400px',justifyContent:'center'}}/>
          <Typography variant='h2'sx={{width:'100%', color:'white', textAlign:'center'}}>Oh no! You confused Psyduc!!</Typography>
          <ButtonReusable text='Click to Home' hrefButton='/'/>
        </Box>
    </>
  )
}

export default NotFound;
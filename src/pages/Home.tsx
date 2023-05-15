import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import imgHome from '../assets/img/pikachu-home.png'
  
const Home = () => {

  return (
    <Grid container 
    mt={'10px'}
    gap={'30px'}
    textAlign={'center'} 
    justifyContent={"center"} 
    width={'100%'} 
    height={'100vh'}
    flexDirection={"column"}>
      <Typography variant="h4" color="#FFF">¡Welcome Adventurer! ¿Are you ready?</Typography>
      <Grid> 
        <img src={imgHome} alt="pikachu"  width={'40%'}/>
      </Grid>
      <Grid mt={'20px'}>
        <Button href={'/poke'} sx={{color:'#fff', background:'#ffffff24', width:'300px'}}>Enter</Button> 
      <Typography variant="h6" color="#FFF">Click on button to continue</Typography>
      </Grid>
      
 
    </Grid>  
  );
};


export default Home;
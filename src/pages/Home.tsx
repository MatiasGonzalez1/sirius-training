import React from "react";
import GridList from "./GridList";
import Container from '@mui/material/Container';
import { Button } from "@mui/material";
  
const Home = () => {

  return (
    <Container>
      <h1>¡Bienvenido! ¿Estás listo?</h1>
      <Button href={'/poke'}>Entrar</Button>
      
    </Container>  
  );
};


export default Home;
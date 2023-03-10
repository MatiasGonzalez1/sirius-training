import React from 'react';
import { Container } from "@mui/material";

const PokeCard = ({name, evolution, imgSrc}) => {
  return (
<Container
      maxWidth="xs"
      sx={{
        width: 1,
        border: 2,
        boxShadow: 1,
        m: 1,
      }}
    >
      <h2>{name}</h2>
      <img src={imgSrc} alt='img'/>
      <p>{evolution}</p>
    </Container>  )
}

export default PokeCard;
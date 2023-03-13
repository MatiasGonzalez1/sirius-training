import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

const PokeCard = ({ name, ability, imgSrc, id }) => {
  const alt = `img-${name}`

  return (
    <Grid item xs={3} >
    <Paper elevation={15}>
      <p>{id}</p>
      <img src={imgSrc} alt={alt}/>
      <h2>{name}</h2>
      <p>{ability}</p>
    </Paper>
     </Grid>
  );
};

export default PokeCard;

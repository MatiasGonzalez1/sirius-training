import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

const PokeCard = ({ name, ability, imgSrc, id }) => {
  const alt = `img-${name}`;

  return (
    <Grid item xs={4}>
      <Paper elevation={15}>
        <Grid container spacing={4} justifyContent="center">
          <img src={imgSrc} alt={alt} />
        </Grid>
        <Grid container spacing={4} justifyContent='center'>
        <h2>{name}</h2>
        </Grid>
        <p>{ability}</p>
      </Paper>
    </Grid>
  );
};

export default PokeCard;

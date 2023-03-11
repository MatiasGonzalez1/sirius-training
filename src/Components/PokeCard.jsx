import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

const PokeCard = ({ name, evolution, imgSrc, id }) => {
  return (
    <Grid item xs={3}>
    <Paper elevation={15}>
      <p>{id}</p>
      <h2>{name}</h2>
      <img src={imgSrc} alt="img" />
      <p>{evolution}</p>
    </Paper>
     </Grid>
  );
};

export default PokeCard;

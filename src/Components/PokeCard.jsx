import React from "react";
import { Paper } from "@mui/material";

const PokeCard = ({ name, evolution, imgSrc, id }) => {
  return (
    <Paper elevation={12}>
      <p>{id}</p>
      <h2>{name}</h2>
      <img src={imgSrc} alt="img" />
      <p>{evolution}</p>
    </Paper>
  );
};

export default PokeCard;

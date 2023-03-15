import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

const PokeCard = ({ name, ability, imgSrc, id }) => {
  const alt = `img-${name}`;
  const sxHover = {
    boxShadow:3,
    "&:hover":{
      color: '#fff',
      },
      
    }

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Paper elevation={15} sx={sxHover}>
        <Grid container justifyContent="center">
          <img src={imgSrc} alt={alt} />
        </Grid>
        <Grid container justifyContent='center'>
        <h2>{name}</h2>
        </Grid>
        <Grid container justifyContent='flex-end' padding={10}>
        <p>{ability}</p>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PokeCard;

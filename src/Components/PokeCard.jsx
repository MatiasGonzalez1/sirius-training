import React, { useEffect, useState } from "react";
import {
  Grid,
  Link,
  MenuItem,
  Paper,
  Select,
  InputLabel,
  Typography,
} from "@mui/material";

const PokeCard = ({
  name,
  type,
  ability,
  imgSrc,
  id,
  href,
  evolution,
  experience,
  atk,
  def,
  speed,
  hp,
}) => {
  const alt = `img-${name}`;
  const sxHover = {
    boxShadow: 3,
    "&:hover": {
      border: "1px solid #0c0b0b4f",
    },
  };
  const center ={
    justifyContent:'center',
    flexDirection: 'column'
  }
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper elevation={15} sx={sxHover}>
        <Grid container justifyContent="flex-start" padding={2}>
          <h2>{id}</h2>
        </Grid>
        <Grid container justifyContent="center">
          <img src={imgSrc} alt={alt} />
        </Grid>
        <Grid container justifyContent="center">
          <h2>{name}</h2>
        </Grid>
        <Grid container justifyContent="center">
          <h2>{type}</h2>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item container xs={12} sx={center}>
            <p>Stats:</p>
          </Grid>

          <Grid item container xs={4} sx={center}>
          <p>Hp: {hp}</p>
          <p>Exp: {experience}</p>
          </Grid>
          <Grid item xs={4}>
            <p>Def: {def}</p>
            <p>Atk: {atk}</p>
          </Grid>
          <Grid item xs={4}>
            <p>Speed: {speed}</p>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid container justifyContent="flex-start" padding={10}>
          <InputLabel id="ability">Ability</InputLabel>
          <Select fullWidth labelId="ability" label="Ability">
            {ability.map((one) => (
              <MenuItem key={one.ability.name}>{one.ability.name}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid container justifyContent="flex-end" padding={2}>
          <Link href={href}>
            <Typography component="h3">See more details</Typography>
          </Link>
        </Grid>

        <Grid container justifyContent="flex-center">
          {evolution}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PokeCard;

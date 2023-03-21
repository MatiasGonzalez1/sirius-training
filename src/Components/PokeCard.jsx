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
  data,
}) => {
  const alt = `img-${name}`;
  const sxHover = {
    boxShadow: 3,
    "&:hover": {
      transiton: "5s",
      transform: "scale(1.02)",
      border: "1px solid #0c0b0b4f",
    },
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper elevation={15} sx={sxHover}>
        <Grid container justifyContent="flex-start" padding={1}>
          <p>{id}</p>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item container justifyContent="center">
            <img src={imgSrc} alt={alt} style={{ width: "150px" }} />
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <h2>{name}</h2>
        </Grid>

        <Grid container justifyContent="center">
          {type?.map((one) => (
            <p key={one.type.name}>{one.type.name}</p>
          ))}
        </Grid>

        {data?
        <Grid>
        <Grid container justifyContent="center">
          {/* <Grid item container xs={12} 
          > */}
          <p>Stats:</p>
        </Grid>

        <Grid container xs={12}justifyContent="center">
          {data.map((item, i) => (
            <Grid container item key={i} xs={6} justifyContent='center' padding={1} border={1} margin={1}>
              <Grid item>
                <Typography>
                  {item.stat.name}: {item.base_stat}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        </Grid> : ''}

        {ability?<Grid container justifyContent="flex-start" padding={10}>
          <InputLabel id="ability">Ability</InputLabel>
          <Select fullWidth labelId="ability" label="Ability">
            {ability?.map((one) => (
              <MenuItem key={one.ability.name}>{one.ability.name}</MenuItem>
            ))}
          </Select>
        </Grid>: ''}

        <Grid container justifyContent="flex-end" padding={2}>
          
          {href?
          <Link href={href}>
            <Typography component="h3">See more details</Typography>
          </Link>: ''}
        </Grid>

        <Grid container justifyContent="flex-center">
          {evolution}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PokeCard;

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
  move,
  imgSrc,
  id,
  href,
  evolution,
  finalEvolution,
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
    <Grid item xs={8} md={6} lg={4} maxWidth='500px' justifyContent='center'>
      <Paper elevation={15} sx={sxHover}>
        <Grid container justifyContent="flex-start" padding={1}>
          <Typography>{id}</Typography>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item container justifyContent="center">
            <img src={imgSrc} alt={alt} style={{ width: "150px" }} />
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Typography variant="h5">{name}</Typography>
        </Grid>
        <Grid container>
       <Grid container justifyContent="center" padding={1}>
        <Typography variant='subtitle2'>Types:</Typography>
        <Grid item xs ={4} >
          {type?.map((one, i) => (
              <Typography key={i} textAlign='end'> {one.type.name}</Typography>
          ))}
        </Grid>
           </Grid>
        </Grid>

        {data ? (
          <Grid>
            <Grid container justifyContent="center">
              <Typography variant='subtitle2'>Stats:</Typography>
            </Grid>

            <Grid container xs={12} justifyContent="center">
              {data.map((item, i) => (
                <Grid
                  container
                  item
                  key={i}
                  xs={5}
                  justifyContent="space-around"
                  // padding={1}
                  border={1}
                  margin={1}
                >
                  <Grid item>
                    <Typography>
                      {item.stat.name}: {item.base_stat}
                      </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : (
          ""
        )}

        {ability ? (
          <Grid container justifyContent="flex-start" padding={10} mt='-30px'>
            <InputLabel id="ability">Ability</InputLabel>
            <Select fullWidth labelId="ability" label="Ability">
              {ability?.map((one) => (
                <MenuItem key={one.ability.name}>{one.ability.name}</MenuItem>
              ))}
            </Select>
          </Grid>
        ) : (
          ""
        )}

        {move ? (
          <Grid container justifyContent="flex-start" padding={10} mt='-100px'>
            <InputLabel id="moves">Moves</InputLabel>
            <Select fullWidth labelId="move" label="Move">
              {move?.map((one) => (
                <MenuItem key={one.move.name}>{one.move.name}</MenuItem>
              ))}
            </Select>
          </Grid>
        ) : (
          ""
        )}

        <Grid container justifyContent="flex-end" padding={2}>
          {href ? (
            <Link href={href}>
              <Typography component="h3">See more details</Typography>
            </Link>
          ) : (
            ""
          )}
        </Grid>

        <Grid container justifyContent="flex-center">
          {evolution? <Grid item xs={4}>
            <Typography variant='subtitle2'>Evolution: {evolution}</Typography>
            </Grid> : ''}
            {finalEvolution? <Grid item xs={4}>
            <Typography variant='subtitle2'>Final Evolution: {finalEvolution}</Typography>
            </Grid> :''}
          </Grid>
      </Paper>
    </Grid>
  );
};

export default PokeCard;

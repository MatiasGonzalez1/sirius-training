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

import LabelIcon from "@mui/icons-material/Label";

const PokeCard = ({
  name,
  type,
  ability,
  move,
  imgSrc,
  id,
  href,
  preEvolution,
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
    <Grid item xs={8} md={6} lg={4} maxWidth="500px">
      <Link href={href} underline="none">
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

          <Grid container justifyContent="center">
            <Grid container justifyContent="space-around" padding={1}>
              <Typography variant="subtitle2">Types:</Typography>
              <Grid item xs={8} textAlign="end">
                {type?.map((one, i) => (
                  <Typography
                    key={i}
                    display="inline"
                    sx={{padding:'5px 0'}}
                  >
                    <LabelIcon sx={{fontSize:'10px', margin:'0px 5px 0px 5px'}} />
                    {one.type.name}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {data ? (
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="subtitle2">Stats:</Typography>
              </Grid>

              <Grid container justifyContent="center">
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
            <Grid container justifyContent="flex-start" padding={10} mt="-30px">
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
            <Grid
              container
              justifyContent="flex-start"
              padding={10}
              mt="-100px"
            >
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

          <Grid container justifyContent="flex-center">
            {preEvolution ? (
              <Grid item xs={4}>
                <Typography variant="subtitle2">
                  Pre Evolution: {preEvolution}
                </Typography>
              </Grid>
            ) : (
              ""
            )}
            {finalEvolution ? (
              <Grid item xs={4}>
                <Typography variant="subtitle2">
                  Final Evolution: {finalEvolution}
                </Typography>
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};

export default PokeCard;

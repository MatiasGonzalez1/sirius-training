import React from "react";
import {
  Grid,
  Link,
  MenuItem,
  Paper,
  Select,
  InputLabel,
  Typography,
} from "@mui/material";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const PokeInfo = ({
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
  return (
    <Grid item sx={{margin: '30px 0px'}}>
      <Link href={href} underline="none">
        <Paper elevation={15}>
          <Grid container justifyContent="flex-start" padding={1}>
            <Typography>{id}</Typography>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item container justifyContent="center">
              <img src={imgSrc} alt={alt} sx={{ width: "150px" }} />
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
                    <LabelImportantIcon sx={{fontSize:'10px', margin:'0px 5px 0px 5px'}} />
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

          <Grid container justifyContent="center" textAlign='center' padding={1}>
            {preEvolution? (
              <Grid item xs={6} justifyContent="center">
                <Typography  variant="subtitle1">
                  Pre Evolution: {preEvolution}
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={6} justifyContent="center">
                <Typography  variant="subtitle1">
                  Pre Evolution: No tiene
                </Typography>
              </Grid>
            )}
            {finalEvolution ? (
              <Grid item xs={6}>
                  <Typography variant="subtitle1">
                  Final Evolution: {finalEvolution}
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={6} justifyContent="center">
                <Typography  variant="subtitle1">
                  Final Evolution: No tiene
                </Typography>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};

export default PokeInfo;

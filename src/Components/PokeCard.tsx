import React from "react";
import { InfoPokemon } from "../@types/pokemon";
import { themeType } from "../utils/ThemeColor";
import {
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";



const PokeCard: React.FC<InfoPokemon> = (
  {name,
  type,
  imgSrc,
  id,
  href,
  preEvolution,
  finalEvolution,
  data,
  })=> {

  const alt = `img-${name}`;

  const sxHover = {
    boxShadow: 15,
    background:'#ffffff24',
    color:'#fff',
    transition:'all .5s',
    "&:hover": {
      border: "1px solid #0c0b0b4f",
      background:'#e6dada',
      color: '#000',
      boxShadow: '1px 1px 25px 1px #e6dada80'
    },
  };

  return (
   
      <Grid item xs={8} md={6} lg={4} maxWidth="500px">
      <Link href={href} underline="none">
        <Paper elevation={15} sx={sxHover} >
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

          <Grid container justifyContent="center" width='100%'>
            <Grid container justifyContent="space-around" padding={1}>
              <Grid item xs={12} textAlign="center" >
                {type?.map((one:any, i:number) => (
                  <Typography
                    key={i}
                    display="inline"
                    sx={{ padding: "0px 3px", maxWidth:'30%', margin:'5px 2px', backgroundColor:themeType(one.pokemon_v2_type.name), borderRadius:'6px' }}
                  >
                    <LabelImportantIcon sx={{fontSize:'10px', margin:'0px 5px 0px 5px'}} />
                    {one.pokemon_v2_type.name}
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
                {data.map((item:any, i:any) => (
                  <Grid
                    container
                    item
                    key={i}
                    xs={5}
                    justifyContent="space-around"
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

          <Grid container justifyContent="flex-center">
            {preEvolution ? (
              <Grid item xs={4}>
                <Typography variant="subtitle2">
                  Pre Evolution: {preEvolution}
                </Typography>
              </Grid>
            ) : null}
            {finalEvolution ? (
              <Grid item xs={4}>
                <Typography variant="subtitle2">
                  Final Evolution: {finalEvolution}
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </Paper>
      </Link>
    </Grid>
    
  );
};

export default PokeCard;

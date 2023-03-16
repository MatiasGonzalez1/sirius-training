import React, { useEffect, useState } from "react";
import { Grid, Link, MenuItem, Paper, Select } from "@mui/material";

const PokeCard = ({ name, ability, imgSrc, id , href, evolution}) => {
  const alt = `img-${name}`;
  const sxHover = {
    boxShadow:3,
    "&:hover":{
      border: '1px solid #0c0b0b4f',
      },
      
    }

  return (
    <Grid item xs={12}  md={6} lg={4}>
      <Paper elevation={15} sx={sxHover}>
      <Grid container justifyContent='flex-start' padding={2}>
        <h2>{id}</h2>
        </Grid>
        <Grid container justifyContent="center">
          <img src={imgSrc} alt={alt} />
        </Grid>
        <Grid container justifyContent='center'>
        <h2>{name}</h2>
        </Grid>
        <Grid container justifyContent='flex-start' padding={10}>
          <Select>
            {ability.map((one, i)=> 
              <MenuItem>
              {one.ability.name}
              </MenuItem>
              )} 
          </Select> 
          </Grid>
          <Grid container justifyContent='flex-end' padding={2}>

        <Link href={href}>See more details</Link>
          </Grid>
       
        <Grid container justifyContent='flex-center'>
          {evolution}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PokeCard;

import React from 'react';
import { Grid } from '@mui/material';

const Stats = ({statHp, statXp, statAtk, statDef, statSpeed}) => {
  return (
    <Grid>
      <Grid item xs={4}>
        <p>Hp: {statHp}</p>
      </Grid>
      <Grid item xs={4}>
        <p>Xp: {statXp}</p>
      </Grid>
      <Grid item xs={4}>
        <p>Atk: {statAtk}</p>
      </Grid>
      <Grid item xs={4}>
        <p>Def: {statDef}</p>
      </Grid>
      <Grid item xs={4}>
        <p>Speed: {statSpeed}</p>
      </Grid>
    </Grid>
  )
}

export default Stats;
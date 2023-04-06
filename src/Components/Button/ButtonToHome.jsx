import React from 'react';
import { Button, Grid } from '@mui/material';

const ButtonToHome = () => {
  return (
    <Grid>
      <Grid item sx={{marginTop: '10px'}}>
    <Button variant='contained' href='/'>Return To Home</Button>
      </Grid>
    </Grid>
  )
}

export default ButtonToHome;
import React from 'react';
import { Button, Grid } from '@mui/material';

const ButtonReusable = ({text, hrefButton}) => {
  return (
    <Grid>
      <Grid item sx={{marginTop: '10px'}}>
    <Button variant='contained' href={hrefButton}>{text}</Button>
      </Grid>
    </Grid>
  )
}

export default ButtonReusable;
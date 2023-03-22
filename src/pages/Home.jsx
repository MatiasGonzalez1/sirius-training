import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
<Grid container>
  <Typography>How do you want to see it?</Typography>
  <Grid item container>
    <Button href='/pokeGrid'>Grid</Button>
  </Grid>
  <Grid item container>
    <Button href='/pokeTable'>Table</Button>
  </Grid>
</Grid>
    )
}

export default Home
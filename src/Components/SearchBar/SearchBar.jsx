


/*****************************this function will be implemented in the future****************************/



import { Search } from '@mui/icons-material'
import { Grid, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'

const SearchBar = ({valor, parametro}) => {
  return (
    <Grid container spacing={6} alignItems='flex-end'>
      <Grid item xs={9} sm={4} lg={3} padding='0px 3px'>
        <Paper elevation={2}>
          <InputBase
            value={valor}
            placeholder='Buscar pokemon'
            />
            <IconButton>
              <Search/>
            </IconButton>
        </Paper>
      </Grid>
    </Grid>
    )
}

export default SearchBar;
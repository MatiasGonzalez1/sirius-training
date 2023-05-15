import { useState } from 'react';
import { Grid, InputBase, Button, Paper, Typography } from '@mui/material';
import PokeCard from '../PokeCard';
import * as React from 'react';
import { InfoPokemon } from '../../@types/pokemon';

import { GOTTA_CATCH_THEM_ALL_FILTER } from "../../apollo-client/pedido";

import { useQuery} from '@apollo/client';
import Prueba from '../Loader/Prueba';


const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<InfoPokemon>();

  const fetchPokemon = async () => {
     setPokemon(data)
      console.log(data);

  };

  const {data, loading, error} = useQuery(GOTTA_CATCH_THEM_ALL_FILTER(search));

  return (
    <Grid container alignItems={'flex-end'} justifyContent={'flex-end'}  xs={12}>
      <Grid item maxWidth='300px' padding='5px 3px 2px 3px' marginTop='10px' > 
      <Paper elevation={2} >
      <InputBase
        value={search}
        placeholder='Search Pokemon'
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={fetchPokemon}>Search</Button>
      </Paper>
      </Grid>

      {/* {pokemon && (
        <Grid container>
        <PokeCard
         key={pokemon.id}
         id={pokemon.id}
         name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
         imgSrc={pokemon.sprites.front_default? pokemon.sprites.front_default : pokemon.sprites.other.home.front_default} 
         type={pokemon.types}
         href={`/poke/${pokemon.id}`}
       />
        </Grid>
        
      )} */}
    </Grid>
  );
};

export default SearchBar;
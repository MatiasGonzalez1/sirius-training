import { useState } from 'react';
import axios from 'axios';
import { Grid, InputBase, Button, Paper } from '@mui/material';
import PokeCard from '../PokeCard';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
      setPokemon(response.data);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  return (
    
    <Grid container alignItems={'flex-end'} justifyContent={'flex-end'} xs={12} >
      <Grid item maxWidth='300px' padding='5px 3px 2px 3px' marginTop='10px' flexDirection={'column'}> 
      <Paper elevation={2} >
      <InputBase
        value={search}
        placeholder='Search Pokemon'
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={fetchPokemon}>Search</Button>
      </Paper>
      </Grid>
      {pokemon && (
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
        
      )}
    </Grid>
  );
};

export default SearchBar;
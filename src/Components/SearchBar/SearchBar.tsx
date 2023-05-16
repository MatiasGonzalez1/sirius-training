import React,{ useEffect,useState} from 'react';
import { Grid, InputBase, Button, Paper } from '@mui/material';
import PokeCard from '../PokeCard';
import { InfoPokemon } from '../../@types/pokemon';
import {useLazyQuery} from '@apollo/client';
import { GOTTA_CATCH_THEM_FIND } from '../../apollo-client/pedido';


const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState<InfoPokemon>();
  const [getPoke, response]=useLazyQuery(GOTTA_CATCH_THEM_FIND)
  console.log(response)
  
 
  const fetchPokemon = async (name:string) => {
    try {
      await getPoke({variables:{nameToSearch:name}})
      if(!response.data){
        <Grid>Cargando</Grid>
      }else{
      setPokemon(response.data.pokemon_v2_pokemon[0])
      }
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

   return (
    
    <Grid container alignItems={'flex-end'} justifyContent={'flex-end'}  xs={12}>
      <Grid item maxWidth='300px' padding='5px 3px 2px 3px' marginTop='10px' > 
      <Paper elevation={2} >
      <InputBase
        value={search}
        placeholder='Search Pokemon'
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={()=>fetchPokemon(`%${search}%`)}>Search</Button>
      </Paper>
      </Grid>

      {pokemon &&(
        <Grid container>
          {
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={`${pokemon.name?.charAt(0).toUpperCase()}${pokemon.name?.slice(1)}`}
              imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
              type={pokemon.pokemon_v2_pokemontypes}
              href={`/poke/${pokemon.id}`}
       />
          }
        
       <Button onClick={()=>fetchPokemon('')}>Close</Button>
        </Grid>
        
      )}
    </Grid>
  );
};

export default SearchBar;
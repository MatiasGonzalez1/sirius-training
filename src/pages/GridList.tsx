import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Button, Grid, Pagination, PaginationItem, Paper, Typography } from "@mui/material";
// import Request from "../utils/Request";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { PokeCard, SearchBar, Prueba} from "../Components";
import { upButtonStyle, up } from "../Components/Button/ButtonToUp";
import { InfoPokemon } from '../@types/pokemon';
import NotFound from "./NotFound";
import { GOTTA_CATCH_THEM_ALL } from "../apollo-client/pedido";

import { useQuery} from '@apollo/client';
import { Link } from "react-router-dom";

const GridList = () => {
  const [numberPoke, setNumberPoke] = useState(0);
  const [totalPoke, setTotalPoke] = useState(18);
  const [count, setCount] = useState(1)

  const next = ()=>{
    setNumberPoke(numberPoke + totalPoke)
    setTotalPoke(totalPoke)
    setCount(count + 1)
    console.log(count)
  }

  const prev = ()=>{
    setNumberPoke(numberPoke - totalPoke)
    setTotalPoke(totalPoke)
    setCount(count -1)
    console.log(count)
  }


  const {data, loading, error} = useQuery(GOTTA_CATCH_THEM_ALL(numberPoke,totalPoke));  
  
  // const imgPokeGraph = ((JSON.parse(data.pokemon_v2_pokemon.pokemon_v2_pokesprites.sprites)).front_default)
  //   .replace("/media", "https://raw.githubusercontent.com/PokeAPI/sprites/master/")
  // const toParse = async (texto:string)=>{
  //    const salida = await JSON.parse(texto)  
  //   return salida.front_default
  // }

  console.log(data, error)
  if(loading){
    return(
       <Grid item>
      <Prueba />
    </Grid>
    )
  }

  if(error){
    return <NotFound/>
  }

  const allPoke = data.pokemon_v2_pokemon
  // const one = data.pokemon_v2_pokemon[0].pokemon_v2_pokemonsprites.sprites
  // const parse = JSON.parse(one)  


  return(
    <Grid>

      <SearchBar/>

      <Grid container justifyContent="center" padding={2} color="white">
         <Typography sx={{ fontSize: "2.2rem" }} variant="h3">
           Pokemon's List
         </Typography>
       </Grid>

       <Grid container spacing={2} justifyContent="center">
         {allPoke?.map((item:InfoPokemon, index:any) => (
           <PokeCard
             key={index}
             id={item.id}
             name={`${item.name?.charAt(0).toUpperCase()}${item.name?.slice(1)}`}
            //  imgSrc={imgPokeGraph}
             imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
             type={item.pokemon_v2_pokemontypes}
             href={`/poke/${item.id}`}
           />
            ))}
            
          <Grid container justifyContent='space-around'>
          {allPoke[0].id !== 1?
          <Paper sx={{margin:'10px 5px 0', padding:'5px', background:'#ffffff24'}}>
          <Link style={{textDecoration: 'none', color:'#fff'}}
            to={`?page=${count-1}`}
            onClick={()=> prev()}>
            Anterior
          </Link>
          </Paper>
          : null}
          {allPoke? 
          <Paper sx={{margin:'10px 5px 0', padding:'5px', background:'#ffffff24'}}>
            <Link style={{textDecoration: 'none', color:'#fff'}}
          to={`?page=${count+1}`}
          onClick={()=> next()}>
          Siguiente
        </Link> 
          </Paper>
          : ''} 
          </Grid>
         </Grid>
         
         <ArrowCircleUpIcon onClick={up} sx={upButtonStyle}/>
    </Grid>
  )
};

export default GridList;

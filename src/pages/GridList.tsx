import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
// import Request from "../utils/Request";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { PokeCard, SearchBar, Prueba} from "../Components";
import { upButtonStyle, up } from "../Components/Button/ButtonToUp";
import { InfoPokemon } from '../@types/pokemon';

import { useQuery, gql } from '@apollo/client';
import NotFound from "./NotFound";

const GOTTA_CATCH_THEM_ALL = gql`
query gottaCatchThemAll {
  pokemon_v2_pokemon(where: {id:{_lte: 18}}) {
    id
    name
    pokemon_v2_pokemonstats{
      base_stat
      pokemon_v2_stat{
        name
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}
`

const GridList = () => {
  const {data, loading, error} = useQuery(GOTTA_CATCH_THEM_ALL);  

  // const toParse = async (texto:any)=>{
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
         {allPoke.map((item:InfoPokemon, index:any) => (
           <PokeCard
             key={index}
             id={item.id}
             name={item.name[0].toUpperCase() + item.name.slice(1)}
             imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
             type={item.pokemon_v2_pokemontypes}
             href={`/poke/${item.id}`}
           />
            ))}
         </Grid>
         <ArrowCircleUpIcon onClick={up} sx={upButtonStyle}/>
    </Grid>
  )

  


  // const [poke, setPoke] = useState([]);
  // const [url, setUrl] = useState(Request);
  // const [nextPoke, setNextPoke] = useState("");
  // const [prevPoke, setPrevPoke] = useState("");

  // const [loader, setLoader] = useState(false);


  // const fetch = (url:string)=>{
  //   setLoader(true);
  //   axios
  //   .get(`${url}pokemon?limit=36`)
  //   .then((res) => {
  //     setNextPoke(res.data.next);
  //     setPrevPoke(res.data.previous);
  //     return res.data.results;
  //   })
  //   .then((results:any) => {
  //     return Promise.all(results.map((res:any) => axios.get(res.url)));
  //   })
  //   .then((results:any) => {
  //     setPoke(results.map((res:any) => res.data));
  //   });
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  // }


  // useEffect(() => {
  //   fetch(url);
  //   setLoader(false);
  // }, [url]);

  // return (
  //   <Grid>
  //     <SearchBar/>
  //     {/* <Button href="/pokeList">View on list</Button> Esta porción de código se comenta para implementar nueva funcionalidad*/}

  //     <Grid container justifyContent="center" padding={2} color="white">
  //       <Typography sx={{ fontSize: "2.2rem" }} variant="h3">
  //         Pokemon's List
  //       </Typography>
  //     </Grid>
  //     <Grid container spacing={2} justifyContent="center">
  //       {poke.map((item:InfoPokemon, index:any) => (
  //         <PokeCard
  //           key={index}
  //           id={item.id}
  //           name={item.name[0].toUpperCase() + item.name.slice(1)}
  //           imgSrc={item.sprites?.front_default}
  //           type={item.types}
  //           href={`/poke/${item.id}`}
  //         />
  //       ))}
  //       
  
  //     </Grid>
  //     <ArrowCircleUpIcon onClick={up} sx={upButtonStyle} />
       
  //   </Grid>
  // );
};


export default GridList;

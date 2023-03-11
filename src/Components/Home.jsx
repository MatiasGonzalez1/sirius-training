import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";
import { Button, Grid } from "@mui/material";



const Home = () => {
  const [poke, setPoke] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const pokeData = async()=>{
    //agrega loader
    setLoading(true);
    const res=await axios.get(url);
    //setea el valor para los siguientes 20 pokemons
    setNextPage(res.data.next);

    //setea el valor para los anteriores 20 pokemons
    setPrevPage(res.data.previous);

    //trae la informacion en un array de objetos con 20 pokemons
    getPokemon(res.data.results);
  
    //cancela la carga de la url
    setLoading(false);
  }

  const getPokemon=async(res)=>{
    res.map(async(item)=>{
      const result = await axios.get(item.url);
      //setea el estado de setPoke a lo que viene por result.data y devuelve el nuevo estado
      setPoke(state=>{
      state=[...state, result.data]
      //se organiza el estado
      state.sort((a,b)=>a.id>b.id?1:-1)
      return state;
    })
    })
  }

  useEffect(() => {
    pokeData();
    },[url]);

  // if (!poke) return <h1>Nada para ver</h1>;
  return (
      <div>
        <h1 style={{textAlign: 'center'}}>Pokemon's List</h1>
        <Grid container spacing={3}>
           {poke.map((item) => (
          <PokeCard key={item.id} id= {item.id} name={item.name} imgSrc={item.sprites.front_default}/> 
        ))} </Grid>
        <Button variant="contained">Siguiente</Button>
      </div>
     
  );
};

export default Home;

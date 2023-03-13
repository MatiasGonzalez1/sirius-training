import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";
import { Button, Grid } from "@mui/material";

const Home = () => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/"); 

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      return res.data.results
    })
    .then((results) => {
      return Promise.all(results.map((res) => axios.get(res.url)))
    })
    .then((results) => {
      setPoke(results.map((res) =>res.data)
      )
    })

  },[url]);

 
  return (
      <div>
        <h1 style={{textAlign: 'center'}}>Pokemon's List</h1>
        <Grid container spacing={3}>
           {poke.map((item) => (
              <PokeCard 
              key={item.id} 
              id= {item.id} 
              name={item.name} 
              imgSrc={item.sprites.front_default} 
              ability={[item.abilities[0].ability.name, item.abilities[1]?.ability.name]}/>
           ))} 
        </Grid>
        <Button variant="contained">Siguiente</Button>
      </div>
     
  );
};

export default Home;

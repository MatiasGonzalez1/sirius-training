import React, { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import Request from "../utils/Request.js";

const Home = () => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState(Request); 
 
  const fetch = (url)=>{
    axios.get(`${url}pokemon/`)
    .then((res) => {

     console.log(res.data.next);
      return res.data.results
    })
    .then((results) => {
      return Promise.all(
        results.map((res) => 
        axios.get(res.url))
        )
    })
    .then((results) => {
      setPoke(results.map((res) =>res.data)
      )
    })
  }

  // const evoFetch = (url, id)=>{
  //   axios.get(`${url}evolution-chain/${id}`)
  // }

  useEffect(() => {
   fetch(url)
  },[url]);

  const next = ()=>{
    alert('Hiciste click')
  }

  // const cap = (str)=>{
  //   return str.charAt(0).toUpperCase + str.slice(1)
  // }

  return (
      <div>
        <h1 style={{textAlign: 'center'}}>Pokemon's List</h1>
        <Grid container spacing={8}>
           {poke.map((item, index) => (
              <PokeCard 
              key={item.id} 
              id= {item.id} 
              name={item.name} 
              imgSrc={item.sprites.front_default} 
              ability={[`${item.abilities[0].ability.name} ${item.abilities[1]?.ability.name}`]}/>
           ))} 
        </Grid>
        <Button variant="contained" onClick={next}>Siguiente</Button>
      </div>
     
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import Request from "../utils/Request.js";

const GridList = () => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState(Request); 
  const shot = (`${url}/pokemon/`);
  const [species, setSpecies] = useState();
  const [nextPoke, setNextPoke] = useState();
 
  const fetch = (url)=>{
    axios.get(`${url}pokemon/`)
    .then((res) => {
      // setUrl(res.data.next)
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

  // const next = (url)=>{
  //   axios.get(`${url}pokemon/`)
  //   .then((res) => {
  //     setNextPoke(res.data.next)
  //   })
  // }
 

  // const evoFetch = (url, id)=>{
  //   axios.get(`${url}evolution-chain/${id}`)
  // }

  useEffect(() => {
   fetch(url)
  },[url]);


  return (
      <div>
        <Grid container justifyContent='center' padding={2} margin={2}><Typography variant="h3">Pokemon's List</Typography></Grid>
        <Grid container sx={{ flexGrow: 1 }} spacing={2} justifyContent='center' >
           {poke.map((item, index) => (
              <PokeCard 
              key={item.id} 
              id= {item.id} 
              name={item.name[0].toUpperCase() + item.name.slice(1)} 
              imgSrc={item.sprites.front_default}
              type={item.types}
              experience={item.base_experience}
              href={`/pokeGrid/${item.id}`}
              />
           ))} 
            
            <Grid container justifyContent='flex-end'>
              <Button variant="contained" onClick={console.log(url)}>Siguiente</Button>
            </Grid>

        </Grid>
       
        
      </div>
     
  );
};

export default GridList;

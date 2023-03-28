import React, { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import Request from "../utils/Request.js";

  
const GridList = () => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState(Request); 
  const shot = (`${url}/pokemon`);
  const [species, setSpecies] = useState();
  const [nextPoke, setNextPoke] = useState();
 
  // const fetch = (url)=>{
    
  // }

  useEffect(() => {
    try{
      axios.get(`${url}pokemon?limit=6`)
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
  } catch(error){
      console.log(error);
    }
  },[url]);


  return (
    <Grid>
        <Grid container justifyContent='center' padding={2} color='white'><Typography sx={{fontSize: '2.2rem'}} variant="h3">Pokemon's List</Typography></Grid>
        <Grid container spacing={2} justifyContent='center' >
           {poke.map((item, index) => (
              <PokeCard 
              key={item.id} 
              id= {item.id} 
              name={item.name[0].toUpperCase() + item.name.slice(1)} 
              imgSrc={item.sprites.front_default}
              type={item.types}
              href={`/poke/${item.id}`}
              />
           ))} 
            <Grid container justifyContent='flex-end'>
              <Button sx={{marginTop: '20px'}} variant="contained" onClick={()=>alert(`Aún no tenemos ésta función, lo siento Ash`)}>Siguiente</Button>
            </Grid>
       </Grid>
      </Grid>
     
  );
};

export default GridList;

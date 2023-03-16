import React, { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import Request from "../utils/Request.js";

const Home = () => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState(Request); 
  const shot = (`${url}/pokemon/`)
  const [actual, setActual] = useState();
 
  const fetch = (url)=>{
    axios.get(`${url}pokemon?limit=10/`)
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
  //     setUrl(res.data.next)
  //   })
  // }
 

  // const evoFetch = (url, id)=>{
  //   axios.get(`${url}evolution-chain/${id}`)
  // }

  useEffect(() => {
   fetch(url)
  },[url]);


  // const cap = (str)=>{
  //   return str.charAt(0).toUpperCase + str.slice(1)
  // }

  return (
      <div>
        <h1 style={{textAlign: 'center'}}>Pokemon's List</h1>
        <Grid container spacing={15}>
           {poke.map((item, index) => (
              <PokeCard 
              key={item.id} 
              id= {item.id} 
              name={item.name} 
              imgSrc={item.sprites.other.home.front_default} 
              // evolution={item.}
              ability={item.abilities}
              // ability={[`${item.abilities[0].ability.name} ${item.abilities[1]? item.abilities[1].ability.name : ''}`]}
              href={`${shot}${item.id}`}
              />
           ))} 
            
            <Grid container justifyContent='flex-end'>
              <Button variant="contained" onClick={console.log(url)}>Siguiente</Button>
            </Grid>

        </Grid>
       
        
      </div>
     
  );
};

export default Home;

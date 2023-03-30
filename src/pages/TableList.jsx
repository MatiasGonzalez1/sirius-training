import React, { useEffect, useState } from "react";
// import PokeCard from "../Components/PokeCard";
import axios from "axios";
import { Button, Grid, Typography, Container } from "@mui/material";
import Request from "../utils/Request.js";
import Pokelist from "../Components/PokeList.jsx";
import ButtonToHome from "../Components/Button/ButtonToHome.jsx";

const TableList = () => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState(Request); 
  const shot = (`${url}/pokemon/`);
  const [species, setSpecies] = useState();
  const [nextPoke, setNextPoke] = useState();
 
  const fetch = (url)=>{
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
  }

  useEffect(() => {
   fetch(url)
  },[url]);



  return (
      <Container>
        <Button href="/poke">View on Grid</Button>
        {poke.map((item, i)=>(
          <Pokelist
          key={item.id}
          name={item.name[0].toUpperCase() + item.name.slice(1)}
          imgSrc={item.sprites.front_default}
          type={item.types}
          />
        ))}    
        
        <ButtonToHome/>
      </Container>
     
  );
};

export default TableList;

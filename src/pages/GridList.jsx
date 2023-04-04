import React, { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import Request from "../utils/Request.js";
import Prueba from "../Components/Loader/Prueba.jsx";

const GridList = () => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState(Request);
  const [nextPoke, setNextPoke] = useState("");
  const [prevPoke, setPrevPoke] = useState("");

  const [loader, setLoader] = useState(false);

  const fetch = (url)=>{
    axios
    .get(`${url}pokemon?limit=6`)
    .then((res) => {
      setNextPoke(res.data.next);
      setPrevPoke(res.data.previous);
      return res.data.results;
    })
    .then((results) => {
      return Promise.all(results.map((res) => axios.get(res.url)));
    })
    .then((results) => {
      setPoke(results.map((res) => res.data));
    });
   }


  useEffect(() => {
    setLoader(true);
    fetch(url);
      
    setLoader(false);
  }, [url]);

  if (loader) <Prueba />;
  return (
    <Grid>
      <Button href="/pokeList">View on list</Button>

      <Grid container justifyContent="center" padding={2} color="white">
        <Typography sx={{ fontSize: "2.2rem" }} variant="h3">
          Pokemon's List
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {poke.map((item, index) => (
          <PokeCard
            key={item.id}
            id={item.id}
            name={item.name[0].toUpperCase() + item.name.slice(1)}
            imgSrc={item.sprites.front_default}
            type={item.types}
            href={`/poke/${item.id}`}
          />
        ))}
        <Grid container justifyContent='space-around'>
          {prevPoke? <Button
            sx={{ margin: "20px" }}
            variant="contained"
            onClick={()=> prevPoke? fetch(prevPoke) : ''}
          >
            Anterior
          </Button> : '' }
          <Button
            sx={{ margin: "20px" }}
            variant="contained"
            onClick={()=> nextPoke? fetch(nextPoke) : ''}
          >
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridList;

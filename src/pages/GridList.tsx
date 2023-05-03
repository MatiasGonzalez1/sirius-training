import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import Request from "../utils/Request";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { PokeCard, SearchBar, Prueba} from "../Components";
import { InfoPokemon } from '../@types/pokemon';



const GridList = () => {
  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState(Request);
  const [nextPoke, setNextPoke] = useState("");
  const [prevPoke, setPrevPoke] = useState("");

  const [loader, setLoader] = useState(false);

  const up = ():void=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  const upButtonStyle = {
    color:'white', 
    cursor:'pointer', 
    fontSize:'40px',
    borderRadius:'50%', 
    boxShadow: 5,
    position: 'fixed',
    right:'15px',
    bottom:'15px',
    transition:'all .5s',
    "&:hover":{
      boxShadow: '1px 1px 25px 1px #e6dada80'
    }
  }

  const fetch = (url:string)=>{
    setLoader(true);
    axios
    .get(`${url}pokemon?limit=36`)
    .then((res) => {
      setNextPoke(res.data.next);
      setPrevPoke(res.data.previous);
      return res.data.results;
    })
    .then((results:any) => {
      console.log(results)
      return Promise.all(results.map((res:any) => axios.get(res.url)));
    })
    .then((results:any) => {
      setPoke(results.map((res:any) => res.data));
    });
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }


  useEffect(() => {
    fetch(url);
    setLoader(false);
  }, [url]);

  if (loader) <Prueba />;
  return (
    <Grid>
      <SearchBar/>
      {/* <Button href="/pokeList">View on list</Button> Esta porción de código se comenta para implementar nueva funcionalidad*/}

      <Grid container justifyContent="center" padding={2} color="white">
        <Typography sx={{ fontSize: "2.2rem" }} variant="h3">
          Pokemon's List
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {poke.map((item:InfoPokemon, index:any) => (
          <PokeCard
            key={index}
            id={item.id}
            name={item.name[0].toUpperCase() + item.name.slice(1)}
            imgSrc={item.sprites?.front_default}
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
          </Button> : null}
          {nextPoke? <Button
            sx={{ margin: "20px" }}
            variant="contained"
            onClick={()=> nextPoke? fetch(nextPoke)  : null}
          >
            Siguiente
          </Button> : ''} 
        </Grid>
      </Grid>
      <ArrowCircleUpIcon onClick={up} sx={upButtonStyle} />
       
    </Grid>
  );
};


export default GridList;

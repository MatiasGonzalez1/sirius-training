import React, { useEffect, useState} from "react";
import PokeCard from "../Components/PokeCard";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import Request from "../utils/Request.js";
import { useParams } from "react-router-dom";


const OnePoke = () => {

  const [poke, setPoke] = useState([]);
  const [url, setUrl] = useState(Request);
  const {id} = useParams()

  useEffect(() => {
    axios.get(`${url}pokemon/${id}`)
    .then((res) => {
      setPoke(res.data)
       },[])
      });

  return (
   <>

      {/* Queda ver por que no renderiza la card */}
    <PokeCard  
              id= {poke.id} 
              name={poke.name[0].toUpperCase() + poke.name.slice(1)} 
              type={poke.types}
              imgSrc={poke.sprites.other.home.front_default}
              experience={poke.base_experience}
              hp={poke.stats[0].base_stat}
              atk={poke.stats[1].base_stat}
              def={poke.stats[2].base_stat}
              speed={poke.stats[5].base_stat}
              // evolution={poke.}
              ability={poke.abilities}
              href={`/poke/${poke.id}`}
              />
        {/* <Button variant='contained' href='/'>Return To Home</Button> */}
  </> )  
}

export default OnePoke
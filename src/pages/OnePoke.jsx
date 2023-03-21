import React, { useEffect, useState} from "react";
import PokeCard from "../Components/PokeCard";
import axios from "axios";
import {Grid } from "@mui/material";
import Request from "../utils/Request.js";
import { useParams } from "react-router-dom";
import ButtonToHome from "../Components/ButtonToHome";


const OnePoke = () => {

  const [poke, setPoke] = useState({});
  const [url, setUrl] = useState(Request);
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const {id} = useParams();

  useEffect(
    () => {
    axios.get(`${url}pokemon/${id}`)
    .then((res) => {
      setPoke(res.data)
      setData(res.data.stats)
      setImgData(res.data.sprites.other.dream_world.front_default)
    })
    }
    ,[url])
  
 return(
 <Grid>

      {/* Queda ver por que no renderiza la card */}
    <PokeCard  
              id= {poke?.id} 
              name={poke?.name} 
              type={poke?.types}
              imgSrc={imgData}
              data={data}
              ability={poke?.abilities}
              />
        <ButtonToHome/>
  </Grid> 
  )  
};

export default OnePoke;
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
  const [evolution, nextEvolution] = useState([]);
  const [finalEvolution, setFinalEvolution] = useState([]);

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

    useEffect(() => {
      const count = parseInt(id)+1
      const obtenerEvoluciones = async () => {
              const res = await axios.get(`${url}pokemon-species/${count}`);
              console.log(res.data)
              nextEvolution(res.data.name)
              // setFinalEvolution(res.data.chain.evolves_to[0].evolves_to[0].species.name)
      };
      obtenerEvoluciones()
      }, [])
  
 return(
 <Grid container justifyContent='center'>
    <Grid item width='100%'>
      <PokeCard  
              id= {poke?.id} 
              name={poke?.name} 
              type={poke?.types}
              imgSrc={imgData}
              data={data}
              ability={poke?.abilities}
              move={poke?.moves}
              evolution={evolution}
              // finalEvolution={finalEvolution}
              />
              </Grid>
        <Grid item>
          <ButtonToHome/>
          </Grid>
  </Grid> 
  )  
};

export default OnePoke;
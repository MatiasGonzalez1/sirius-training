import React, { useEffect, useState } from "react";
import PokeInfo from "../Components/PokeInfo";
import axios from "axios";
import { Grid } from "@mui/material";
import Request from "../utils/Request.js";
import { useParams } from "react-router-dom";
import ButtonToHome from "../Components/Button/ButtonToHome";
import Prueba from "../Components/Loader/Prueba.jsx";

const OnePoke = () => {
  const [poke, setPoke] = useState({});
  const [url, setUrl] = useState(Request);
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const { id } = useParams();
  const [evolution, nextEvolution] = useState([]);
  const [finalEvolution, setFinalEvolution] = useState([]);
  const [preEvolution, setPreEvolution] = useState([]);
  const [loader, setLoader] = useState(false);

   const fetch = (url)=>{
    axios.get(`${url}pokemon/${id}`).then((res) => {
      setPoke(res.data);
      setData(res.data.stats);
      setImgData(res.data.sprites.other.home.front_default? res.data.sprites.other.home.front_default : res.data.sprites.front_default );
      const species = res.data.species.url;
      const idSpecies = species.split("/")[6];
      // console.log(idSpecies);
      // console.log(species);
      axios.get(species).then((res) => {
        const resSpecies = res.data;
        const evolvesFrom = resSpecies.evolves_from_species.name;
        resSpecies.evolves_from_species.name == null ? setPreEvolution('') : setPreEvolution(evolvesFrom);
        const evolutionChain = resSpecies.evolution_chain.url;
        axios.get(evolutionChain).then((res) => {
          const resEvolution = res.data.chain
          nextEvolution(resEvolution.evolves_to[0].species.name);
          resEvolution.evolves_to[0].evolves_to[0].species == null ? setFinalEvolution('') : setFinalEvolution(resEvolution.evolves_to[0].evolves_to[0].species.name);
        });
      });
      setLoader(false);
    }
    );
  }


  useEffect(() => {

    setLoader(true);

    fetch(url);

    
  }, [url]);

if(loader){
  return <Prueba/>
} else
   return (
      <Grid item xs={12} md={12} lg={12}>
        <Grid> 
          <PokeInfo
          id={poke?.id}
          name={poke?.name}
          type={poke?.types}
          imgSrc={imgData}
          data={data}
          ability={poke?.abilities}
          move={poke?.moves}
          preEvolution={preEvolution}
          finalEvolution={finalEvolution}
        />
        <ButtonToHome/>
       </Grid>
      </Grid>
     
  );
};

export default OnePoke;

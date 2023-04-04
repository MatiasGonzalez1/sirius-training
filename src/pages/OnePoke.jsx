import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Request from "../utils/Request.js";
import PokeInfo from "../Components/PokeInfo";
import ButtonToHome from "../Components/Button/ButtonToHome";
import Prueba from "../Components/Loader/Prueba.jsx";

const OnePoke = () => {
  const [poke, setPoke] = useState({});
  const [url, setUrl] = useState(Request);
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [evolution, nextEvolution] = useState([]);
  const [finalEvolution, setFinalEvolution] = useState([]);
  const [preEvolution, setPreEvolution] = useState([]);
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

   const fetch = (url)=>{
    axios.get(`${url}pokemon/${id}`).then((res) => {
      setPoke(res.data);
      setData(res.data.stats);
      
      //toma otra imagen para mostrar si la principal no está disponible
      setImgData(res.data.sprites.other.home.front_default? res.data.sprites.other.home.front_default : res.data.sprites.front_default);
      const species = res.data.species.url;
      axios.get(species).then((res) => {

        res.data &&  setPreEvolution(res.data.evolves_from_species.name);
        const evolutionChain = res.data.evolution_chain.url;
        axios.get(evolutionChain).then((res) => {
          // console.log(res.data)
          const resEvolution = res.data.chain
          nextEvolution(resEvolution.evolves_to[0].species.name);
          resEvolution.evolves_to[0].evolves_to[0].species && setFinalEvolution(resEvolution.evolves_to[0].evolves_to[0].species.name);
        });
      });
      setLoader(false);
    }
    )
  }

  // useEffect(()=>{
  //   axios.get(`${url}pokemon/${id}`).then((res) => {
  //     const species = res.data.species.url;
  //     axios.get(species).then((res) => {
  //       const evolution = res.data.evolution_chain.url
  //       axios.get(evolution).then((res=>{
  //         (res.data.chain.evolves_to[0].species.name)
  //       }))
  //     });
  //   })
  // },[])

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
          preEvolution={preEvolution.length === 0 ? 'No tiene' : preEvolution}
          hrefPre={preEvolution}
          finalEvolution={finalEvolution === poke.name ? 'Finally' : finalEvolution}
          hrefFinal={finalEvolution}          
        />
        <ButtonToHome/>
       </Grid>
      </Grid>
     
  );
};

export default OnePoke;

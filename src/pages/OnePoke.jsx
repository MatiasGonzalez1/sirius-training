import React, { useEffect, useState } from "react";
import PokeCard from "../Components/PokeCard";
import axios from "axios";
import { Grid } from "@mui/material";
import Request from "../utils/Request.js";
import { useParams } from "react-router-dom";
import ButtonToHome from "../Components/ButtonToHome";

const OnePoke = () => {
  const [poke, setPoke] = useState({});
  const [url, setUrl] = useState(Request);
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const { id } = useParams();
  const [evolution, nextEvolution] = useState([]);
  const [finalEvolution, setFinalEvolution] = useState([]);
  const [preEvolution, setPreEvolution] = useState([]);

  useEffect(() => {
    axios.get(`${url}pokemon/${id}`).then((res) => {
      setPoke(res.data);
      setData(res.data.stats);
      setImgData(res.data.sprites.other.dream_world.front_default);
      const species = res.data.species.url;
      const idSpecies = species.split("/")[6];
      console.log(idSpecies);
      console.log(species);
      axios.get(species).then((res) => {
        const arr = res.data;
        console.log(res.data);
        // if(arr.evolves_from_species !== null) setPreEvolution(arr.evolves_from_species.name)
        arr.evolves_from_species &&
          setPreEvolution(arr.evolves_from_species.name);
        const evolutionChain = arr.evolution_chain.url;
        const chainId = evolutionChain.split("/")[6];
        // console.log(chainId)
        // console.log(evolutionChain)
        // console.log(evolutionChain)
        axios.get(evolutionChain).then((res) => {
          const foo = res.data.chain.evolves_to[0].species.name;
          // console.log(res.data.chain)
          // console.log(foo)
          // foo.map((i)=>(console.log(i)))
          // axios.get(ul)
          // .then((res)=>{
          //   const fin = res.data;
          //   console.log(fin)
        });
        // })
      });
    });
  }, [url]);

  // useEffect(() => {
  //   const count = parseInt(id)+1
  //   const obtenerEvoluciones = async () => {
  //           const res = await axios.get(`${url}pokemon-species/${count}`);
  //           console.log(res.data)
  //           nextEvolution(res.data.name)
  //           // setFinalEvolution(res.data.chain.evolves_to[0].evolves_to[0].species.name)
  //   };
  //   obtenerEvoluciones()
  //   }, [])

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12} lg={12} minWidth='500px'>
        <PokeCard
          id={poke?.id}
          name={poke?.name}
          type={poke?.types}
          imgSrc={imgData}
          data={data}
          ability={poke?.abilities}
          move={poke?.moves}
          preEvolution={preEvolution}
          // finalEvolution={finalEvolution}
        />
      </Grid>
      <Grid item>
        <ButtonToHome />
      </Grid>
    </Grid>
  );
};

export default OnePoke;

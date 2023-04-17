import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Request from "../utils/Request.js";
import PokeInfo from "../Components/PokeInfo";
import Prueba from "../Components/Loader/Prueba.jsx";
import ButtonReusable from "../Components/Button/ButtonReusable.jsx";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const OnePoke = () => {
  const [url, setUrl] = useState(Request);

  const [poke, setPoke] = useState({});
  const [data, setData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [evolution, nextEvolution] = useState([]);
  const [finalEvolution, setFinalEvolution] = useState();
  const [preEvolution, setPreEvolution] = useState();

  const [loader, setLoader] = useState(false);

  const [base, setBase] = useState([]);
  const [midEvo, setMidEvo] = useState([]);
  const [finEvo, setFinalEvo] = useState([]);

  const chain2 = [];
  const chain3 = [];

  const { id } = useParams();
  const navigate = useNavigate();

  const fetch = async (url) => {
    await axios
      .get(`${url}pokemon/${id}`)
      .then((res) => {
        setPoke(res.data);
        setData(res.data.stats);
        
        //toma otra imagen para mostrar si la principal no está disponible
        setImgData(
          res.data.sprites.other.home.front_default
            ? res.data.sprites.other.home.front_default
            : res.data.sprites.front_default
        );
        const species = res.data.species.url;
        axios.get(species).then((res) => {
          res.data && setPreEvolution(res.data.evolves_from_species.name);

          const evolutionChain = res.data.evolution_chain.url;
          axios
            .get(evolutionChain)
            .then((res) => {
              const resEvolution = res.data.chain;
              // nextEvolution(resEvolution.evolves_to[0].species.name);
              console.log(res.data);
              resEvolution.evolves_to[0].evolves_to[0].species &&
                setFinalEvolution(
                  resEvolution.evolves_to[0].evolves_to[0].species.name
                );
            })
            .catch((error) => {
              console.log(error);
            });
        });
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        navigate("*");
      });
  };

  useEffect(() => {
    axios.get(`${url}pokemon/${id}`).then((res) => {
      const species = res.data.species.url;
      axios.get(species).then((res) => {
        const evolution = res.data.evolution_chain.url;
        axios.get(evolution).then((res) => {
          const midleEvo = res.data.chain.evolves_to;
          const finalEvo = res.data.chain.evolves_to[0].evolves_to;
          nextEvolution(res.data.chain.evolves_to[0].species.name);
          setBase(res.data.chain.species.name);
          //evolution chain step 2
          midleEvo.forEach((element) => {
            chain2.push(element.species.name);
            const evoFilter = [...new Set(chain2)];
            setMidEvo(evoFilter);
          });

          //evolution chain step 3
  
          finalEvo.forEach((element)=>{
            chain3.push(element.species.name);
            const evoFilter = [...new Set(chain3)];
            setFinalEvo(evoFilter);

            console.log(chain3)
          })
        });
      });
    });
  }, []);

  useEffect(() => {
    setLoader(true);
    fetch(url);
  }, [url]);

  if (loader) {
    return <Prueba />;
  } else
    return (
      <Grid item>
        <Grid>
          <ButtonReusable text="Return to Home" hrefButton="/" />
         <Grid container justifyContent='space-around' paddingTop='50px'>
         {poke.id > 0 && poke.id !== 1 ? (
            <Button variant='outlined' sx={{color:'white',borderRadius:'0px 10px 0px 10px', border:'1px solid #fff'}} href={parseInt(poke.id) - 1}>
              <ArrowBackIos />
            </Button>
          ) : (
            ""
          )}
           {poke.id ? (
            <Button variant='outlined' sx={{color:'white',borderRadius:'10px 0px 10px 0px', border:'1px solid #fff'}}  href={parseInt(poke.id) + 1}>
              {" "}
              <ArrowForwardIos />
            </Button>
          ) : (
            ""
          )}
         </Grid>
          <PokeInfo
            id={poke?.id}
            name={poke?.name}
            type={poke?.types}
            imgSrc={imgData}
            data={data}
            ability={poke?.abilities}
            move={poke?.moves}
            preEvolution={preEvolution}
            hrefPre={preEvolution}
            // evolution={
            //   evolution === poke.name || evolution === preEvolution
            //     ? ""
            //     : evolution
            // }
            // hrefNext={evolution}
            finalEvolution={finalEvolution}
            hrefFinal={finalEvolution}
            chain1={base}
            chain2={midEvo}
            chainName={midEvo}
            chainFinal={finEvo  }
          />
         
        </Grid>
      </Grid>
    );
};

export default OnePoke;

import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
// import Request from "../utils/Request";
import { PokeInfo, ButtonReusable, Prueba } from "../Components";
import { InfoPokemon } from '../@types/pokemon';
import { useQuery } from "@apollo/client";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { GOTTA_CATCH_THEM_ONE } from '../apollo-client/pedido';
import NotFound from "./NotFound";



const OnePoke = () => {
  // const navigate = useNavigate(); 

  const { id } = useParams();
  const {data, loading, error} = useQuery(GOTTA_CATCH_THEM_ONE(id));  
  const pokeOne = data?.pokemon_v2_pokemon[0];
  // const [base, setBase] = useState([]);
  const pokeOneMore = data?.pokemon_v2_pokemonspecies;
  const numberOne:number = 1;


//   const [midEvo, setMidEvo] = useState([]);
//   const [finEvo, setFinalEvo] = useState([]);
  

  // console.log(pokeOne)
  if(error){
    return <NotFound/>
  }
  
  
  while(loading){
    return(
       <Grid item>
      <Prueba />
    </Grid>
    )
    }

    console.log(pokeOneMore[0].pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies)


  return (
      <Grid item>
        <Grid>
          <ButtonReusable text="Return to List" hrefButton="/poke" />
         <Grid container justifyContent='space-around' paddingTop='50px'>
         {pokeOne.id && pokeOne.id > 0 && pokeOne.id !== 1 ? (
            <Button variant='outlined' sx={{color:'white',borderRadius:'0px 10px 0px 10px', border:'1px solid #fff'}} href={`${pokeOne.id - numberOne}`}>
              <ArrowBackIos />
            </Button>
          ) : (
            ""
          )}
           {pokeOne.id ? (
            <Button variant='outlined' sx={{color:'white',borderRadius:'10px 0px 10px 0px', border:'1px solid #fff'}}  href={`${pokeOne.id + numberOne}`}>
              {" "}
              <ArrowForwardIos />
            </Button>
          ) : (
            ""
          )} 
         </Grid>
          
          <PokeInfo
            id={pokeOne?.id}
            name={pokeOne?.name}
            type={pokeOne?.pokemon_v2_pokemontypes}
            imgSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeOne.id}.png`}
            data={pokeOne?.pokemon_v2_pokemonstats}
            ability={pokeOne?.pokemon_v2_pokemonabilities}
            move={pokeOne?.pokemon_v2_pokemonmoves}
            // preEvolution={pokeOne?.pokemon_v2_pokemonspecy}
            // evolves_from_species_id={pokeOneMore[0].pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies}
            // evolution={
            //   evolution === one.name || evolution === preEvolution
            //     ? ""
            //     : evolution
            // }
            // hrefNext={evolution}
            // finalEvolution={finalEvolution}
            // hrefFinal={finalEvolution}
            // chain1={pokeOneMore[0].pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies[0].name}
            // chain1Id={pokeOneMore[0].pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies[0].id}
            chain2={pokeOneMore[0].pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies}
            // chainName={midEvo}
            //  chainFinal={finEvo}
            />
         
       </Grid>
      </Grid>
    );
};
// const OnePoke = () => {
//   const [url, setUrl] = useState(Request);

//   const [one, setPoke] = useState<InfoPokemon>(Object);
//   const [data, setData] = useState([]);
//   const [imgData, setImgData] = useState([]);
//   const [evolution, nextEvolution] = useState([]);
//   const [finalEvolution, setFinalEvolution] = useState();
//   const [preEvolution, setPreEvolution] = useState();

//   const [loader, setLoader] = useState(false);

//   const [base, setBase] = useState([]);
//   const [midEvo, setMidEvo] = useState([]);
//   const [finEvo, setFinalEvo] = useState([]);

//   const chain2: Array<string> = [];
//   const chain3: Array<string> = [];
//   const numberOne:number = 1;

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const fetch = async (url:string) => {
//     await axios
//       .get(`${url}pokemon/${id}`)
//       .then((res) => {
//         setPoke(res.data);
//         setData(res.data.stats);
        
//         //toma otra imagen para mostrar si la principal no está disponible
//         setImgData(
//           res.data.sprites.other.home.front_default
//             ? res.data.sprites.other.home.front_default
//             : res.data.sprites.front_default
//         );
//         const species = res.data.species.url;
//         axios.get(species).then((res) => {
//           res.data && setPreEvolution(res.data.evolves_from_species.name);

//           const evolutionChain = res.data.evolution_chain.url;
//           axios
//             .get(evolutionChain)
//             .then((res) => {
//               const resEvolution = res.data.chain;
//               // nextEvolution(resEvolution.evolves_to[0].species.name);
//               console.log(res.data);
//               resEvolution.evolves_to[0].evolves_to[0].species &&
//                 setFinalEvolution(
//                   resEvolution.evolves_to[0].evolves_to[0].species.name
//                 );
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         });
//         setLoader(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoader(false);
//         navigate("*");
//       });
//   };

//   useEffect(() => {
//     axios.get(`${url}pokemon/${id}`).then((res) => {
//       const species = res.data.species.url;
//       axios.get(species).then((res) => {
//         const evolution = res.data.evolution_chain.url;
//         axios.get(evolution).then((res) => {
//           const midleEvo = res.data.chain.evolves_to;
//           const finalEvo = res.data.chain.evolves_to[0].evolves_to;
//           nextEvolution(res.data.chain.evolves_to[0].species.name);
//           console.log(res.data.chain.species)
//           setBase(res.data.chain.species.name);
//           //evolution chain step 2
//           midleEvo.forEach((element:any) => {
//             chain2.push(element.species.name);
//             const evoFilter:any = [...new Set(chain2)];
//             setMidEvo(evoFilter);
//           });

//           //evolution chain step 3
  
//           finalEvo.forEach((element:any)=>{
//             chain3.push(element.species.name);
//             const evoFilter:any = [...new Set(chain3)];
//             setFinalEvo(evoFilter);

//             console.log(chain3)
//           })
//         });
//       });
//     });
//   }, []);

//   useEffect(() => {
//     setLoader(true);
//     fetch(url);
//   }, [url]);

//   if (loader) {
//     return <Prueba />;
//   } else
//     return (
//       <Grid item>
//         <Grid>
//           <ButtonReusable text="Return to Home" hrefButton="/" />
//          <Grid container justifyContent='space-around' paddingTop='50px'>
//          {poke.id && poke.id > 0 && poke.id !== 1 ? (
//             <Button variant='outlined' sx={{color:'white',borderRadius:'0px 10px 0px 10px', border:'1px solid #fff'}} href={`${poke.id - numberOne}`}>
//               <ArrowBackIos />
//             </Button>
//           ) : (
//             ""
//           )}
//            {poke.id ? (
//             <Button variant='outlined' sx={{color:'white',borderRadius:'10px 0px 10px 0px', border:'1px solid #fff'}}  href={(poke.id) + numberOne}>
//               {" "}
//               <ArrowForwardIos />
//             </Button>
//           ) : (
//             ""
//           )}
//          </Grid>
//           <PokeInfo
//             id={poke?.id}
//             name={poke?.name}
//             type={poke?.types}
//             imgSrc={imgData}
//             data={data}
//             ability={poke?.abilities}
//             move={poke?.moves}
//             preEvolution={preEvolution}
//             hrefPre={preEvolution}
//             // evolution={
//             //   evolution === poke.name || evolution === preEvolution
//             //     ? ""
//             //     : evolution
//             // }
//             // hrefNext={evolution}
//             finalEvolution={finalEvolution}
//             hrefFinal={finalEvolution}
//             chain1={base}
//             chain2={midEvo}
//             chainName={midEvo}
//             chainFinal={finEvo}
//           />
         
//         </Grid>
//       </Grid>
//     );
// };

export default OnePoke;

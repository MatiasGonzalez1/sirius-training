import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";
import { Button } from "@mui/material";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const Home = () => {
  const [poke, setPoke] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setPoke(res.data.results);
      console.log(res.data.results);
    });
  }, []);

  if (!poke) return <h1>Nada para ver</h1>;
  return (
    <div>
      <h1>Pokemon's List</h1>
      {poke.map((item) => (
        <PokeCard key={item.id} id={item.id} name={item.name} />
      ))}
      <Button variant="contained">Siguiente</Button>
    </div>
  );
};

export default Home;

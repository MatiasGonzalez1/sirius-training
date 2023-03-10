import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import axios from "axios";
import { Button, Grid } from "@mui/material";

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
    <Grid item xs={12}>
      <div>
        <h1 style={{textAlign: 'center'}}>Pokemon's List</h1>
        {poke.map((item) => (
          <PokeCard key={item.id} name={item.name} />
        ))}
        <Button variant="contained">Siguiente</Button>
      </div>
    </Grid>
  );
};

export default Home;

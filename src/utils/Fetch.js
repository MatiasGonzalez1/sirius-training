import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [poke, setPoke] = useState([]);

  //fetch es una funcion dentro de js a la que le pasas una url y devuelve una promesa

  //seteamos la dirección
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  //le pasamos cómo parámetro la url

  fetch(url)
    //después de pasarle la url hacemos un .then para trabajar con los datos, al primer .then le pasamos cómo parametro res (que significa 'respuesta' y que retorna la respuesta en formato json => res.json()) las promesas con fetch necesitan de éste paso para poder trabajar con los datos
    .then((res) => res.json())
    //en el segundo .then trabajo con la data convertida a json y le paso un nombre nuevo a éste .then cómo parametro y para controlar lo que devuelve hago un console.log de la data que me trae que en este caso trae el nombre y la url del pokemon
    .then((data) => data.results)
    //aclaro que está separado por cuestiones de una mejor lectura, todo ésto es lo mismo que hacer.
    //fetch(url).then((res)=>res.json()).then((data)=>console.log(data))
    //Ésto de llama (identación) y lo pueden ver acá https://medium.com/@sthefany/qu%C3%A9-es-la-indentaci%C3%B3n-c9471f3ae84f
    //De éstos resultados hago un nuevo .then que retorna un Promise.all

    //en éste ultimo .then la paso por parámetro la respuesta anterior y retorno un Promisse.all()
    .then((results) => {
      return Promise.all(
        results.map(async (item) => {
          const result = await fetch(item.url);
          const finalData = await result.json();
          setPoke(finalData)
        })
      )
    })

  return (
    <div>
      {poke.map((i)=>(<h1>A</h1>))}
    </div>
  );
};

export default Fetch;

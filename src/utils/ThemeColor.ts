/*Paleta de colores para los tipos de pokemon */

// const typeColor = {
//   bug: "#26de81",
//   steel: "#c7c6c6ce",
//   fighting: "#fe3b25ce",
//   dragon:"#ffeaa7",
//   electric: "#fed330",
//   fairy: "#ff0069",
//   fighting: "#30336b",
//   fire: "#f0932b",
//   flying: "#81ecec",
//   grass: "#00b894",
//   ground: "#efb549",
//   ghost: "#a55eea",
//   ice: "#74b9ff",
//   normal: "#95afc0",
//   poison: "#6c5ce7",
//   psychic: "#a29bfe",
//   rock: "#2d3436",
//   water: "#0190ff",
// };

const typeColorTransparent:object = {
  bug: "#18c26dd3",
  dragon:"#ebd58eca",
  electric: "#e8be28be",
  steel: "#c7c6c6ce",
  dark: "#201f1fc4",
  fighting: "#fe3b25ce",
  fairy: "#e80463d6",
  fightling: "#26295fce",
  fire: "#e18720d0",
  flying: "#67d9d9cb",
  grass: "#01a181b6",
  ground: "#d89e33c2",
  ghost:"#8945cdc3",
  ice: "#569ee6c6",
  normal: "#7da1b9b7",
  poison: "#5b4bd1bc",
  psychic: "#928cebcd",
  rock: "#1f2527cf",
  water: "#0184e8c8",
};



const typeColorToString = Object.entries(typeColorTransparent)

export const themeType:any = (name:string)=>{
  typeColorToString.forEach(element => {
    if(name === element[0]){
      console.log(element[1])
    }
  })
}

//   for(const element in typeColorToString){
//     if(name === element){
//       return typeColorTransparent[element];
//     }
//   }
// }
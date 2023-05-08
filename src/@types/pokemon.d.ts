// export type Pokemon = {
//   name: string,
//   types: Array<string>,
//   type: Array<string>,
//   imgSrc: any ,
//   id: number,
//   href: string,
//   preEvolution: string,
//   finalEvolution: string,
//   data: any,
// }

export type InfoPokemon = {
  name?: any |string,
  type?: any,
  types?: Array<string>,
  sprites?:any,
  ability?: Array<string>,
  href?: any,
  abilities?: Array<string>,
  move?: Array<string>,
  moves?: Array<string>,
  imgSrc?:any,
  id?: any,
  evolution?:string,
  finalEvolution?:any |string,
  hrefNext?:any |string,
  hrefFinal?:any |string,
  data?: any,
  chain1?:any |string,
  chain2?:Array<string>,
  chainFinal?:Array<string>,
  preEvolution?:any |string,
  hrefPre?:any|string,
  chainName?: any|string
  pokemon_v2_pokemontypes?: Array<object>
}
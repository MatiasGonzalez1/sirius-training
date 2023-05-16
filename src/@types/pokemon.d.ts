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
  name?: string,
  type?: Array<Object>,
  types?: Array<string>,
  sprites?:any,
  ability?: Array<string>,
  href?: string,
  abilities?: Array<string>,
  move?: Array<string>,
  moves?: Array<string>,
  imgSrc?:string,
  id?: number,
  evolution?:string,
  finalEvolution?:any |string,
  hrefNext?:any |string,
  hrefFinal?:any |string,
  data?: Array<Object>,
  chain1?:any |string,
  chain2?:Array<string>,
  chainFinal?:Array<string>,
  preEvolution?:any |string,
  evolves_from_species_id?:number,
  chainName?: any|string
  pokemon_v2_pokemontypes?: Array<object>
  chain1Id?: number
}
import { gql } from "@apollo/client";


export const GOTTA_CATCH_THEM_ALL =(page:any, cantidad:any) =>
  gql`
  query gottaCatchThemAll {
    pokemon_v2_pokemon(offset:${page}, limit: ${cantidad}){
      id
      name
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }

`;

export const GOTTA_CATCH_THEM_ALL_FILTER =(value:any) =>
  gql`
  query gottaCatchThemAllFilter {
    pokemon_v2_pokemon(where: {id:{_like:${value}}}) {
      id
      name
    }
  }
`;


export const GOTTA_CATCH_THEM_ONE = (id: any) => gql`
  query gottaCatchThemOne {
    pokemon_v2_pokemon(where: {id:{_eq:${id}}}) {
      id
      name
      pokemon_v2_pokemonstats{
        base_stat
        pokemon_v2_stat{
          name
        }
      }
      pokemon_v2_pokemonabilities{
      pokemon_v2_ability {
        name
      }	
      } 
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonmoves {
        pokemon_v2_move {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        evolves_from_species_id
        name
      }
    }
  }
  `;

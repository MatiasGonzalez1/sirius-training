import { gql } from "@apollo/client";


export const GOTTA_CATCH_THEM_FILTER =
  gql`
  query gottaCatchThemFilter($nameToSearch: String!) {
    pokemon_v2_pokemon(where: {name: {_ilike: $nameToSearch}}, order_by: {id: asc}) {
      name
      id
      weight
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
          id
        }
      }
    }
  }

`;

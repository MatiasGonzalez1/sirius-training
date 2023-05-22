import { gql } from '@apollo/client';


export const GOTTA_CATCH_THEM_FILTER = gql(/* GraphQL */ `
    query GetPokemons(
      $pageNumber: Int!, 
      $searchName: String, 
      $minWeight: Int!, 
      $maxWeight: Int!, 
      $color: String, 
      $isBaby: Boolean, 
      $type: [String]) {
        pokemons: pokemon_v2_pokemon(
          offset: $pageNumber, 
          limit: 20, 
          order_by: {id: asc}, 
          where: {weight: {_gte: $minWeight, _lte: $maxWeight}, 
                  name: {_ilike: $searchName}, 
                  pokemon_v2_pokemonspecy: {is_baby: {_eq: $isBaby}, 
                  pokemon_v2_pokemoncolor: {name: {_ilike: $color}}},
                  pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_in: $type}}}}) {
          name 
          id
          weight
          specy: pokemon_v2_pokemonspecy {
            is_baby
            color: pokemon_v2_pokemoncolor {
              id
              name
              }
            }
          types: pokemon_v2_pokemontypes {
            type: pokemon_v2_type {
              id
              name
              }
            }
        } 
        pokemonsCount: pokemon_v2_pokemon_aggregate (where: 
          {weight: {_gte: $minWeight, _lte: $maxWeight}, 
          name: {_ilike: $searchName}, 
          pokemon_v2_pokemonspecy: {is_baby: {_eq: $isBaby}, 
          pokemon_v2_pokemoncolor: {name: {_ilike: $color}}}
          pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_in: $type}}}}) {
            aggregate {
              count
            }
          }
    }
  `);

  export const GET_COLORS_TYPES = gql`
    query GetColorTypes {
      color: pokemon_v2_pokemoncolor {
        name
        id
      }
      type: pokemon_v2_type {
        id
        name
      }
      
    }
      
    
  `;
import { gql } from "@apollo/client";


export const GOTTA_CATCH_THEM_ALL =
  gql`
  query gottaCatchThemType($typeName) {
    pokemon_v2_type {
      id
      name
    }
  }

`;
import { ApolloClient, InMemoryCache,  gql } from '@apollo/client';

export const client = new ApolloClient({
  //servidor de GraphQl
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});




import { gql } from "@apollo/client";

// Define the GraphQL query
export const GetPokemon = gql`
  query GetPokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
    pokemon(id: $id, name: $name){
      id
      name
      attacks{
        fast{
          name
          type
          damage
        }
        special{
          name
          type
          damage
        }
      }
    }
    pokemon(id: $id, name: $name){
      id
      name
      evolutions{
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        evolutions {
          id
        }
        maxHP
        image
      }
    }
  }
`;

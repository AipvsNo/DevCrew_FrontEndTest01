import { gql } from '@apollo/client';

export const getCountries = gql`
  query {
    countries {
      name
      continent {
        name
      }
      emoji
    }
  }
`;
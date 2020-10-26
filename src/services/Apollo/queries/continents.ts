import gql from 'graphql-tag';

const continents = gql`
  query Continents($filter: ContinentFilterInput) {
    continents(filter: $filter) {
      code
      name
    }
  }
`;

export { continents };

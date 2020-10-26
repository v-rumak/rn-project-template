import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { API_URL } from '@env';
import * as queries from '@Services/Apollo/queries';

type Apollo = {
  createClient: ApolloClient<any>;
  queries: any;
  mutations: any;
};

const createClient = () => {
  //const authToken: string = '[your_token_here]';

  return new ApolloClient({
    link: new HttpLink({
      uri: API_URL,
      headers: {
        Authorization: ``, // 'authToken' for example
      },
    }),
    cache: new InMemoryCache(),
  });
};

const Apollo = {
  createClient,
  queries,
};

export { Apollo };

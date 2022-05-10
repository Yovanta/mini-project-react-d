import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://task-prak-graphql.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "qWoylsMyuF0gdqA1qz0u0KazKKSCH5OwIGTLStL53iiRqV44WM1KsHdCEUisduFY",
  },
});

const wsLink = new GraphQLWsLink( 
  createClient({
    url: "wss://task-prak-graphql.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "qWoylsMyuF0gdqA1qz0u0KazKKSCH5OwIGTLStL53iiRqV44WM1KsHdCEUisduFY",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;

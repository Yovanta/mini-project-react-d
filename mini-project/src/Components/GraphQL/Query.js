import { gql } from "@apollo/client";

export const getUserByLogin = gql`
    query UserByLogin($_password: String!, $_username: String!) {
    user(where: {password: {_eq: $_password}, username: {_eq: $_username}}) {
        id
        password
        username
    }
    }
`
import { gql } from "@apollo/client";

export const insertUserByRegister = gql`
  mutation insertUser(
    $email: String!
    $name: String!
    $password: String!
    $username: String!
  ) {
    insert_user(
      objects: {
        email: $email
        name: $name
        password: $password
        username: $username
      }
    ) {
      returning {
        email
        id
        name
        password
        username
      }
    }
  }
`;

export const updateUserProfile = gql`
mutation editProfile($id: uuid!, $email: String!, $name: String!, $password: String!, $username: String!) {
  update_user_by_pk(pk_columns: {id: $id}, _set: {email: $email, name: $name, password: $password, username: $username}) {
    email
    id
    name
    password
    username
  }
}

`;

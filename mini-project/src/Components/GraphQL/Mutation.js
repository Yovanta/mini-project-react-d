import { gql } from "@apollo/client";

export const insertUserByRegister = gql`
    mutation insertUser($email: String!, $name: String!, $password: String!, $username: String!) {
        insert_user(objects: {email: $email, name: $name, password: $password, username: $username}) {
            returning {
            email
            id
            name
            password
            username
            }
        }
    }
`
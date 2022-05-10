import { useMutation } from "@apollo/client";
import { insertUserByRegister } from "../GraphQL/Mutation";
import { getUserByLogin } from "../GraphQL/Query";

export default function useInsertUser() {
    
    const [insertDataUser, {loading: loadingMutationInsert}] = useMutation(insertUserByRegister, {
        refetchQueries: [getUserByLogin],
    });
    
    return {
        insertDataUser,
        loadingMutationInsert
    }

}
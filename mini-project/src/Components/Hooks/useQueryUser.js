import { getUserByLogin } from "../GraphQL/Query";
import { useLazyQuery } from "@apollo/client";

export default function useQueryUser() {
const [getUser, { data, loading, error }] = useLazyQuery(getUserByLogin);

return{
    getUser,
    data,
    loading,
    error,
}
}
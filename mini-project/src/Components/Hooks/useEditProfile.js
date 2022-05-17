import { useMutation } from "@apollo/client";
import { updateUserProfile } from "../GraphQL/Mutation";
import { getUserByLogin } from "../GraphQL/Query";

export default function useEditProfile() {
  const [updateDataUser, { loading: loadingUpdate }] = useMutation(
    updateUserProfile,
    {
      refetchQueries: [getUserByLogin],
    }
  );

  return {
    updateDataUser,
    loadingUpdate,
  };
}

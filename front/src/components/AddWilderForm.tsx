import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_WILDERS } from "../pages/HomePage";

const CREATE_WILDER = gql`
  mutation Mutation($name: String!) {
    createWilder(name: $name) {
      name
    }
  }
`;

const AddWilderForm = () => {
  const [wilderName, setWilderName] = useState("");
  const [createNewWilder, { data, loading, error }] = useMutation(
    CREATE_WILDER,
    { refetchQueries: [{ query: GET_WILDERS }] }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <input
        value={wilderName}
        onChange={(e) => {
          setWilderName(e.target.value);
        }}
      />
      <br />
      <button
        onClick={async () => {
          try {
            await createNewWilder({ variables: { name: wilderName } });
            console.log("data after mutation", data);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        Save Wilder
      </button>
    </div>
  );
};

export default AddWilderForm;

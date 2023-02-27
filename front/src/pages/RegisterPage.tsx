import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const REGISTER = gql`
  mutation Mutation($password: String!, $email: String!) {
    createUser(password: $password, email: $email) {
      email
    }
  }
`;

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [register] = useMutation(REGISTER, {
    variables: {
      email: username,
      password: password,
    },
    onCompleted() {
      navigate("/login");
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <div>
      Email{" "}
      <input
        placeholder={"email"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      Password{" "}
      <input
        placeholder={"password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          register();
        }}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterPage;

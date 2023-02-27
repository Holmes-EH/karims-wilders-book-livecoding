import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const GET_TOKEN = gql`
  query Query($password: String!, $email: String!) {
    getToken(password: $password, email: $email)
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loadToken] = useLazyQuery(GET_TOKEN, {
    variables: {
      email: username,
      password: password,
    },
    onCompleted(data) {
      console.log(data.getToken);
      localStorage.setItem("token", data.getToken);
      navigate("/");
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <div>
      Login{" "}
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
          loadToken();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;

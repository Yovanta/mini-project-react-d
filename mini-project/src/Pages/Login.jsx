import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useQueryUser from "../Components/Hooks/useQueryUser";
import Cookies from 'js-cookie'
import styled from "@emotion/styled";
import background from "../assets/backgroundLogin.png";

import Header from "../Components/Header";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isPaswordShown, setIsPasswordShown] = useState(false);
  const handleClickPassword = () => {
    setIsPasswordShown(!isPaswordShown);
  };

  const { getUser, data, loading, error } = useQueryUser();

  let navigation = useNavigate();

  useEffect(() => {
    if (data?.user.length === 1) {
      console.log("data: ", data);
      const user = JSON.stringify(data.user[0]);
      Cookies.set("user", user, {expires: 1, path: "/login" });
      return navigation("/home-login");
    }
  }, [data]);
  
  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handelInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickLogin = () => {
    getUser({
      variables: {
        _username: username,
        _password: password,
      },
    });
  };
  const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <WrapperLoginPage>
      <LoginPage style={backgroundImage}>
        <Header />
        <div>
          <WrapperInputLogin>
            <h1 className="text-5xl font-bold text-center m-4 mb-6">Login User</h1>

            <InputStyled
              type="text"
              placeholder="username"
              onChange={handleInputUsername}
            />
            <div className="password">
              <InputStyled
                type={isPaswordShown ? "text" : "password"}
                placeholder="password"
                onChange={handelInputPassword}
                />
              <button className="show-password" onClick={handleClickPassword}>
                {isPaswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>

            {data?.user.length === 1 ? (
              <p>Login Success</p>
            ) : (
              <p>Login Failed</p>
            )}

            <Button onClick={handleClickLogin} dataByLogin={data}>LOGIN</Button>

            <p>
              Don't have an account?{" "}
              <Link to="/register">
                <b>Register Now</b>
              </Link>
            </p>
          </WrapperInputLogin>
        </div>
      </LoginPage>
    </WrapperLoginPage>
  );
}

const LoginPage = styled.div`
  background-color: #d6e7ba;
  background-image: url("../assets/backgroundLogin.png");
  background-size: cover;
  background-position: center;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
`;

const WrapperLoginPage = styled.div`
  background-color: #adce74;
  margin: 0;
  padding: 20px;
  height: 100vh;

  @media (max-width: 900px) {
    height: 100%;
  }
  @media (max-width: 390px) {
    height: 100%;
  }
`;

const WrapperInputLogin = styled.div`
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  width: 40%;
  border-radius: 10px;
  row-gap: 20px;
  margin-left: 55%;
  animation: transititionIn 0.75s;

  @keyframes transititionIn {
    from {
      opacity: 0;
      transform: rotateX(-10deg);
    }
    to {
      opacity: 1;
      transform: rotateX(0);
    }
  }

  h1 {
    text-shadow: 2px 3px #636161;
    color: #fff76a;
    font-size: 2.5rem;
  }

  .show-password {
    cursor: pointer;
  }

  .password {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    width: 100%;
    margin-left: 20px;
  }

  @media (max-width: 900px) {
    width: 80%;
    margin-left: 20%;
  }

  @media (max-width: 390px) {
    width: 100%;
    margin-left: 0;

    p{
      text-align: center;
      font-size: 1rem;
    }
  }
`;

const InputStyled = styled.input`
  width: 80%;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
`;

const Button = styled.button`
  background-color: #fff76a;
  text-align: center;
  padding: 10px 0;
  width: 25%;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 900px) {
    padding: 10px 0;
    width: 40%;
  }
  @media (max-width: 390px) {
    padding: 10px 0;
    width: 50%;
  }
`;

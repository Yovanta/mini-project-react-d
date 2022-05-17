import React, { useState } from "react";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import background from "../assets/backgroundRegister.png";

import useInsertUser from "../Components/Hooks/useInsertUser";
import Header from "../Components/Header";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
  });

  const errorData = {
    email: "",
    nama: "",
    username: "",
    password: "",
  };

  const [isPaswordShown, setIsPasswordShown] = useState(false);

  const handleClickPassword = () => {
    setIsPasswordShown(!isPaswordShown);
  };

  const regexName = /^[A-Za-z ]*$/;
  const regexUsername = /^[a-zA-Z0-9]+$/;
  const RegexPassword =
    /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;

  const [error, setError] = useState(errorData.email);
  const [error1, setError1] = useState(errorData.nama);
  const [error2, setError2] = useState(errorData.username);
  const [error3, setError3] = useState(errorData.password);

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.includes("@")) {
        setError("");
      } else {
        setError("Email tidak sesuai dan harus memiliki @");
      }
    }

    if (name === "name") {
      if (!regexName.test(value)) {
        setError1("Nama harus berupa huruf");
      } else {
        setError1("");
      }
    }

    if (name === "username") {
      if (!regexUsername.test(value)) {
        setError2(
          "Username harus berupa huruf angka dan tidak boleh ada spasi"
        );
      } else {
        setError2("");
      }
    }
    if (name === "password") {
      if (!RegexPassword.test(value)) {
        setError3(
          "Password harus memiliki 8 karakter, 1 huruf besar, 1 huruf kecil, 1 angka dan 1 karakter spesial"
        );
      } else {
        setError3("");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const { insertDataUser, loadingMutationInsert } = useInsertUser();

  const insertUser = (e) => {
    if (data.email && data.name && data.password && data.username) {
      insertDataUser({
        variables: {
          id: uuidv4(),
          username: data.username,
          password: data.password,
          email: data.email,
          name: data.name,
        },
      });
      if (error === "" && error1 === "" && error2 === "" && error3 === "") {
        alert(
          `Register "${data.name}" berhasil, Silahkan Login untuk melanjutkan`
        );
      } else {
        alert("Registrasi Gagal!");
      }

      e.preventDefault();

      console.log(data);
      setData({
        username: "",
        password: "",
        email: "",
        name: "",
      });
    } else {
      alert("Email, name, password, and username not empty");
    }
  };

  const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  };

  return (
    <WrapperRegisterPage>
      <RegisterPage style={backgroundImage}>
        <Header />
        <div>
          <WrapperInputRegister onSubmit={() => insertUser()}>
            <h1 className="text-5xl font-bold text-center m-4 mb-6">
              Register User
            </h1>
            <InputStyled
              type="email"
              name="email"
              value={data.email}
              placeholder="yourname@example.com"
              onChange={handleChangeInput}
            />
            <span className="text-red-600 mb-2">{error}</span>
            <InputStyled
              type="text"
              name="name"
              value={data.name}
              placeholder="Your Name"
              onChange={handleChangeInput}
            />
            <span className="text-red-600 mb-2 text-center">{error1}</span>
            <InputStyled
              type="text"
              name="username"
              value={data.username}
              placeholder="Username_123"
              onChange={handleChangeInput}
            />
            <span className="text-red-600 mb-2 text-center">{error2}</span>
            <InputStyled
              type={isPaswordShown ? "text" : "password"}
              name="password"
              value={data.password}
              placeholder="password"
              onChange={handleChangeInput}
            />
            <button className="show-password" onClick={handleClickPassword}>
              {isPaswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
            <span className="text-red-600 mb-2 text-center">{error3}</span>

            <Link to="/login">
              <Button onClick={() => insertUser()}>REGISTER</Button>
            </Link>

            <p>
              Have an account?{" "}
              <Link to="/login">
                <b>Login Now</b>
              </Link>
            </p>
          </WrapperInputRegister>
        </div>
      </RegisterPage>
    </WrapperRegisterPage>
  );
}

const RegisterPage = styled.div`
  background-color: #d6e7ba;
  background-image: url("../assets/backgroundLogin.png");
  background-size: cover;
  background-position: center;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
`;

const WrapperRegisterPage = styled.div`
  background-color: #adce74;
  margin: 0;
  padding: 10px;
`;

const WrapperInputRegister = styled.div`
  color: black;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  width: 50%;
  border-radius: 10px;
  row-gap: 8px;
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
    position: absolute;
    top: 83%;
    left: 42%;
  }
  @media (max-width: 900px) {
    width: 80%;
    .show-password {
      top: 90%;
      left: 65%;
    }
  }

  @media (max-width: 390px) {
    width: 100%;
    margin-left: 0;

    .show-password{
      left: 70%;
      margin-top: 70px;

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
  padding: 10px 30px;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 900px) {
    padding: 10px 30px;
    width: 100%;
  }
  @media (max-width: 428px) {
    padding: 10px 30px;
    width: 100%;
  }
`;

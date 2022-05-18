import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "@emotion/styled";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

import useEditProfile from "../Components/Hooks/useEditProfile";
import HeaderLogin from "../Components/HeaderLogin";

export default function EditProfile() {
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    const userLogin = Cookies.get("user");
    const user = JSON.parse(userLogin);
    setDataUser(user);
  }, []);

  const { updateDataUser, loadingUpdate } = useEditProfile();
  const [data, setData] = useState({
    id: dataUser.id,
    username: dataUser.username,
    password: dataUser.password,
    email: dataUser.email,
    name: dataUser.name,
  });

  const [isPaswordShown, setIsPasswordShown] = useState(false);
  const handleClickPassword = () => {
    setIsPasswordShown(!isPaswordShown);
  };

  const _handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const _handleSubmitEdit = (e) => {
    e.preventDefault();
    if (data.name && data.username && data.email && data.password) {
      updateDataUser({
        variables: {
          id: dataUser.id,
          username: data.username,
          password: data.password,
          email: data.email,
          name: data.name,
        },
      });
      console.log(data);
      Cookies.set("user", JSON.stringify(data), {
        expires: 1,
        path: "/login",
      });

      alert("Update Success");

      setData({
        ...data,
        id: dataUser.id,
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
      });
    } else {
      alert("Please fill all field");
    }
  };

  return (
    <WrapperContactPage>
      <ContactPage>
        <HeaderLogin />
        <ContactContent>
          <ContactContentTitle>
            <h1>
              Edit <h1 style={{ color: "#FFF76A" }}>Profile</h1>
            </h1>

            <WrapperInputEdit onSubmit={() => _handleSubmitEdit()}>
              <label>Name</label>
              <InputStyled
                type="text"
                name="name"
                placeholder={dataUser.name}
                onChange={_handleChange}
                value={data.name}
              />
              <label>Username</label>
              <InputStyled
                type="text"
                name="username"
                placeholder={dataUser.username}
                onChange={_handleChange}
                value={data.username}
              />
              <label>Email</label>
              <InputStyled
                type="email"
                name="email"
                placeholder={dataUser.email}
                onChange={_handleChange}
                value={data.email}
              />
              <label>Password</label>

              <div className="password">
                <InputStyled
                  type={isPaswordShown ? "text" : "password"}
                  name="password"
                  placeholder={dataUser.password}
                  onChange={_handleChange}
                  value={data.password}
                />
                <button className="show-password" onClick={handleClickPassword}>
                  {isPaswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>

              <Link to="/account">
                <Button type="submit" onClick={_handleSubmitEdit}>
                  Update
                </Button>
              </Link>
              <Link to="/account">
                {" "}
                <Button>Cancel</Button>
              </Link>
            </WrapperInputEdit>
          </ContactContentTitle>
        </ContactContent>
      </ContactPage>
    </WrapperContactPage>
  );
}

const ContactPage = styled.div`
  background-color: #d6e7ba;
  background-image: url("../assets/backgroundLogin.png");
  background-size: cover;
  background-position: center;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
`;

const WrapperContactPage = styled.div`
  background-color: #adce74;
  margin: 0;
  padding: 18px;
`;
const ContactContent = styled.div`
  align-items: center;
`;

const ContactContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 50px;
  text-align: center;
  align-items: center;

  h1 {
    display: flex;
    font-size: 3rem;
    font-weight: bold;
    column-gap: 20px;
    text-shadow: 2px 3px #636161;
  }

  p {
    font-weight: bold;
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
  @media (max-width: 390px) {
    margin-bottom: 20px;

    h1 {
      display: flex;
      flex-direction: column;
    }
  }
`;

const WrapperInputEdit = styled.form`
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

  label {
    font-size: 1.2rem;
    font-weight: bold;
  }
  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 390px) {
    width: 100%;
    margin-left: 0;
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
  @media (max-width: 390px) {
    padding: 10px 30px;
    width: 100%;
  }
`;

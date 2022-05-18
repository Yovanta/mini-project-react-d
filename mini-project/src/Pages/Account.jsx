import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Cookies from "js-cookie";

import HeaderLogin from "../Components/HeaderLogin";

export default function Account() {
  let navigation = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userLogin = Cookies.get("user");
    const user = JSON.parse(userLogin);
    console.log(user);
    setUserData(user);
  }, []);

  const handleClickLogout = () => {
    Cookies.remove("user", { path: "/login" });
    return navigation("/login");
  };

  const handleClickEdit = () => {
    return navigation("/edit-profile");
  };

  return (
    <WrapperContactPage>
      <ContactPage>
        <HeaderLogin />
        <ContactContent>
          <ContactContentTitle>
            <h1>
              Welcome <h1 style={{ color: "#FFF76A" }}>{userData.name}</h1>
            </h1>
            <div>
              <p>{userData.username}</p>
              <p>{userData.email}</p>
            </div>
            <Button onClick={handleClickEdit}>edit profile</Button>

            <div>
              <button className="button-logout" onClick={handleClickLogout}>
                Logout
              </button>
            </div>
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
  padding: 40px;
  height: 100vh;

  @media (max-width: 900px) {
    height: 100%;
  }
  @media (max-width: 390px) {
    height: 100%;
  }
`;
const ContactContent = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    row-gap: 50px;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column-reverse;
  }
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

  .button-logout {
    background-color: red;
    border: 1px solid white;
    border-radius: 10px;
    padding: 5px 20px;
    color: white;
  }

  .button-logout:hover {
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

const Button = styled.button`
  background-color: #fff76a;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 20px;

  :hover {
    font-weight: bold;
  }
`;

const ContactContentDesc = styled.div`
  font-size: 1.2rem;
`;

const InfoContact = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

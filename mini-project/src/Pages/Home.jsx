import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import image from "../assets/image.png";

import Header from "../Components/Header";

export default function Home() {
  return (
    <WrapperHomePage className="h-screen">
      <HomePage>
        <Header />
        <HomeContent>
          <HomeContentTitle>
            <h1>
              <h1 style={{ color: "#FFF76A" }}>More Money</h1> In Your Pocket
            </h1>
            <HomeContentDesc>
              <h4>Less Worrying, More Earning</h4>
              <Link to="/login">
                <Button>Get Started</Button>
              </Link>
            </HomeContentDesc>
          </HomeContentTitle>
          <img src={image} alt="home" />
        </HomeContent>
      </HomePage>
    </WrapperHomePage>
  );
}

const HomePage = styled.div`
  background-color: #d6e7ba;
  background-image: url("../assets/backgroundLogin.png");
  background-size: cover;
  background-position: center;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
`;

const WrapperHomePage = styled.div`
  background-color: #adce74;
  margin: 0;
  padding: 18px;
`;

const Button = styled.button`
  background-color: #fff76a;
  text-align: center;
  padding: 10px 20px;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;

  @media (max-width: 900px) {
    padding: 10px 20px;
    width: 100%;
  }
  @media (max-width: 390px) {
    padding: 10px 20px;
    width: 100%;
  }
`;
const HomeContent = styled.div`
  display: flex;
  font-size: 3rem;
  margin: 35px 0;
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

const HomeContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 50px;
  text-align: center;

  h1 {
    display: flex;
    font-size: 3rem;
    font-weight: bold;
    column-gap: 10px;
    text-shadow: 2px 3px #636161;
  }
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
  @media (max-width: 390px) {
    margin-bottom: 20px;

    h1{
      display: flex;
      flex-direction: column;
      font-size: 2rem;
    }
  }
`;

const HomeContentDesc = styled.div`
  display: flex;
  font-size: 1.2rem;
  column-gap: 40px;
  text-align: center;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;

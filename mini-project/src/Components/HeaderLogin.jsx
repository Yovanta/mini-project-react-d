import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/Logo";
import styled from "@emotion/styled";

export default function HeaderLogin() {
  const [click, setClick] = useState(false);
  const handleClickMenu = () => {
    setClick(!click);
  };

  return (
    <Wrapper>
      <Link to="/home-login">
        <Logo />
      </Link>

      <HumbergerMenu onClick={() => handleClickMenu()}>
        {click ? <AiOutlineClose /> : <FaBars />}
      </HumbergerMenu>

      <WrapperMenu className={click ? "nav-menu show-nav-mobile" : "nav-menu"}>
        <WrapMenuList>
          <Link to="/home-login">
            <li>Home</li>
          </Link>
          <Link to="/about-login">
            <li>About</li>
          </Link>
          <Link to="/contact-us-login">
            <li>Contact Us</li>
          </Link>
        </WrapMenuList>
        <Link to='/account'><Button>Account</Button></Link>
      </WrapperMenu>
      <div></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 20%;

  .nav-menu {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  @media (max-width: 900px) {
    column-gap: 0;
  }
  @media (max-width: 390px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 50%;
      height: 240px;
      position: absolute;
      margin-top: 16%;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.show-nav-mobile {
      background-color: #adce74;
      border-radius: 10px;
      left: 40%;
      width: 50%;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
  }
`;

const WrapperMenu = styled.div`
  li {
    list-style: none;
    text-decoration: none;
  }
  li:hover {
    color: #fff76a;
    font-weight: bold;
    text-shadow: 0 0 3px #000;
    transition: all 0.2s ease-out;
  }

  @media (max-width: 390px) {
    position: relative;

    li:hover {
      color: #fff76a;
      font-weight: bold;
      text-shadow: 0 0 3px #000;
      transition: all 0.2s ease-out;
    }
  }
`;

const WrapMenuList = styled.ul`
  display: flex;
  column-gap: 40px;
  margin-top: 20px;
  margin-bottom: 80px;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    row-gap: 20px;
  }
`;
const HumbergerMenu = styled.div`
  display: none;
  color: #000;
  font-size: 40px;
  cursor: pointer;

  @media (max-width: 390px) {
    display: block;
    position: absolute;
    margin-top: 14px;
    right: 16%;
    transform: translate(-100%, 75%)
    float: right;
`;
const Button = styled.button`
  background-color: #fff76a;
  padding: 5px 20px;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 80px;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }

  @media (max-width: 390px) {
    margin-bottom: 0;
  }
`;

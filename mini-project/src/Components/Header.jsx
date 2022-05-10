import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Logo from '../assets/Logo'
import styled from '@emotion/styled'


export default function Header() {
  const [click, setClick] = useState(false)
  const handleClickMenu = () => {
    setClick(!click)
  }
  console.log(click);

  return (
    <Wrapper>
      <Link to='/'><Logo/></Link>

      <HumbergerMenu onClick={() => handleClickMenu()}>
        {click ? <AiOutlineClose />: <FaBars />}
      </HumbergerMenu>

      <WrapperAllMenu className={click ? 'nav-menu show-nav-mobile' : 'nav-menu'}>
        <WrapperMenu>
          <Link to='/'><li> Home</li></Link>
          <Link to='/about'><li> About</li></Link>
          <Link to='/contact-us'><li>Contact Us</li></Link>
        </WrapperMenu>
        <WrapperButton>
          <Link to='/login'><li>Login</li></Link>
          <Link to='/register'><Button>Sign up</Button></Link>
        </WrapperButton>
      </WrapperAllMenu>
      
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 20%;

  .nav-menu{
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  @media (max-width: 900px) {
    column-gap: 0;
  }
  @media(max-width: 768px) {
    .nav-menu{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 50%;
      height: 300px;
      position: absolute;
      margin-top: 12%;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;

    }

    .nav-menu.show-nav-mobile{
      background-color: #ADCE74;
      border-radius: 10px;
      left: 45%;
      width: 50%;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
  }
`
const WrapperMenu = styled.ul`
  display: flex;
  column-gap: 40px;
  margin-top: 20px;
  margin-bottom: 80px; 
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    row-gap: 20px;
}
`
const WrapperAllMenu = styled.div`
  li {
    list-style: none;
    text-decoration: none; 
  }
  li:hover {
    color: #FFF76A;
    font-weight: bold;
    text-shadow: 0 0 3px #000;
    transition: all 0.2s ease-out;
  }  
  @media (max-width: 768px) {
    position: relative;
    li:hover {
      color: #FFF76A;
      font-weight: bold;
      text-shadow: 0 0 3px #000;
      transition: all 0.2s ease-out;
    } 
  }
  
`

const Button = styled.button`
  background-color: #FFF76A;
  padding: 5px 20px;
  border-radius: 10px;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
const WrapperButton = styled.div`
  display: flex;
  column-gap: 40px;
  margin-bottom: 80px;
  margin-top: 15px;
  align-items: center;
  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      margin: 0;
  }
`

const HumbergerMenu = styled.div`
  display: none;
  color: #000;
  font-size: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    margin-top: 20px;
    right: 10%;
    transform: translate(-100%, 75%)
    float: right;
`
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Logo from '../assets/Logo'
import styled from '@emotion/styled'

export default function HeaderLogin() {
  const [click, setClick] = useState(false)
  const handleClickMenu = () => {
    setClick(!click)
  }
  console.log(click);

  return (
    <Wrapper>
      <Link to='/home-login'><Logo/></Link>

      <HumbergerMenu onClick={() => handleClickMenu()}>
        {click ? <AiOutlineClose />: <FaBars />}
      </HumbergerMenu>

      <WrapperMenu className={click ? 'nav-menu show-nav-mobile' : 'nav-menu'}>
        <Link to='/home-login'><li>Home</li></Link>
        <Link to='/about-login'><li>About</li></Link>
        <Link to='/contact-us-login'><li>Contact Us</li></Link>
      </WrapperMenu>
      <div></div>
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
      height: 200px;
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
  flex-direction: row;
  list-style: none;
  text-decoration: none;
  margin-top: 20px;
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
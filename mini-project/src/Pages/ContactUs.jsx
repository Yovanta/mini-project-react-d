import React, {useState} from 'react'
import styled from '@emotion/styled';
import { FaInstagram, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

import image from '../assets/image.png'

import Header from '../Components/Header';

export default function ContactUs() {
  return (
    <WrapperContactPage>
      <ContactPage>
        <Header/>
        <ContactContent>
          <ContactContentTitle>
            <h1>Contact Us  <h1 style={{color:'#FFF76A'}}>BudgetIn</h1></h1>
            <ContactContentDesc>
              <a href="https://www.instagram.com/" target={'_blank'}><InfoContact><FaInstagram/> budgetInWeb</InfoContact></a>
              <InfoContact><FaPhoneAlt/>+62-822-9090-3232</InfoContact>
              <a href="https://mail.google.com/" target={'_blank'}><InfoContact><FaRegEnvelope/>budgetinweb@gmail.com</InfoContact></a>
            </ContactContentDesc>
          </ContactContentTitle>
          <img src={image} alt="contact us" />
        </ContactContent>
      </ContactPage>
    </WrapperContactPage>
  )
}

const ContactPage = styled.div`
    background-color: #d6e7ba;  
    background-image: url('../assets/backgroundLogin.png');
    background-size: cover;
    background-position: center;      
    margin: 20px;
    border-radius: 10px;
    padding: 20px;
    
`

const WrapperContactPage = styled.div`
    background-color: #ADCE74;
    margin: 0;
    padding: 10px;
    
`
const ContactContent = styled.div`
  display: flex;
  font-size: 3rem;
  margin: 35px 0;
  column-gap: 150px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse; 
    row-gap: 50px;
  }
  @media (max-width: 428px) {
    display: inline-block;
  }

`

const ContactContentTitle  = styled.div`
display: flex;
flex-direction: column;  
justify-content: center;
row-gap: 50px;
text-align: center;
align-items: center;

h1{
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  column-gap: 20px;
  text-shadow: 2px 3px #636161;
}
@media (max-width: 900px) {
  margin-bottom: 20px;
}
@media (max-width: 428px) {
  margin-bottom: 20px;
}
`

const ContactContentDesc = styled.div`
font-size: 1.2rem;

`

const InfoContact = styled.div`
display: flex;
column-gap: 10px;
align-items: center;
`
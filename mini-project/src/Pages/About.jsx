import React, {useState} from 'react'
import styled from '@emotion/styled';
import image from '../assets/image.png'

import Header from '../Components/Header';

export default function About() {
  return (
    <WrapperAboutPage>
      <AboutPage>
        <Header/>
        <AboutContent>
          <AboutContentTitle>
            <h1>About <h1 style={{color:'#FFF76A'}}>BudgetIn </h1></h1>
            <AboutContentDesc>
              <h4>BudgetIn merupakan website yang berfungsi untuk mengelola keuangan pribadimu. Dengan kebiasaan mencatat semua pengeluaran bisa membantu kamu hidup lebih sejahtera, meskipun ada badai keuangan sekalipun.</h4>
            </AboutContentDesc>
          </AboutContentTitle>
          <img src={image} alt="about" />
        </AboutContent>
      </AboutPage>
    </WrapperAboutPage>
  )
}

const AboutPage = styled.div`
    background-color: #d6e7ba;  
    background-image: url('../assets/backgroundLogin.png');
    background-size: cover;
    background-position: center;      
    margin: 20px;
    border-radius: 10px;
    padding: 20px;
    
`

const WrapperAboutPage = styled.div`
    background-color: #ADCE74;
    margin: 0;
    padding: 10px;
    
`
const AboutContent = styled.div`
  display: flex;
  font-size: 3rem;
  margin: 35px 0;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse; 
    row-gap: 50px;
  }
  @media (max-width: 428px) {
    display: inline-block;
  }

`

const AboutContentTitle  = styled.div`
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

const AboutContentDesc = styled.div`
font-size: 1.2rem;

`
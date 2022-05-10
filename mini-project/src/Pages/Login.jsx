import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useQueryUser from '../Components/Hooks/useQueryUser'
import Cookies from "universal-cookie";
import styled from '@emotion/styled';
import background from '../assets/backgroundLogin.png'

import Header from '../Components/Header';

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { getUser, data, loading, error } = useQueryUser()

  let navigation = useNavigate()
  const cookies = new Cookies()

  useEffect(() => {
    if (data?.user.length === 1) {
      console.log('data: ', data);
      cookies.set("user", true, {path: "/login"} )
      return navigation('/home-login')
    }
  }, [data])

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
        _password: password
      }
    })
  }
  const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <WrapperLoginPage>
      <LoginPage style={backgroundImage}>
        <Header/>
        <div>

        <WrapperInputLogin>
          <h1>Login User</h1>

          <InputStyled type="text" placeholder="username" onChange={handleInputUsername} />
          <InputStyled type="password" placeholder="password" onChange={handelInputPassword}/>
          
          {data?.user.length === 1 ? <p>Login Success</p> : <p>Login Failed</p>}

          <Button onClick={handleClickLogin}>LOGIN</Button>

          <p>
            Don't have an account? <Link to='/register'><b>Register Now</b></Link>
          </p>
        </WrapperInputLogin>
        </div>
      </LoginPage>
    </WrapperLoginPage>
  )
}


const LoginPage = styled.div`
    background-color: #d6e7ba;  
    background-image: url('../assets/backgroundLogin.png');
    background-size: cover;
    background-position: center;      
    margin: 20px;
    border-radius: 10px;
    padding: 20px;
    
`

const WrapperLoginPage = styled.div`
    background-color: #ADCE74;
    margin: 0;
    padding: 10px;
    
`

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

@media (max-width: 900px) {
  width: 80%;
  margin-left: 20%;
}

`

const InputStyled = styled.input`
width: 80%;
    margin-bottom: 20px;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
`

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
  @media (max-width: 428px) {
    padding: 10px 0;
    width: 50%;
  }
`
import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './components/Display';
import GenerateBtn from './components/GenerateBtn';
import LengthSetting from './components/LengthSetting';
import Setting from './components/Setting';
import Title from './components/Title';

const Main = styled.main`
  background-color: #eabf9f;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 20px;
  border: 3px solid #0A1D37;
`;

const SettingsGroup = styled.ul`
width: 80%;
margin: 0 auto;
`

const TitleLine = styled.hr`
width: 100%;
border: none;
border-top: 3px solid #0A1D37;

`


function App() {

  const [password, setPassword] = useState('')

  function generatePassword() {



    console.log('generate');
  }

  function getLowerCase() {
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  }

  function getUpperCase() {
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  function getNumber() {
    const upperCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  }

  function getSymbol() {
    const upperCase = ['`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';',',','<',',','>','.','?','/', '\\']
  }

  return (
    <Main>
      <Title text='Password generator' color='#0A1D37' fontSize='2.4rem' margin='15px auto 10px'/>
      <TitleLine />
      <Display text={password} />
      <SettingsGroup>
        <LengthSetting text='Password Length' id='password-length'/>
        <Setting text='Upper case' />
        <Setting text='Lower case' />
        <Setting text='Numbers' />
        <Setting text='Symbols' />
      </SettingsGroup>
       <GenerateBtn func={generatePassword}/>
    </Main>
  );
}

export default App;

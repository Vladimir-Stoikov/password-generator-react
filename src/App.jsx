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

  const [password, setPassword] = useState('');

  function generatePassword() {

    let length = document.getElementById('password-length').value;

    if(length < 8) length = 8;
    if(length > 16) length = 16;

    const letter = {
      0: getUpperCase,
      1: getLowerCase,
      2: getNumber,
      3: getSymbol,
    }

    const valid = [getUpperCase(), getLowerCase(), getNumber(), getSymbol()];

    const result = [];

    while(result.length < length - valid.length) {
      result.push(letter[Math.floor(Math.random() * valid.length)]())
    }

    console.log('generate', ([...valid, ...result]), length);

    setPassword(shuffleWord([...valid, ...result]))
  }



  function shuffleWord(word, result = []) {
    
    if(word.length <= 0) return result.join('');

    const randInx = Math.floor(Math.random() * word.length);
    result.push(word[randInx]);
    word.splice(randInx, 1);

    return shuffleWord(word, result)
  }

  function getLowerCase() {
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }

  function getUpperCase() {
    const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return upperCase[Math.floor(Math.random() * upperCase.length)];
  }

  function getNumber() {
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return number[Math.floor(Math.random() * number.length)];
  }

  function getSymbol() {
    const symbol = ['`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';',',','<',',','>','.','?','/', '\\'];
    return symbol[Math.floor(Math.random() * symbol.length)];
  }

  return (
    <Main>
      <Title text='Password generator' color='#0A1D37' fontSize='2.4rem' margin='15px auto 10px'/>
      <TitleLine />
      <Display text={password} />
      <SettingsGroup>
        <LengthSetting text='Password Length' id='password-length'/>
        <Setting text='Upper case' id='setting-1'/>
        <Setting text='Lower case' id='setting-2'/>
        <Setting text='Numbers' id='setting-3'/>
        <Setting text='Symbols' id='setting-4'/>
      </SettingsGroup>
       <GenerateBtn func={generatePassword}/>
    </Main>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import Display from './components/Display';
import GenerateBtn from './components/GenerateBtn';
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
  height: 450px;
  border-radius: 20px;
`;

const SettingsGroup = styled.ul`
width: 80%;
margin: 0 auto;
`


function App() {
  return (
    <Main>
      <Display text='Current password' />
      <GenerateBtn />
      <Title text='Change Settings' color='#FAF3E0' fontSize='1.8rem' margin='0 auto 10px'/>
      <SettingsGroup>
        <Setting text='Upper case' />
        <Setting text='Lower case' />
        <Setting text='Numbers' />
        <Setting text='Symbols' />
      </SettingsGroup>
    </Main>
  );
}

export default App;

import React from 'react'
import styled from 'styled-components';

const DisplayScreen = styled.h1`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 70px;
  background-color: #FAF3E0;
  border-radius: 6px;
  color: #0A1D37;
  font-size: 1.6rem;
  border: 3px solid #0A1D37;
  @media(max-width: 440px) {
    font-size: 1.2rem;
  }
  @media(max-width: 350px) {
    font-size: 1rem;
  }
`

export default function Display({text}) {
  return (
    <DisplayScreen>{text}</DisplayScreen>
  )
}

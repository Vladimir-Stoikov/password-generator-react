import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: 100%;
  border: none;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  color: #FAF3E0;
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  background-color: #a0745e;
  transition: background-color .2s ease;
  border-top: 3px solid #0A1D37;
  &:hover {
    background-color: #c59c87;
  }
  &:active {
    background-color: #d6af9c;
  }
  @media(max-width: 350px) {
    font-size: 1.4rem;
    height: 45
  }
`

export default function GenerateBtn({func}) {
  return (
    <Button onClick={func}>Generate</Button>
  )
}

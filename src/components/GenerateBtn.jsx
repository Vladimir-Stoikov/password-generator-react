import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  border: none;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  color: #FAF3E0;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  background-color: #a0745e;
  transition: background-color .2s ease;
  &:hover {
    background-color: #c59c87;
  }
  &:active {
    background-color: #d6af9c;
  }
`

export default function GenerateBtn({func}) {
  return (
    <Button onClick={func}>GenerateBtn</Button>
  )
}

import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  bottom: -0.5%;
  left: 0;
  right: 0;
  height: 60px;
  border: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #FAF3E0;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  background-color: #B68973;
  transition: background-color .2s ease;
  &:hover {
    background-color: #c59c87;
  }
  &:active {
    background-color: #d6af9c;
  }
`

export default function GenerateBtn() {
  return (
    <Button>GenerateBtn</Button>
  )
}

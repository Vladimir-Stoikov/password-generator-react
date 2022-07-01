import React from 'react'
import styled from 'styled-components';

const DisplaySection = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  width: 350px;
  height: 70px;
  margin: 20px auto;
  background-color: #FAF3E0;
  border-radius: 6px;
  color: #0A1D37;
  font-size: 1.6rem;
  border: 3px solid #0A1D37;
`

export default function Display({text}) {
  return (
    <DisplaySection>{text}</DisplaySection>
  )
}

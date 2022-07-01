import React from 'react'
import styled from 'styled-components';

const DisplaySection = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 350px;
height: 70px;
margin: 20px auto;
text-align: center;
background-color: #FAF3E0;
border-radius: 6px;
color: #0A1D37;
`

export default function Display({text}) {
  return (
    <DisplaySection>{text}</DisplaySection>
  )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './Title'

const SettingLi = styled.li`
  margin: 10px 0;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Label = styled.label`
  width: 40px;
  height: 15px;
  background-color: #0A1D37;
  border-radius: 7.5px;
  position: relative;
  transition: background-color .2s ease-out;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: -5%;
    width: 25px;
    height: 25px;
    background-color: #a0745e;
    border-radius: 50%;
    transition: left .2s ease-out;
  }
  input[type="checkbox"]:checked + & {
    background-color: #faf3e0;
  &::after { 
    left: 60%;
    }
  }
`

const Input = styled.input`
display: none;
`

export default function Setting({text, id}) {

  const [checkBool, setCheckBool] = useState(true)

  function handler() {
    setCheckBool(prev => !prev);
  }

  return (
    <SettingLi>
      <Title text={text} />
      <Input type="checkbox" checked={checkBool} id={id} name={id + 'label'} onChange={handler}/>
      <Label name={id + 'label'} onClick={handler}/>
    </SettingLi>
  )
}

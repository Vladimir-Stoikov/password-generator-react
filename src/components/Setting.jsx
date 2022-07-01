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

export default function Setting({text, id}) {

  const [checkBool, setCheckBool] = useState(true)

  function handler() {
    setCheckBool(prev => !prev);
  }

  return (
    <SettingLi>
      <Title text={text} />
      <input type="checkbox" checked={checkBool} id={id} onChange={handler}/>
    </SettingLi>
  )
}

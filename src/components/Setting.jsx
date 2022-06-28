import React from 'react'
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

export default function Setting({text}) {
  return (
    <SettingLi>
      <Title text={text} />
      <input type="checkbox" />
    </SettingLi>
  )
}

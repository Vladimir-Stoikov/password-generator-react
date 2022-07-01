import React, { useState, useEffect } from 'react'
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

const InputField = styled.input`
width: 35px;
height: 30px;
text-align: center;
border: none;
&[type=number]::-webkit-inner-spin-button,
&[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
-moz-appearance: none;
appearance: none; 
}

`

export default function LengthSetting({text, id}) {

  const [field, setField] = useState(8);

  function changeField(e) {
    setField(e.target.value);
  }
 
  return (
    <SettingLi>
      <Title text={text} />
      <InputField type="number" id={id} value={field} onChange={changeField} min='8' max='16'/>
    </SettingLi>
  )
}

import React from 'react'
import styled from 'styled-components'

const WarningSection = styled.mark`
  display: ${({display}) => display ? 'block' : 'none'};
  margin: 10px auto 0;
  font-size: 1.4rem;
  color: red;
  background-color: transparent;
  @media(max-width: 350px) {  
    font-size: 1.1rem;
    margin: 4px auto 0;
  }
`

export default function Warning({text}) {
  return (
    <WarningSection display={text}>{text}</WarningSection>
  )
}

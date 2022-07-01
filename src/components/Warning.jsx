import React from 'react'
import styled from 'styled-components'

const WarningSection = styled.section`
  display: ${({display}) => display ? 'block' : 'none'};
  margin: 10px auto 0;
  font-size: 1.4rem;
  color: red;
`

export default function Warning({text}) {
  return (
    <WarningSection display={text}>{text}</WarningSection>
  )
}

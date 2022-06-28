import React from 'react'
import styled from 'styled-components'

const TitleH3 = styled.h3`
  color: ${({color}) => color ? color : '#1E212D'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.5rem'};
  margin: ${({margin}) => margin ? margin : '0'};
`

export default function Title({text, color, fontSize, margin}) {
  return (
    <TitleH3 color={color} fontSize={fontSize} margin={margin}>{text}</TitleH3>
  )
}



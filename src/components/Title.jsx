import React from 'react'
import styled from 'styled-components'

const TitleH3 = styled.h3`
  color: ${({color}) => color ? color : '#a0745e'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.5rem'};
  margin: ${({margin}) => margin ? margin : '0'};
  ${({style}) => style ? style : ''};
  @media(max-width: 440px) {
    font-size: ${({fontSize}) => fontSize ? '1.8rem' : '1.5rem'};
  }
  @media(max-width: 350px) {
    font-size: ${({fontSize}) => fontSize ? '1.5rem' : '1.2rem'};
  }
`

export default function Title({text, color, fontSize, margin, style}) {
  return (
    <TitleH3 color={color} fontSize={fontSize} margin={margin} style={style}>{text}</TitleH3>
  )
}



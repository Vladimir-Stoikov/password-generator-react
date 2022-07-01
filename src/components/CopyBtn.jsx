import React from 'react'
import styled from 'styled-components'

const CopyButton = styled.button`
  position: absolute;
  right: 25px;
  top: 103.5px;
  width: 30px;
  height: 64px;
  border: none;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  font-size: 1.5rem;
  background-color: #a0745e;
  &:hover {
    background-color: #b88e7a;
  }
  &:active {
    background-color: #c49e8d;
  }
`

export default function CopyBtn({id, func}) {
  return (
    <CopyButton id={id} onClick={func}>📋</CopyButton>
  )
}
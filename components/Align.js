import React from 'react'
import { Container } from 'react-bootstrap'

const Align = (props) => {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default Align
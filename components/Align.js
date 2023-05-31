import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

const Align = (props) => {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default Align
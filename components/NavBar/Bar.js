import React from 'react'
import { Navbar } from 'react-bootstrap'

const Bar = (props) => {
    return (
        <Navbar bg="transparent" className='d-flex justify-content-center align-items-center mb-4 gap-3 border-bottom border-4 border-dark'>
            {props.children}
        </Navbar>
    )
}

export default Bar
import React from 'react'
import { Navbar } from 'react-bootstrap'

const Bar = (props) => {
    return (
        <Navbar bg="light" className='d-flex justify-content-center align-items-center mb-4 gap-2'>
            {props.children}
        </Navbar>
    )
}

export default Bar
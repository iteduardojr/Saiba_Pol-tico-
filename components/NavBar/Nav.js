import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const Nav = (props) => {
    return (
        <NavDropdown title={props.Name} id="navbarScrollingDropdown">
            {props.children}
        </NavDropdown>
    )
}

export default Nav
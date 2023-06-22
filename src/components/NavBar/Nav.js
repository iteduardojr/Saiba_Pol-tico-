import React, { useState } from 'react'
import { Button, ButtonGroup, Dropdown, NavDropdown } from 'react-bootstrap'

const Nav = (props) => {

    return (
        <Dropdown as={ButtonGroup} className='border border-primary'>
        <Button variant="transparent">{props.Name}</Button>
        <Dropdown.Toggle split variant="primary" id="dropdown-custom-1" />
        <Dropdown.Menu className="bg-light">
            {props.children}
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default Nav
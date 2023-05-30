import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const NavItem = (props) => {
  return (
    <NavDropdown.Item href={props.Href}>{props.Item}</NavDropdown.Item>
  )
}

export default NavItem
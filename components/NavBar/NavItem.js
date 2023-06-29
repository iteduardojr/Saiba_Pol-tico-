import React from 'react'
import { Dropdown } from 'react-bootstrap'

const NavItem = (props) => {
  return (
    <Dropdown.Item href={props.Href}>{props.Item}</Dropdown.Item>
  )
}

export default NavItem
import React from 'react'
import Az from '../A-z/Az'

import Style from './Style.module.css'

const Navbar = (props) => {
  return (
    <>
      <nav className={Style.nav}>
        <Az Titulo="Test"/>
      </nav>
    </>
  )
}

export default Navbar
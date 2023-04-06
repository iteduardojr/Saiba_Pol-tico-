import React from 'react'
import Az from '../A-z/Az'

import Style from './Style.module.css'

const Navbar = () => {
  return (
    <>
        <nav className={Style.nav}>
            <Az Titulo="A-Z" />
            <Az Titulo="Partido" />
            <Az Titulo="Tipo" />
            <Az Titulo="Lotação" />
        </nav>
    </>
  )
}

export default Navbar
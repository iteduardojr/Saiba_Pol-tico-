import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'

import Style from './Header.module.css'

import { IoSearch, IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className={Style.Div1_Principal}>
          <Image src={Logo} alt="Logo_Saiba-Politico" className={Style.Image}/>

          <section className={Style.Div1_Section}>
              <input type={'search'} placeholder="Pesquise o deputado aqui" />
              <div className={Style.Div1_Section_Icon}>
                <IoSearch />
              </div>
          </section>
      </header>
    </>
  )
}

export default Header
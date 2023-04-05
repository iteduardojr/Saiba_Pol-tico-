import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import Logo_Camara from '../../public/Logo-CamaraDeputados.svg'

import Style from './Style.module.css'

const Footer = () => {
  return (
    <footer className={Style.Footer}>
        <div className={Style.imagens}>
            <Image src={Logo} alt="Logo_Saiba-Politico" className={Style.Image}/>
            <Image src={Logo_Camara} alt="Logo_Saiba-Politico" className={Style.ImageCamara}/>
        </div>
    </footer>
  )
}

export default Footer
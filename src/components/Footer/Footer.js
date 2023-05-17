import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import Logo_Camara from '../../public/Logo-CamaraDeputados.svg'

import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

import Style from './Style.module.css'

const Footer = () => {
  return (
    <footer className={Style.Footer}>
      <section className={Style.Imagens}>
        <Image src={Logo} alt="Logo_Saiba-Politico" className={Style.Image}/>
        <Image src={Logo_Camara} alt="Logo_Saiba-Politico" className={Style.ImageCamara}/>
      </section>

      <section className={Style.Infos}>
        <h1>Desenvolvedores</h1>
        <div className={Style.NameInfos}>
          <table className={Style.Table}>
            <tr>
              <td>Brenno Alves</td>
              <td>21214290011</td>
              <td className={Style.Td}><IoLogoGithub /><IoLogoLinkedin /><IoLogoWhatsapp /></td>
            </tr>
            <tr>
              <td>Brenno Alves</td>
              <td>21214290011</td>
              <td className={Style.Td}><IoLogoGithub /><IoLogoLinkedin /><IoLogoWhatsapp /></td>
            </tr>
            <tr>
              <td>Brenno Alves</td>
              <td>21214290011</td>
              <td className={Style.Td}><IoLogoGithub /><IoLogoLinkedin /><IoLogoWhatsapp /></td>
            </tr>
          </table>
          <table className={Style.Table}>
            <tr>
              <td>Brenno Alves</td>
              <td>21214290011</td>
              <td className={Style.Td}><IoLogoGithub /><IoLogoLinkedin /><IoLogoWhatsapp /></td>
            </tr>
            <tr>
              <td>Brenno Alves</td>
              <td>21214290011</td>
              <td className={Style.Td}><IoLogoGithub /><IoLogoLinkedin /><IoLogoWhatsapp /></td>
            </tr>
          </table>
        </div>
      </section>
    </footer>
  )
}

export default Footer
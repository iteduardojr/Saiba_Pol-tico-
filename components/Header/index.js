import React, { useState } from 'react'
import Style from './style.module.css'
import Logo from '../../public/Logo.png'
import { IoSearch, IoMenu } from 'react-icons/Io5'
import Image from 'next/image'
import Sidebar from './Sidebar'

const Index = () => {

    

    return (
        <header className={Style.Header}>
            <Sidebar />
            {/* <button className={Style.Menu}></button> */}
            <Image src={Logo} className={Style.Image} />
            <div className={Style.divInput}>
                <input className={`${Style.Padrao} ${Style.input}`} type='search' placeholder='Pesquise o deputado aqui' ></input>
                <button className={`${Style.Button} ${Style.Padrao}`}><IoSearch className={Style.CorSVG} /></button>
            </div>
        </header>
    )
}

export default Index
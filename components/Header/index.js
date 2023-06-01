import React, { useState } from 'react'
import Style from './style.module.css'
import Logo from '../../public/Logo.png'
import { IoSearch, IoMenu } from 'react-icons/Io5'
import Image from 'next/image'
import { Offcanvas } from 'react-bootstrap'
import Gambiarra from './Gambiarra'
import Link from 'next/link'

const Index = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className={Style.Header}>
            <Gambiarra>
                <button className={Style.Menu} variant="primary" onClick={handleShow}>
                    <IoMenu />
                </button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Link href='/deputados'>Meliantes</Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </Gambiarra>

            <Image src={Logo} className={Style.Image} alt='Logo Site'/>
            <div className={Style.divInput}>
                <input className={`${Style.Padrao} ${Style.input}`} type='search' placeholder='Pesquise o deputado aqui' ></input>
                <button className={`${Style.Button} ${Style.Padrao}`}><IoSearch className={Style.CorSVG} /></button>
            </div>
        </header>
    )
}

export default Index
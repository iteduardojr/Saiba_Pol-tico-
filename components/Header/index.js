import React, { useState } from 'react'
import Style from './style.module.css'
import Logo from '../../public/Logo.png'
import { IoSearch, IoMenu } from 'react-icons/Io5'
import Image from 'next/image'
import { Offcanvas } from 'react-bootstrap'
import Gambiarra from './Gambiarra'
import Link from 'next/link'
import ModalLogin from './ModalLogin'

const Index = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className={Style.Header}>
            {props.input ? (
                <>
                    <button className={Style.Menu} variant="primary" onClick={handleShow}> <IoMenu /> </button>
                    <Gambiarra>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Link href='/deputados'>Meliantes</Link>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Gambiarra>

                    <Link href='/'><Image src={Logo} className={Style.Image} alt='Logo Site' /></Link>

                    <div className={Style.divInput}>
                        <input className={`${Style.Padrao} ${Style.input}`} type='search' placeholder='Pesquise o deputado aqui' ></input>
                        <button className={`${Style.Button} ${Style.Padrao}`}><IoSearch className={Style.CorSVG} /></button>
                    </div>
                    <ModalLogin />
                </>
                ) : (
                <>
                    <button className={Style.Menu} variant="primary" onClick={handleShow}> <IoMenu /> </button>
                    <Gambiarra>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Link href='/deputados'>Meliantes</Link>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Gambiarra>

                    <div className={Style.noProps}>
                        <Link href='/'><Image src={Logo} className={Style.Image} alt='Logo Site' /></Link>
                        <ModalLogin />
                    </div>
                </>
            )}

        </header>
    )
}

export default Index
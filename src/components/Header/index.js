import React, { useState } from 'react'
import Logo from '../../public/Logo.png'
import { IoSearch, IoMenu } from 'react-icons/Io5'
import Image from 'next/image'
import { Offcanvas } from 'react-bootstrap'
import Link from 'next/link'
import ModalLogin from './ModalLogin'


const Index = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <div className='flex'>

                <div className='flex gap-5 items-center'>
                    <IoMenu className='h-14 w-10' onClick={handleShow} />
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><Link className='no-underline text-current hover:text-amber-400' href={"/"}>Menu</Link></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Link href='/deputados' className='no-underline text-current hover:text-amber-400'>Meliantes</Link>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Link href={"/"}><Image src={Logo} height={70} width={180} alt='Logo Site' /> </Link>
                    <div className='flex items-center gap-1'>
                        <input className='h-7 w-80' type='search' placeholder='Pesquise o deputado aqui' />
                        <Link href={"#"} className='no-underline'><IoSearch /></Link>
                    </div>
                    <div className=''>
                        <ModalLogin />
                    </div>
                </div>





            </div>
        </>
    )
}

export default Index
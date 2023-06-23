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
            <header className='fixed w-full py-1 px-32 sm:px-0 md:px-36 lg:px-36 z-10 font-bold flex justify-between items-center bg-gradient-to-r from-blue-700 via-sky-700 to-green-700'>

                <div className='flex items-center gap-6'>
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
                </div>
                <div>
                    <div class="absolute focus:pointer-events-auto">
                        <svg class="absolute text-slate-400 h-8 w-6 ms-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <input type="text" placeholder="Procurar" className='rounded-lg w-96 h-8 ps-5 me-5 ' />
                </div>
                <div className=''>
                    <ModalLogin />
                </div>

            </header>
        </>
    )
}

export default Index
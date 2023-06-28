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
            <header className='sticky top-0 w-full py-1 z-10 font-bold flex justify-between items-center bg-gradient-to-r from-blue-700 via-sky-700 to-green-600'>

                <div className='flex items-center gap-6'>
                    <IoMenu className='h-14 w-12 cursor-pointer text-green-400' onClick={handleShow} />
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title><p className='no-underline text-current'>Menu</p></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Link href='/deputados' className='no-underline text-current hover:text-green-400'>Meliantes</Link>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Link href={"/"}><Image src={Logo} height={100} width={150} alt='Logo Site' /> </Link>
                </div>
                <div className=''>
                    <div class="absolute focus:pointer-events-auto">
                        <svg class="absolute text-slate-400 h-8 w-6 ms-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <input
                        className="rounded-3xl w-[15rem] md:w-[25rem] bg-gray-200 outline-none py-1 px-40 text-lg focus:px-7  focus: duration-500"
                        type="text"
                        placeholder="Procurar"
                    />
                </div>
                <div className='me-5'>
                    <ModalLogin />
                </div>

            </header>
        </>
    )
}

export default Index
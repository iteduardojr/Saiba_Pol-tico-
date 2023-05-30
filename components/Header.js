import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Container, Navbar, Offcanvas } from 'react-bootstrap'
import { IoApps } from "react-icons/io5";

const Header = () => {

    // const Navbar = [
    //     {}
    // ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Button variant="primary" onClick={handleShow}> <IoApps /> </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><IoApps /> Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="d-grid gap-2">
                            <Link className='btn btn-dark' size='lg' href='/deputados'>Deputados</Link>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Brand href="#">Saiba-Politica</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
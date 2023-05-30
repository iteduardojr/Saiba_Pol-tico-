import Link from 'next/link';
import React, { useState } from 'react'
import { Button, Container, Form, InputGroup, Navbar, Offcanvas } from 'react-bootstrap'
import { IoApps, IoSearch } from "react-icons/io5";

const Header = () => {

    // const Navbar = [
    //     {}
    // ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar bg="primary" expand="lg">
            <Container fluid>
                <Button variant="outline-light" onClick={handleShow} className='mr-4'> <IoApps /> </Button>
                <Navbar.Brand href="#">Saiba-Politica</Navbar.Brand>

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

                <InputGroup>
                    <Form.Control placeholder="Pesquise o deputado aqui" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <Button variant="outline-light" id="button-addon2"> <IoSearch /> </Button>
                </InputGroup>
            </Container>
        </Navbar>
    )
}

export default Header
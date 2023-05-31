import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { IoMenu } from 'react-icons/Io5'
import Align from '../Align'
import Style from './style.module.css'

const Sidebar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Align>
                <button className={Style.Menu} variant="primary" onClick={handleShow}>
                    <IoMenu />
                </button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </Align>
        </>
    )
}

export default Sidebar
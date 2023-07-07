import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { IoLogInSharp } from 'react-icons/Io5';


const ModalLogin = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow}> <IoLogInSharp className='text-[36px] text-blue-700 hover:text-green-400' /> </button>
            

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Logar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Usuário / Email</Form.Label>
                                <Form.Control type="email" placeholder="Usuário/Email" autoFocus />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha" autoFocus />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Close </Button>
                        <Button variant="primary" onClick={handleClose}> Logar </Button>
                    </Modal.Footer>
                </Modal>
            </>
        
    )
}

export default ModalLogin
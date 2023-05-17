import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'

import Style from './Header.module.css'

import { IoSearch, IoMenu } from "react-icons/io5";
import { Form, InputGroup, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark' className='px-5'>
        {/* <Container> */}
        <Navbar.Brand href="/" className='d-flex align-items-center grid gap-2'>
          <Image alt="Logo" src={Logo} width="150" height="auto" className="d-inline-block align-top" />{''}
        </Navbar.Brand>

        <Navbar.Toggle />

        <InputGroup className='border border-success border-5'>
          <Form.Control
            placeholder="Pesquise o deputado aqui"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text className='bg-success' id="basic-addon2"><IoSearch /></InputGroup.Text>

        </InputGroup>
          <Navbar.Toggle />
        {/* </Container> */}
      </Navbar>

      <header className={Style.Div1_Principal}>
        <Image src={Logo} alt="Logo_Saiba-Politico"  />

        <section className={Style.Div1_Section}>
          <input type={'search'} placeholder="Pesquise o deputado aqui" />
          <div className={Style.Div1_Section_Icon}>
            <IoSearch />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header
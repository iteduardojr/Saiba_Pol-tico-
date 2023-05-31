import React, { useState } from 'react'
import Align from '../../components/Align'
import Header from '../../components/Header'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Pagination, Row } from 'react-bootstrap'
import Link from 'next/link'
import Bar from '../../components/NavBar/Bar'
import Nav from '../../components/NavBar/Nav'
import NavItem from '../../components/NavBar/NavItem'

const index = ({ openDeputados }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 45;
    const totalPages = Math.ceil(openDeputados.length / resultsPerPage);

    const paginate = page => setCurrentPage(Math.min(Math.max(page, 1), totalPages));

    const currentResults = openDeputados.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    console.log(openDeputados)
    return (
        <>
            <Header />
            <Bar>                                                                                                   {/* NavBar engloba = {Nav, NavItem} */}
                <Nav Name='A-Z'>                                                                                    {/* Dropdown */}
                    <NavItem Href='//' Item='Test'/>                                                                {/* itens do Dropdown */}
                    <NavItem Href='//' Item='Test'/>                                                                {/* itens do Dropdown */}
                    <NavItem Href='//' Item='Test'/>                                                                {/* itens do Dropdown */}
                    <NavItem Href='//' Item='Test'/>                                                                {/* itens do Dropdown */}
                </Nav>
                <Nav Name='A-Z'>                                                                                    {/* Dropdown */}
                    <NavItem Href='//' Item='Test'/>                                                                {/* itens do Dropdown */}
                    <NavItem Href='//' Item='Test'/>                                                                {/* itens do Dropdown */}
                    <NavItem Href='//' Item='Test'/>                                                                {/* itens do Dropdown */}
                    <NavItem Href='//' Item='Test'/>                                                                {/* itens do Dropdown */}
                </Nav>
            </Bar>
            <Align>
                <Row md={5}>
                    {currentResults.map(item => (
                        <Col key={item.id}>
                            <Card bg='primary' text='light' className="mb-4" style={{ height: '21em' }}>
                                <Card.Body className='text-center'>
                                    <Link href={'/deputados/' + item.id}>
                                        <Card.Img variant="top" src={item.urlFoto} />
                                    </Link>
                                        <Card.Text>{item.nome}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className='d-flex justify-content-center'>
                    <Pagination>
                        <Pagination.First onClick={() => paginate(1)} />
                        <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
                        {[...Array(totalPages)].map((_, i) => (
                            <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>{i + 1}</Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => paginate(currentPage + 1)} />
                        <Pagination.Last onClick={() => paginate(totalPages)} />
                    </Pagination>
                </div>
            </Align>
        </>
    )
}

export default index


export async function getServerSideProps(context) {

    const deputados = await apiDeputados.get('/deputados')
    const openDeputados = deputados.data.dados

    return {
        props: { openDeputados }, // will be passed to the page component as props
    }
}
import React, { useState } from 'react'
import Align from '../../components/Align'
import Header from '../../components/Header'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Pagination, Row } from 'react-bootstrap'
import Link from 'next/link'
import Bar from '../../components/NavBar/Bar'
import Nav from '../../components/NavBar/Nav'
import NavItem from '../../components/NavBar/NavItem'
import { capitalizeWords } from '../../components/CapitalizeWords'

const index = ({ openDeputados }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 45;
    const totalPages = Math.ceil(openDeputados.length / resultsPerPage);

    const paginate = page => setCurrentPage(Math.min(Math.max(page, 1), totalPages));

    const currentResults = openDeputados.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );

    const itens = [
        { id: 1, nomeItem: null, nome: 'A-Z', href: null },
        { id: 2, nomeItem: null, nome: '0-1', href: null },
        { id: 3, nomeItem: null, nome: '0-1', href: null },
        { id: 4, nomeItem: null, nome: '0-1', href: null }
    ]

    console.log(itens)

    console.log(openDeputados)
    return (
        <>
            <Header />
            <Bar>
                {itens.map(item => {
                    <Nav Name={item.nome}>
                        <NavItem Href={item.href} Item={item.nomeItem} />

                    </Nav>
                })}
            </Bar>
            <Align>
                <Row md={5}>
                    {currentResults.map(item => (
                        <Col key={item.id}>
                            <Card bg='primary' text='light' className="mb-4" >
                                <Card.Body className='text-center'>
                                    <Link href={'/deputados/' + item.id}>
                                        <Card.Img variant="top" src={item.urlFoto} alt={item.nome + item.siglaPartido}/>
                                    </Link>
                                    <Card.Text>{capitalizeWords(item.nome)}</Card.Text>
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
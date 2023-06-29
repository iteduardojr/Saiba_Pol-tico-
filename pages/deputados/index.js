import React, { useState } from 'react'
import Align from '../../components/Align'
import Header from '../../components/Header'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Bar from '../../components/NavBar/Bar'
import Nav from '../../components/NavBar/Nav'
import NavItem from '../../components/NavBar/NavItem'
import { capitalizeWords } from '../../components/CapitalizeWords'
import InfiniteScroll from 'react-infinite-scroll-component'

const index = ({ openDeputados }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 30;
    const totalPages = Math.ceil(openDeputados.length / resultsPerPage);

    const [DeputadosPaginated, setDeputadosPaginated] = useState([]);

    const fetchMoreData = () => {
        setTimeout(() => {
            setDeputadosPaginated(DeputadosPaginated.concat(
                openDeputados.slice(
                    (currentPage - 1) * resultsPerPage,
                    currentPage * resultsPerPage
                )
            ));
            setCurrentPage(currentPage + 1);
        }, 500);
    };

    console.log(openDeputados)
    return (
        <>
            <Header input/>
            <Bar>
                <Nav Name='Letras'>
                    <NavItem Href='#' Item='A-Z' />
                </Nav>
            </Bar>
            <Align>
                <InfiniteScroll dataLength={DeputadosPaginated.length} next={fetchMoreData} hasMore={currentPage <= totalPages} loader={<h4>Carregando...</h4>} >
                    <Row md={5}>
                        {DeputadosPaginated.map(item => (
                            <Col key={item.id}>
                                <Card bg='primary' text='light' className="mb-4 rounded-5" >
                                    <Card.Body className='text-center'>
                                        <Link href={'/deputados/' + item.id}>
                                            <Card.Img className='rounded-4' variant="top" src={item.urlFoto} alt={item.nome + item.siglaPartido} />
                                        </Link>
                                        <Card.Text>{capitalizeWords(item.nome)}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </InfiniteScroll>
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
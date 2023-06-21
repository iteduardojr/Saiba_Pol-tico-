import React, { useState, useEffect } from 'react'
import Align from '../../components/Align'
import Header from '../../components/Header'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Bar from '../../components/NavBar/Bar'
import Nav from '../../components/NavBar/Nav'
import NavItem from '../../components/NavBar/NavItem'
import { capitalizeWords } from '../../components/CapitalizeWords'


const index = ({ openDeputados }) => {

    const [followers, setFollowers] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)

    React.useEffect(() => {

        const ENDPOINT = 'https://dadosabertos.camara.leg.br/api/v2/deputados'
        const URL = `${ENDPOINT}?pagina=${currentPage}&itens=10&ordem=ASC&ordenarPor=nome`
        fetch(URL)
            .then((response) => response.json())
            .then((newFollowers) => setFollowers((prevFollowers) => [...prevFollowers, ...newFollowers.dados]))
    }, [currentPage])

    React.useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                console.log('Elemento esta visivel')
                setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
            }
        });

        intersectionObserver.observe(document.querySelector('#sentinela'));

        return () => intersectionObserver.disconnect();
    }, [])


    return (
        <>
            <Header />
            <Bar>
                <Nav Name='Letras'>
                    <NavItem Href='#' Item='A-Z' />
                    <NavItem Href='#' Item='Z-A' />
                    
                </Nav>
            </Bar>
            <Align>
                <Row md={5}>
                    <h2>{currentPage}</h2>
                    {followers.map(item => (
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
                    <div className='container font-bold text-center' id='sentinela'>
                        <h1>Fim da Lista de Deputados</h1>
                    </div>

            </Align>
        </>
    )
}

export default index


/*export async function getServerSideProps(context) {

    const deputados = await apiDeputados.get('/deputados')
    const openDeputados = deputados.data.dados

    return {
        props: { openDeputados }, // will be passed to the page component as props
    }
}*/
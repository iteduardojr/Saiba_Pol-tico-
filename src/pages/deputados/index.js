import React, { useState, useEffect } from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Button, ButtonGroup, Card, Col, Container, Dropdown, Row } from 'react-bootstrap'
import Link from 'next/link'
import Footer from '../../components/Footer'



const index = () => {

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


            <div className='pt-20 pb-3 text-center'>
                <Dropdown as={ButtonGroup} className='bg-white h-9'>
                    <Button variant="transparent"><span className='text-[15px]'>Letras</span></Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-custom-1" />
                    <Dropdown.Menu className="bg-light">
                        <Dropdown.Item href='#'>A-Z</Dropdown.Item>
                        <Dropdown.Item href='#'>Z-A</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Container>
                <Row md={5}>
                    {followers.map(item => (
                        <Col key={item.id}>
                            <Card bg='primary' text='light' className="mb-4 rounded-5" >
                                <Card.Body className='text-center'>
                                    <Link href={'/deputados/' + item.id}>
                                        <Card.Img className='rounded-4' variant="top" src={item.urlFoto} alt={item.nome + item.siglaPartido} />
                                    </Link>
                                    <Card.Text>{item.nome}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className='container font-bold text-center' id='sentinela'>
                    <h1>Fim da Lista de Deputados</h1>
                </div>
                
            </Container>
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
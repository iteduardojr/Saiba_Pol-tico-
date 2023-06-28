import React, { useState, useEffect } from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Button, ButtonGroup, Card, Col, Container, Dropdown, Row } from 'react-bootstrap'
import Link from 'next/link'
import Footer from '../../components/Footer'



const index = () => {

    const [deputados, setDeputados] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [search, setSearch] = useState("")

    const searchLowerCase = search.toLowerCase() //Buscar letras caixa alto e baixa
    const items = deputados.filter((item) => item.nome.toLowerCase().includes(searchLowerCase))

    React.useEffect(() => {

        const ENDPOINT = 'https://dadosabertos.camara.leg.br/api/v2/deputados'
        const URL = `${ENDPOINT}?pagina=${currentPage}&itens=10&ordem=ASC&ordenarPor=nome`
        fetch(URL)
            .then((response) => response.json())
            .then((newDeputados) => setDeputados((prevDeputados) => [...prevDeputados, ...newDeputados.dados]))
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


            <div className='pt-2 pb-3 text-center'>
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


                <div className='text-center pb-3'>
                    <input className='px-10'
                        type='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                </div>


                <Row md={5}>
                    {items.map(item => (
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
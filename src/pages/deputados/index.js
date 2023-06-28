import React, { useState, useEffect } from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Button, ButtonGroup, Card, Col, Container, Dropdown, Row } from 'react-bootstrap'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { IoSearch } from 'react-icons/Io5'



const ListaDeputados = () => {

    const [deputados, setDeputados] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState("A-Z")


    const searchLowerCase = search.toLowerCase(); //Buscar letras caixa alto e baixa
    const items = deputados
        .filter((item) => item.nome.toLowerCase().includes(searchLowerCase))
        .sort((a, b) => {
            // Ordena os deputados de acordo com a ordem atual
            if (order === "A-Z") {
                return a.nome.localeCompare(b.nome); // Compara os nomes em ordem crescente
            } else {
                return b.nome.localeCompare(a.nome); // Compara os nomes em ordem decrescente
            }
        });


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

    // Cria uma função para alterar a ordem quando o usuário clicar em um dos itens do dropdown
    const handleOrderChange = (newOrder) => {
        setOrder(newOrder);
    };

    return (
        <>

            <Header />

            <div className='container sticky top-0 pt-[13px] z-10 flex items-center justify-center'>
                <IoSearch className="absolute text-slate-400 me-96 h-8 w-6 ms-1" />
                <input
                    className="rounded-3xl shadow-md shadow-black w-[15rem] md:w-[25rem] bg-gray-200 outline-none py-1 px-40 text-lg focus:px-7  focus: duration-500"
                    type='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Procurar"
                />
            </div>
            <div className='pt-2 pb-3 text-center'>
                <Dropdown as={ButtonGroup} className='bg-white h-9'>
                    <Button variant="transparent"><span className='text-[15px]'>Letras</span></Button>
                    <Dropdown.Toggle split variant="success" id="dropdown-custom-1" />
                    <Dropdown.Menu className="bg-light">
                        <Dropdown.Item href='#' onClick={() => handleOrderChange("A-Z")}>A-Z</Dropdown.Item>
                        <Dropdown.Item href='#' onClick={() => handleOrderChange("Z-A")}>Z-A</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Container>


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
                    <h3 className='text-white bg-blue-900 bg-opacity-80 mx-[400px] rounded-full'>Fim da Lista de Deputados</h3>
                </div>

            </Container>
            <Footer />
        </>
    )
}

export default ListaDeputados


/*export async function getServerSideProps(context) {

    const deputados = await apiDeputados.get('/deputados')
    const openDeputados = deputados.data.dados

    return {
        props: { openDeputados }, // will be passed to the page component as props
    }
}*/
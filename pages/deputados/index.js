import React from 'react'
import Align from '../../components/Align'
import Header from '../../components/Header'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Row } from 'react-bootstrap'

const index = ({ openDeputados }) => {

    console.log(openDeputados)
    return (
        <>
            <Header />
            <Align>
                <Row md={5}>
                    {openDeputados.map(item => (
                        <Col key={item.id}>
                            <Card bg='primary' text='light' className="mb-2" >
                                <Card.Header>{item.nome.toUpperCase()}</Card.Header>
                                <Card.Body>
                                    <Card.Img variant="top" src={item.urlFoto} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
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
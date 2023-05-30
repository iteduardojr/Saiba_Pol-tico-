import React, { useState } from 'react'
import { Card, Col, Pagination, Row } from 'react-bootstrap';

const Paginate = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 50;
    const totalPages = Math.ceil([props.Variavel].length / resultsPerPage);

    const paginate = page => setCurrentPage(Math.min(Math.max(page, 1), totalPages));

    const currentResults = props.Variavel.slice(
        (currentPage - 1) * resultsPerPage,
        currentPage * resultsPerPage
    );
    return (
        <>
            {currentResults.map(item => (
                <Col key={item.id}>
                    <Card bg='primary' text='light' className="mb-4" style={{ height: '23em' }}>
                        <Card.Header>{item.nome}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={item.urlFoto} />
                        </Card.Body>
                    </Card>
                </Col>
            ))}

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
        </>
    )
}

export default Paginate
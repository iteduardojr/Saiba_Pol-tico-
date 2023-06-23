import React from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Container, Row } from 'react-bootstrap'

const idDeputados = ({ infoDep }) => {


  return (
    <>
      <div className='pt-24'>
        <Container>
          <Row>
            <Col md={3}>
              <Card.Img style={{ Width: '100%', height: '100%' }} variant="top" src={infoDep.ultimoStatus.urlFoto} />

            </Col>
            <Col md={9}>
              <h3>Informações do Deputado</h3>
              <p><strong>Nome: </strong>{infoDep.nomeCivil}</p>
              <p><strong>E-mail: </strong>{infoDep.ultimoStatus.email}</p>
              <p><strong>Data de Nascimento </strong>{infoDep.dataNascimento}</p>
              <p><strong>Local onde nasceu: </strong>{infoDep.municipioNascimento}-{infoDep.ufNascimento}</p>
              <p><strong>Partido: </strong>{infoDep.ultimoStatus.siglaPartido}</p>
              <p><strong>Escolaridade: </strong>{infoDep.escolaridade}</p>
              <p><strong>Situacao: </strong>{infoDep.ultimoStatus.situacao}</p>


            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default idDeputados

export async function getServerSideProps(context) {

  // ID DO DEPUTADOS(A)
  const id = context.params.id

  // REFERENCIA DEPUTADO ÚNICO
  const deputado = await apiDeputados.get('/deputados/' + id)
  const infoDep = deputado.data.dados


  // RETORNA VARIÁVEIS DECLARADAS
  return {
    props: { infoDep }, // will be passed to the page component as props
  }
}
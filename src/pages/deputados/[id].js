import React from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Container } from 'react-bootstrap'

const idDeputados = ({pullDeputado}) => {

    console.log(pullDeputado)
  return (
    <>
    
    <Container>
      
    </Container>
    </>
  )
}

export default idDeputados

export async function getServerSideProps(context) {

    // ID DO DEPUTADOS(A)
    const id = context.params.id

    // REFERENCIA DEPUTADO ÚNICO
    const deputado = await apiDeputados.get('/deputados/' + id)
    const pullDeputado = deputado.data.dados


    // RETORNA VARIÁVEIS DECLARADAS
    return {
        props: { pullDeputado }, // will be passed to the page component as props
    }
}
import React from 'react'
import Align from '../../components/Align'
import Header from '../../components/Header'
import apiDeputados from '../../services/apiDeputados'

const idDeputados = ({pullDeputado}) => {

    console.log(pullDeputado)
  return (
    <>
    <Header />
    <Align>
      
    </Align>
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
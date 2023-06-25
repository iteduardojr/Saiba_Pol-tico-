import React from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import Chart from 'react-google-charts'


const idDeputados = ({ infoDep, despDep }) => {

  const groupedData = despDep.reduce((acc, item) => {
    if (acc[item.tipoDespesa]) {
      acc[item.tipoDespesa] += item.valorDocumento;
    } else {
      acc[item.tipoDespesa] = item.valorDocumento;
    }
    return acc;
  }, {});

  const dadosCharts = [
    ["Descrição", "Valor"],
    ...Object.entries(groupedData),
  ];

  const optionsCharts = {
    title: "Valores Gastos com dinheiro Público",
    legend: "true",
    legend: {textStyle: {color: 'white', fontSize: 16}},
    pieSliceText: "number",
    pieHole: 0.5,
    color: "white",
    is3D: true,
    backgroundColor: "transparent",
    height: 500,
    titleTextStyle: {color: 'white', fontSize: 20, position: 'top'},
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };
  const groupedData2 = despDep.reduce((acc, item) => {
    if (acc[item.tipoDespesa]) {
      acc[item.tipoDespesa] += item.valorDocumento;
    } else {
      acc[item.tipoDespesa] = item.valorDocumento;
    }
    return acc;
  }, {});

  const tableCharts = [
    ["Descrição", "Valor"],
    ...Object.entries(groupedData2),
  ];

  const optionsTable = {
    allowHtml: true,
    showRowNumber: true,


  };

  const formatters = [
    {
      type: "NumberFormat",
      column: 1,
      options: {
        prefix: "R$",
      },
    },
  ];

  return (
    <>
      <div className='pt-24'>
        <Container>

          <Row>
            <h3 className='text-center p-2 text-white bg-blue-700 bg-opacity-90 rounded-3xl'>Informações do Deputado</h3>
          </Row>
          <Row className='md:px-32 sm:px-1'>

            <Col md={8} className='text-white font-semibold text-lg'>
              <div className='bg-blue-700 bg-opacity-70 p-3 rounded-3xl'>
                <p><strong>Nome: </strong>{infoDep.nomeCivil}</p>
                <p><strong>E-mail: </strong>{infoDep.ultimoStatus.email}</p>
                <p><strong>Data de Nascimento </strong>{infoDep.dataNascimento}</p>
                <p><strong>Local onde nasceu: </strong>{infoDep.municipioNascimento}-{infoDep.ufNascimento}</p>
                <p><strong>Partido: </strong>{infoDep.ultimoStatus.siglaPartido}</p>
                <p><strong>Escolaridade: </strong>{infoDep.escolaridade}</p>
                <p><strong>Situacao: </strong>{infoDep.ultimoStatus.situacao}</p>
              </div>
            </Col>
            <Col md={3}>
              <Card.Img className='rounded-[50px]' style={{ height: "100%" }} variant='middle' src={infoDep.ultimoStatus.urlFoto} />

            </Col>
          </Row>

          <Row>
            <h3 className='text-center p-2 mt-5 text-white bg-blue-700 bg-opacity-90 rounded-3xl'>Grafico de Gastos</h3>
          </Row>

          <Row>

            <Col md={4} className='pt-5 text-white'>
              <h3>Despesas</h3>
              <Table bordered hover size="sm" className='text-white font-semibold bg-green-700 bg-opacity-80'>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {despDep.map(item => (
                    <tr key={item.codDocumento}>
                      <td>{item.dataDocumento}</td>
                      <td>{item.tipoDespesa}</td>
                      <td>{item.valorDocumento}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

            </Col>
            <Col md={8} className='pt-5 bg text-white'>
              <h3>Gráfico</h3>

              <Chart
                chartType="PieChart"
                data={dadosCharts}
                options={optionsCharts}
                width={"100%"}
                height={"450px"}
                className='text-white bg-green-700 bg-opacity-80'
              />
              <Chart
                chartType="Table"
                width="100%"
                height="400px"
                data={tableCharts}
                options={optionsTable}
                formatters={formatters}
                className='text-black font-semibold'

              />

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
  const despesa = await apiDeputados.get('/deputados/' + id + '/despesas')

  const infoDep = deputado.data.dados
  const despDep = despesa.data.dados


  // RETORNA VARIÁVEIS DECLARADAS
  return {
    props: { infoDep, despDep }, // will be passed to the page component as props
  }
}
import React, { useEffect } from 'react'
import apiDeputados from '../../services/apiDeputados'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import Chart from 'react-google-charts'
import Charts from "chart.js";

const idDeputados = ({ infoDep, despDep, despDep21, despDep22, despDep23 }) => {

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
    title: "Valores Gastos com dinheiro Público dentro de 1 Ano",
    legend: "true",
    legend: { textStyle: { color: 'white', fontSize: 16 } },
    pieSliceText: "number",
    pieHole: 0.5,
    color: "white",
    is3D: true,
    backgroundColor: "transparent",
    height: 500,
    titleTextStyle: { color: 'white', fontSize: 20, position: 'top' },
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

  const groupedData3 = despDep22.reduce((acc, item) => {
    if (acc[item.mes]) {
      acc[item.mes] += item.valorDocumento
    } else {
      acc[item.mes] = item.valorDocumento
    }
    return acc
  }, {});

  const groupedData4 = despDep23.reduce((acc, item) => {
    if (acc[item.mes]) {
      acc[item.mes] += item.valorDocumento
    } else {
      acc[item.mes] = item.valorDocumento
    }
    return acc
  }, {});
  const groupedData5 = despDep21.reduce((acc, item) => {
    if (acc[item.mes]) {
      acc[item.mes] += item.valorDocumento
    } else {
      acc[item.mes] = item.valorDocumento
    }
    return acc
  }, {});


  const groupedData6 = despDep21.reduce((acc, item) => {
    if (acc[item.ano]) {
      acc[item.ano] += item.valorDocumento
    } else {
      acc[item.ano] = item.valorDocumento
    }
    return acc
  }, {});
  const groupedData7 = despDep22.reduce((acc, item) => {
    if (acc[item.ano]) {
      acc[item.ano] += item.valorDocumento
    } else {
      acc[item.ano] = item.valorDocumento
    }
    return acc
  }, {});

  const groupedData8 = despDep23.reduce((acc, item) => {
    if (acc[item.ano]) {
      acc[item.ano] += item.valorDocumento
    } else {
      acc[item.ano] = item.valorDocumento
    }
    return acc
  }, {});

  

  const valoresDespesas21 = Object.values(groupedData5);
  const valoresDespesas22 = Object.values(groupedData3);
  const valoresDespesas23 = Object.values(groupedData4);
  const anoDespesas21 = Object.values(groupedData6);
  const anoDespesas22 = Object.values(groupedData7);
  const anoDespesas23 = Object.values(groupedData8);


  useEffect(() => {
    const config = {
      type: "line",
      data: {
        labels: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: valoresDespesas23,
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#edf2f7",
            borderColor: "#edf2f7",
            data: valoresDespesas22,
          },
          {
            label: new Date().getFullYear() - 2,
            fill: false,
            backgroundColor: "#008000",
            borderColor: "#008000",
            data: valoresDespesas21,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    const ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Charts(ctx, config);
  }, []);

  return (
    <>
      <div className='pt-5'>
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
              <h3>Despesas Gerais</h3>
              <table className="w-full text-md text-left text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase bg-blue-500 border-b border-blue-400 dark:text-white">
                  <tr>
                    <th scope="col" className="px-5 py-3">Data</th>
                    <th scope="col" className="px-5 py-3">Descrição</th>
                    <th scope="col" className="px-2 py-3">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {despDep.map(item => (
                    <tr key={item.codDocumento} className="bg-blue-900 border-b border-blue-400 hover:bg-blue-500">
                      <td scope="row" className="px-2 py-2">{item.dataDocumento}</td>
                      <td scope="row" className="px-2 py-2">{item.tipoDespesa}</td>
                      <td scope="row" className="px-2 py-2">{item.valorDocumento}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </Col>
            <Col md={8} className='pt-5 bg text-white'>
              <h3>Gráfico</h3>

              <Chart
                chartType="PieChart"
                data={dadosCharts}
                options={optionsCharts}
                width={"100%"}
                height={"450px"}
                className='text-white bg-gray-950 bg-opacity-80'
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

              <div className="w-full mb-6 shadow-lg rounded-lg bg-gray-950 bg-opacity-80">
                <div className="rounded-t mb-0 px-4 py-3">
                  <h2 className="text-white text-xl font-semibold">Grafico de gastos Mes/Ano</h2>
                </div>
                <div className="p-4 flex-auto">
                  <div className="h-[600px]">
                    <canvas id="line-chart"></canvas>
                  </div>
                </div>
              </div>

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
  const despesa2021 = await apiDeputados.get('/deputados/' + id + '/despesas?ano=2021&itens=1000&ordem=ASC&ordenarPor=ano')
  const despesa2022 = await apiDeputados.get('/deputados/' + id + '/despesas?ano=2022&itens=1000&ordem=ASC&ordenarPor=ano')
  const despesa2023 = await apiDeputados.get('/deputados/' + id + '/despesas?ano=2023&itens=1000&ordem=ASC&ordenarPor=ano')
  const despesagerais = await apiDeputados.get('/deputados/' + id + '/despesas?itens=1000&ordenarPor=ano')

  const infoDep = deputado.data.dados
  const despDep21 = despesa2021.data.dados
  const despDep22 = despesa2022.data.dados
  const despDep23 = despesa2023.data.dados
  const despDep = despesagerais.data.dados


  // RETORNA VARIÁVEIS DECLARADAS
  return {
    props: { infoDep, despDep, despDep21, despDep22, despDep23 }, // will be passed to the page component as props
  }
}
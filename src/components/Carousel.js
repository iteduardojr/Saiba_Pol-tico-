import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import apiDeputados from "../services/apiDeputados";

const Carousel = () => {

    const [deputados, setDeputados] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    React.useEffect(() => {

        const ENDPOINT = 'https://dadosabertos.camara.leg.br/api/v2/partidos'
        const URL = `${ENDPOINT}?itens=20&ordem=ASC&ordenarPor=sigla`
        fetch(URL)
            .then((response) => response.json())
            .then((newDeputados) => setDeputados((prevDeputados) => [...prevDeputados, ...newDeputados.dados]))
    }, [currentPage])

    const settings = {
        className: "center",
        centerPadding: "100px",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
      
        appendDots: (dots) => (
            <div
                style={{
                    bottom: '10px',
                    borderRadius: '10px',
                    padding: '10px',
                }}
            >
                <ul className='[&>li]:mx-[2px]' style={{ margin: '0px' }}>
                    {dots}
                </ul>
            </div>
        ),
        customPaging: (i) => <div className='bgcolor w-3 h-3 mx-0 bg-[#ffffff80] rounded-full '></div>,
    };
    return (
        <div className="p-4">
           
            <Slider {...settings}>
                {deputados.map((item) => (
                    <div key={item.id} className="p-2">
                        <Image src={item.urlLogo} width={600} height={600} alt={"Background " + item.nome} className="rounded-lg shadow-lg h-screen w-full object-fill" />
                        <div className='absolute bottom-[80px] text-white px-3 pl-[28px] sm:pl-[36px] md:pl-[48px] lg:pl-[60px] w-full'>
                            <h2 className='font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl mb-3'>{item.nome}</h2>
                            <p className='sm:text-left sm:pr-4 sm:mb-6 text-ellipsis overflow-hidden md:text-lg'>{item.sigla}</p>
                            <div className=' gap-5 items-center hidden sm:flex'>
                                <Link href={'/deputados/' + item.id}>
                                    <button aria-label='Detalhes' className='px-[20px] bg-[#3e3b44b3] min-h-[4px] min-w-[144px] py-[12px] rounded-[200px] text-slate-50 hover:bg-gray-400 font-semibold'>Detalhes</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );

}
export default Carousel
/* 
export async function getServerSideProps(context) {

   // ID DO DEPUTADOS(A)
    const id = context.params.id
  
    // REFERENCIA DEPUTADO ÚNICO
    const resultado = await apiDeputados.get('/deputados/')
    const deputadoid = await apiDeputados.get('/deputados/' + id)
   
  
    const deputados = resultado.data.dados
    const deputadosId = deputadoid.data.dados

  
  
    // RETORNA VARIÁVEIS DECLARADAS
    return {
      props: { deputados, deputadosId }, // will be passed to the page component as props
    }
  } 
  
  */
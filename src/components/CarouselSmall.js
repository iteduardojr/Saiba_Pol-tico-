import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const CarouselSmall = () => {


    const [deputados, setDeputados] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    React.useEffect(() => {

        const ENDPOINT = 'https://dadosabertos.camara.leg.br/api/v2/deputados'
        const URL = `${ENDPOINT}?&itens=100&ordem=ASC&ordenarPor=nome`
        fetch(URL)
            .then((response) => response.json())
            .then((newDeputados) => setDeputados((prevDeputados) => [...prevDeputados, ...newDeputados.dados]))
    }, [currentPage])


    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 8,
        speed: 500

    };
    return (
        <div className="p-4">
            <h2 className="text-white text-2xl font-bold">Deputados</h2>
            <Slider {...settings}>
                {deputados.map((item) => (
                    <div key={item.id} className="p-2">
                        <Link href={'deputados/' + item.id}>
                        <Image priority src={item.urlFoto} width={1920} height={1200} alt={"Background " + item.nome} className="rounded-lg shadow-lg" />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );

}
export default CarouselSmall
import Link from 'next/link'
import React from 'react'

const Wellcome = () => {
    return (
        <div>
            <div className="pt-40 pb-28 mx-auto">
                <h1 className="text-8xl mb-10 py-5 mx-[18rem] shadow-2xl rounded-full shadow-zinc-950 text-center font-extrabold text-gray-800 bg-gradient-to-r from-lime-500 to-cyan-500 ">
                    Bem vindo a Saiba Politico
                </h1>
                <h2 className="text-2xl font-mono font-semibold pb-11 text-gray-950 text-center">
                    <span className='shadow-lg'>Seu portal de Informaçõessobre<br />
                    sobre os Deputados da Câmara Eleitoral</span>
                </h2>
                <div className="text-center">
                    <Link className="no-underline shadow-2xl rounded-full shadow-zinc-950 font-bold text-white ml-11 bg-slate-400 hover:bg-slate-500 px-10 py-3"
                        target='_blanck'
                        href="https://www.camara.leg.br/"
                    >
                        <span>Site Oficial</span>

                    </Link>
                    <Link
                        className="no-underline shadow-2xl rounded-full shadow-zinc-950 font-bold text-white ml-11 bg-sky-400 hover:bg-sky-500 px-10 py-3"
                        target='_blanck'
                        href="https://github.com/iteduardojr/Saiba_Pol-tico-"
                    >
                        <span className="justify-center">Repositorio</span>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Wellcome
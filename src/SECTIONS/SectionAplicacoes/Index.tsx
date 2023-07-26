import { ReactNode } from 'react'
import ModalComponent from '../../components/modal/Index'
import Botao from '../../components/button/Index'

import cosmeticos from '../../assets/icon-application/cosmeticos.svg'
import agricultura from '../../assets/icon-application/agricultura.svg'
import enzimas from '../../assets/icon-application/imobilizacao.svg'
import nanotecnologia from '../../assets/icon-application/nanotecnologia.svg'
import alimenticia from '../../assets/icon-application/alimenticio.svg'
import agua from '../../assets/icon-application/agua.svg'
import saude from '../../assets/icon-application/saude.svg'

import verify from '../../assets/verifica.svg'


const icons = [
    {
        img: cosmeticos,
        titleCard: 'Cosméticos',
        titleModal:"Aplicação da Quitosana em Cosméticos" ,
        text:"A Quitosana é obtida através da desacetilação da quitina, que é retirada das carapaças de crustáceos como camarão, caranguejo e lagosta, após processos de descarbonatação e desproteinização. A desacetilação ocorre por meio de alcalinização sob altas temperaturas, seguida de lavagem, secagem e trituração da Quitosana obtida. Os derivados da Quitosana têm encontrado diversos usos em preparações cosméticas e de cuidados pessoais, como produtos para a pele, cabelo e higiene bucal, entre outros.",
    },

    {
        img: agricultura,
        titleCard: 'Agricultura',
        titleModal:"Aplicação da Quitosana na Agricultura" ,
        text:"A quitosana possui diversas aplicações na agricultura, incluindo desde a formação de biofilme nas aplicações foliares para melhor espalhamento e aproveitamento dos produtos, até a nanotecnologia para estabilização de nanopartículas metálicas ou para a liberação controlada de fertilizantes agroquímicos.",
    },

    {
        img: enzimas,
        titleCard: 'Imobilização de Enzimas e Microrganismos',
        titleModal:"Aplicação da Quitosana na Imobilização de Enzimas e Microrganismos" ,
        text:"A quitosana é amplamente utilizada como suporte para a imobilização de enzimas e microrganismos, principalmente nas formas de hidrogéis e membranas. Esses suportes possuem características físicas importantes, como o aumento do diâmetro dos poros - ideal para o processo de imobilização de enzimas - e a presença de diferentes grupos funcionais, como hidroxila e amino, que permitem a utilização de diferentes métodos de imobilização.",
    },

    /*
    {
        img: nanotecnologia,
        titleCard: 'Nanotecnologia',
        titleModal:"Aplicação da Quitosana na Nanotecnologia" ,
        text:"Um dos maiores problemas do uso de nanopartículas, especialmente em soluções, é a sua baixa estabilidade. Derivados poliméricos de quitosana são usados como estabilizante estérico em suspensão coloidal de nanopartículas, criando uma barreira física/mecânica que impede a aproximação entre as nanopartículas, evitando a sua aglomeração, e, portanto, estabilizando-as por tempo indeterminado.",
    },
    */

    {
        img: alimenticia,
        titleCard: 'Indústria Alimentícia',
        titleModal:"Aplicação da Quitosana na Indústria Alimentícia" ,
        text:"Duas áreas muito relevantes de aplicações de quitosana na indústria de alimentos são seu uso como conservante e em filmes de proteção, ou embalagens inteligentes, que realizam proteção mecânica, química e biológica do produto alimentar.  ",
    },

    {
        img: agua,
        titleCard: 'Tratamento de Água e Filtração de Bebidas',
        titleModal:"Aplicação da Quitosana no Tratamento de Água e Filtração de Bebidas" ,
        text:"A quitosana tem sido estudada como uma alternativa aos coagulantes metálicos tradicionalmente usados no tratamento de água, sendo um coagulante natural. Além disso, novos materiais à base de quitosana estão sendo desenvolvidos para atuar como adsorventes de íons metálicos e corantes em águas residuais e efluentes, recebendo considerável atenção na área de adsorção devido ao seu alto potencial quelante.",
    },

    {
        img: saude,
        titleCard: 'Saúde',
        titleModal:"Aplicação da Quitosana na Área da Saúde" ,
        text: <ModalList />,
    },
]

function ModalList(){
    return (
        <div >
            <p>
                A Quitosana tem muitas características úteis como biodegradabilidade, biocompatibilidade, bioadesividade e não-toxicidade. Essas propriedades o tornam um polímero natural de grande valor para aplicações farmacêuticas e cosméticas.
            </p>

            <ul className='mt-5 flex flex-col gap-2'>
                <div className="flex gap-3">
                    <img src={verify} alt=""/>
                    <li>Curativo hemostático e cicatrização de feridas;</li>
                </div>

                <div className="flex gap-3">
                    <img src={verify} alt=""/>
                    <li>Biomaterial, bioengenharia;</li>
                </div> 

                <div className="flex gap-3">
                    <img src={verify} alt=""/>
                    <li>Sistema de liberação lenta de drogas;</li>
                </div> 

                <div className="flex gap-3">
                    <img src={verify} alt=""/>
                    <li>Tratamento de obesidade e controle de colesterol;</li>
                </div> 

                <div className="flex gap-3">
                    <img src={verify} alt=""/>
                    <li>Tratamento da Osteoartrite;</li>
                </div> 

                <div className="flex gap-3">
                    <img src={verify} alt=""/>
                    <li>Sanitizante e esterilizante à base de nanopartículas de prata estabilizadas com quitosana.</li>
                </div> 
            </ul>
        </div>
    )
}

interface CardProps{
    img: string,
    titleCard: string,
    titleModal: string,
    text: string | ReactNode,
}

function Card( { titleCard, titleModal, img, text }:CardProps ){
    return(
        <div className='w-[280px] md:w-[100%] xl:w-[350px] h-[320px] p-2 pt-7 flex flex-col items-center gap-7 bg-white rounded shadow-md '>
            <img src={img} className='w-[70px] ' alt="" />
            <h3 className='text-2xl font-semibold text-center text-[#006131] '>{titleCard}</h3>
            <ModalComponent title={titleModal} text={text} />
        </div>
    )
}

export default function SectionBeneficiosFranqueado(){
    return (
        <section className=" flex flex-col lg:flex-row items-center justify-center box-border text-black bg-img-gradient" >
            <div className='w-full max-w-[1450px] xl:p-[95px] xl:flex xl:justify-around '>
                
                <div className=' px-5 py-12 md:px-[5%] xl:px-0 xl:py-0 '>
                    
                    <div>
                        <h1 className="min-h-[50px]  md:min-h-[50px] xl:min-h-[70px] mb-10 text-4xl md:text-5xl xl:text-6xl text-center font-bold text-[#006131] ">
                            Aplicações da quitosana
                        </h1>

                        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-10'>
                            {icons.map( (icon, index) =>
                                <Card key={index} titleCard={icon.titleCard} titleModal={icon.titleModal} img={icon.img} text={icon.text}  />
                            )}
                        </div>

                        <div className='w-full flex justify-center mt-10'>
                            <Botao>
                                Chamar no Whatsapp
                            </Botao>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
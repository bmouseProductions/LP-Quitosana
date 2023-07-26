import Acordion from "../../components/accordion/Index";

import verifica from '../../assets/verifica.svg'

export default function SectionTecnologia(){

    function Propriedades(){
        return(
            <div className="flex flex-col gap-3">
                 <p>
                    As características já comprovadas da Quitosana (Chitosan / Quitosano) conferem a ela propriedades físicas, químicas e biológicas singulares:
                </p>
                <ul className="flex flex-col gap-2">
                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li> Aminopolisacarídeo linear com elevado teor de nitrogênio;</li>
                    </div>
                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Capacidade de formar pontes de hidrogênio intermolecular;</li>
                    </div> 

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Alta viscosidade; grupos reativos para cross-linking e ativação química;</li>
                    </div> 

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Biopolímero catiônico com alta densidade de carga;</li>
                    </div> 

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Quelante e complexante;</li>
                    </div> 

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Agente floculante; propriedades de adsorção, filtração e separação;</li>
                    </div> 

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Capacidade de formar filmes e material adesivo para isolamento de biomoléculas;</li>
                    </div> 

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Biocompatível; bioativo; biodegradável e não tóxico;</li>
                    </div> 

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Atividade antimicrobiana (antibacteriano, antifúngico e antiviral);</li>
                    </div>

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Propriedades de antiácido, antiulceroso e antitumoral;</li>
                    </div>

                    <div className="flex gap-3">
                        <img src={verifica} alt="" />
                        <li>Anticoagulante; atividade hipolipêmica.</li>
                    </div> 
                </ul>
                <p>
                    Cabe ressaltar que a Quitosana é solúvel na maioria dos ácidos orgânicos, embora seja insolúvel em soluções com pH superiores a 6,5 e em água.
                </p>
            </div>
        )
    }

    function Especificacoes(){
        return (
            
            <ul className="flex flex-col gap-2">
                <div className="flex gap-3">
                    <img src={verifica} alt=""/>
                    <li><b>NCM:</b> 3913.90.50 – QUITOSANA (CHITOSAN) SEUS SAIS E DERIVADOS</li>
                </div>
                
                <div className="flex gap-3">
                    <img src={verifica} alt=""/>
                    <li><b>CAS:</b> 9012-76-4</li>
                </div>
                
                <div className="flex gap-3">
                    <img src={verifica} alt=""/>
                    <li><b>NATUREZA QUÍMICA:</b> Polímero linear combinado por ligações beta 1-4 glicosídica.</li>
                </div>
                
                <div className="flex gap-3">
                    <img src={verifica} alt=""/>
                    <li><b>NOME QUÍMICO:</b> Poli-2-deoxi-2-amino glucose / Poliglusam</li>
                </div>
                
                <div className="flex gap-3">
                    <img src={verifica} alt=""/>
                    <li><b>FÓRMULA QUÍMICA:</b> (C6H11O4N)n</li>
                </div>
                
                <div className="flex gap-3">
                    <img src={verifica} alt=""/>
                    <li><b>PESO MOLECULAR:</b> Monômero (161); Polímero (60.000 – 300.000 Da)</li>
                </div>
                
                <div className="flex gap-3">
                    <img src={verifica} className="h-[16px]" alt=""/>
                    <li><b>MÉTODO DE OBTENÇÃO:</b> A Quitosana é obtida através da desacetilação da quitina, que é retirada das carapaças de crustáceos como camarão, caranguejo e lagosta, após processos de descarbonatação e desproteinização. A desacetilação ocorre por meio de alcalinização sob altas temperaturas, seguida de lavagem, secagem e trituração da Quitosana obtida.</li>
                </div>
            </ul>
            
        )
    }

    const divAcordion1 = [
        {
            id:"accordion1" ,
            title:"Propriedades" ,
            text: <Propriedades />,
            style:"w-[100%] md:w-[350px] lg:w-[450px] xl:w-[700px] rounded accordionSVG" //syles gerais
        },

        {
            id:"accordion2" ,
            title:"Especificações" ,
            text:<Especificacoes />,
            style:"w-[100%] md:w-[350px] lg:w-[450px] xl:w-[700px] rounded accordionSVG" //syles gerais
        },
    ]

    /*
    const divAcordion2 = [
        {
            id:"accordion5" ,
            title:"Sistema de Agendamentos" ,
            text:"A Olhar Certo conta com sistema de agendamento próprio que facilita a jornada do paciente e otimiza o resultado da clínica.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        },

        {
            id:"accordion7" ,
            title:"Business Inteligence" ,
            text:"Contamos com sistema de Business Inteligence (BI), no qual o franqueado tem acesso a análise detalhada - minuto a minuto - sobre o desempenho da sua unidade.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded" //syles gerais
        },
    ]*/

    return (
        <section className="py-16 max-w-[1450px] m-auto px-5 md:px-[5%] lg:px-[95px] flex text-[18px] " data-aos="fade-up" data-aos-duration="1500">
            <div className="w-full flex flex-col md:flex-row">
                <div className="w-full lg:w-[40%] flex items-center" >
                    <h1 className="min-h-[50px]  md:min-h-[50px] lg:min-h-[130px] mb-4 md:mb-0 text-4xl xl:text-6xl font-bold text-gradient ">
                        Propriedades e <br /> Especificações
                    </h1>
                </div>
            
                <div className="w-full lg:w-[60%] flex flex-col md:flex-row items-center  justify-around gap-2 lg:gap-5 ">
                    
                    <div className="flex flex-col gap-2 lg:gap-3 mt-5 lg:mt-0" data-aos="zoom-in-right" data-aos-duration="1500">
                        {divAcordion1.map( (accordion, index) =>
                            <Acordion key={index} id={accordion.id} title={accordion.title} text={accordion.text} style={accordion.style} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
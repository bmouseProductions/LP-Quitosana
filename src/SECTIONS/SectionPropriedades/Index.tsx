import Acordion from "../../components/accordion/Index";

export default function SectionTecnologia(){

    const divAcordion1 = [
        {
            id:"accordion1" ,
            title:"Call Center" ,
            text:"A Olhar Certo conta com Call Center próprio que tem mais de 10 atendentes exclusivos para ajudar a sua clínica com agendamentos ativos.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] !bg-[#f55303] rounded" //syles gerais
        },

        {
            id:"accordion2" ,
            title:"Sistema de Gerenciamento" ,
            text:"Sistemas que otimizam o trabalho da equipe na clínica. SISO, iKD, KD, Extranet e BI são alguns dos sistemas que estão à disposição do franqueado.",
            style:"w-[100%] md:w-[350px] lg:w-[400px] xl:w-[500px] !bg-[#f55303] rounded" //syles gerais
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
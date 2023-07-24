import { Formulario } from "../../components/formulario/Index";

import quitosana from '../../assets/quitosanaRecortada.webp'


export default function SectionForm(){
    return (
        <section className="" >
            <div className="py-10 md:py-14 xl:py-20 px-5 md:px-[5%] xl:px-[95px] bg-img-dark" data-aos="fade-right" data-aos-duration="1500">
                <div className="max-w-[1400px] flex flex-col lg:flex-row items-center lg:justify-between lg:gap-10 m-auto text-white">
                    <div className="w-full lg:1/2 ">
                        <img src={quitosana} alt="" className="w-[80%]" />
                    </div>
                    <div className="w-full lg:1/2 mt-10 lg:mt-0" id='form'>
                        <div className="max-w-[700px] m-auto py-10 px-5 flex flex-col items-center  bg-[#f55303] rounded-2xl shadow-2xl">
                            <div className="w-full flex flex-col items-center lg:px-10 gap-5">
                                <h1 className="text-5xl font-bold lg:w-[500px] text-center">Entre em contato</h1>
                                <h2 className=" mb-5 text-2xl md:text-3xl text-center font-semibold">
                                    Para solicitar um orçamento ou obter mais informações envie uma mensagem através do formulário abaixo.
                                </h2>
                            </div>
                            
                            <Formulario />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
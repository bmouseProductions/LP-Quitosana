import quitosana from '../../assets/quitosana.webp'

export default function SectionOqueE(){
    return (
        <section className="w-full pt-5 pb-10 md:pb-14 md:pt-7 xl:pb-20 px-5 md:px-[5%] xl:px-[95px] box-border">
            
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='w-full lg:w-[45%] mt-0 lg:mt-5'>
                    <div>
                        <h2 className=' md:min-h-[85px] xl:min-h-[60px] text-4xl lg:text-5xl  font-bold text-white'>
                            O que é a Quitosana?
                        </h2>

                        <p className='text-[18px] mt-5 lg:mt-5 border-l-4 border-[#ff7e00] pl-5'>
                            A Quitosana é um biopolímero natural obtido a partir da Quitina, que é a fibra mais abundante na natureza - depois da celulose - e que é encontrada nas carapaças dos insetos e crustáceos, bem como nas paredes celulares de fungos, cogumelos, leveduras e em outros organismos.
                        </p>
                    </div>

                    <div className='mt-14'>
                        <h2 className=' md:min-h-[85px] xl:min-h-[60px] text-4xl lg:text-5xl  font-bold text-white'>
                            Diferencial da Quitosana
                        </h2>

                        <p className='text-[18px] mt-5 lg:mt-5 border-l-4 border-[#ff7e00] pl-5'>
                            O diferencial da Quitosana está no fato de ser renovável e biodegradável, além de possuir propriedades essenciais para diversas indústrias. Ela é utilizada como insumo para vários produtos, principalmente no setor farmacêutico. Isso demonstra a grande importância da Quitosana tanto do ponto de vista econômico quanto ambiental.
                        </p>
                    </div>
                </div>

                <div className='w-full lg:w-[55%] mt-10 lg:mt-0'>
                    <img className='rounded-xl w-[800px] ' src={quitosana} alt="" />
                </div>
            </div>
        </section>
    )
}
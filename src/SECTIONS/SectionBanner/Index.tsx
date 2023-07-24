import banner from '../../assets/bannerOC.webp'
import Botao from '../../components/button/Index'

export default function SectionBanner() {
    return(
        <section className="w-full xl:!max-h-[900px] pt-[40px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-[#ff7e00]  md:from-30% to-[#006131] md:to-70%">
            <div className='flex flex-col lg:flex-row md:justify-center md:items-center'>
                <img src={banner} alt="" className='w-full  md:max-w-lg xl:max-w-2xl ' data-aos="fade-right" data-aos-duration="1500"/>
                <div className='w-full px-5 md:px-0 flex flex-col items-center md:w-[60%] max-w-[600px] md:justify-center' data-aos="fade-down" data-aos-duration="1500">
                    <div className='w-full flex flex-col'>
                        <h1 className='mb-5 text-[60px] md:text-[110px] leading-[75px] md:leading-[100px] font-bold text-white text-center lg:text-start'>
                            Farinha de Camarão
                        </h1>
                        
                    </div>
                    <h2 className='mt-4 font-semibold text-white text-center md:text-start mb-10 md:text-[20px]'> Riqueza natural, obtida através da reciclagem animal, que pode ser aplicada em diversos setores industriais e científicos.</h2>
                    <Botao>
                        Chamar no WhatsApp
                    </Botao>
                </div>
            </div>
        </section>
    )
}

import phone from '../../assets/phone-call.png'
import mail from '../../assets/email.png'

export default function SectionAporte(){
    return (
        <section  data-aos="zoom-out" data-aos-duration="1500">
            <div className="w-full px-4 py-14 lg:p-[50px] flex gap-5 flex-col items-center text-white">
                <h2 className="w-full lg:w-max font-bold text-3xl lg:text-5xl">
                    <strong>Gostaria de comprar nossos produtos? </strong> 
                </h2><h3 className="w-full lg:w-max font-bold text-[28px]"> <strong> Contate-nos: </strong></h3>
                
                <div className="w-full flex flex-col lg:flex-row lg:gap-10 justify-evenly">
                    <div className="flex lg:items-center lg:justify-center gap-5 ">
                        <img src={phone} alt=""/>
                        <h2 className="font-bold text-2xl lg:text-4xl"> 
                            <a href="tel:+553438181800"> 
                                +55 (34) 3818-1800 
                            </a>
                        </h2>
                    </div>

                    <div className="flex mt-5 lg:mt-0 lg:items-center lg:justify-end gap-5 ">
                        <img src={mail} alt=""/>
                        <h2 className="font-bold text-2xl lg:text-4xl">
                            <a href="mailto:vendas@patense.com.br">vendas@patense.com.br</a>
                        </h2>
                    </div>
                </div>
                </div>
        </section>
    )
}
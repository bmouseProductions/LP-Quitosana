import { ReactElement } from "react"


interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <a href="https://api.whatsapp.com/send/?phone=554792034473&text&type=phone_number&app_absent=0" className="w-full md:max-w-[22.8rem]"> 
            <button className="w-full  py-5 rounded font-bold text-black text-[26px] bg-[#fff] shadow-[0px_0px_20px_#ff7e00] hover:bg-[#f55303] hover:text-white hover:shadow-[0px_0px_20px_#000] transition-all duration-200">
                {children}
            </button>
        </a>
    )
}
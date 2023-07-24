
import imgWpp from '../../assets/whatsapp.png'

export default function Whatsapp(){
    return (
        <div className='fixed left-5 bottom-5 z-50 animate-bounce'>
            <a href="https://api.whatsapp.com/send/?phone=554792034473&text&type=phone_number&app_absent=0" target='_blank' className=' '>
                <img src={imgWpp} alt='icone whatsapp' className='w-[54px] h-[54px] ' />
            </a>
        </div>
    )
}
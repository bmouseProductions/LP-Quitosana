
import SectionBanner from "./SECTIONS/SectionBanner/Index"
import SectionVideo from "./SECTIONS/SectionVideo/Index"
import SectionAplicacoes from "./SECTIONS/SectionAplicacoes/Index"
import SectionPropriedades from "./SECTIONS/SectionPropriedades/Index"
import SectionOqueE from './SECTIONS/SectionMira/Index'
import SectionChamada from "./SECTIONS/SectionChamada/Index"
import SectionForm from "./SECTIONS/SectionForm/Index"
import Whatsapp from "./components/buttonWhatsapp/Index"
import BackTop from "./components/backTop/Index"
import Footer from "./components/footer/Index"

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <>
      <main className="w-full bg-[#006131] text-white">
        <SectionBanner />
        <SectionVideo />
        <SectionOqueE />
        <SectionPropriedades />
        <SectionAplicacoes />
        <SectionForm />
        <SectionChamada />
        <Whatsapp />
        <BackTop />
      </main>

      <Footer />

    </>
  )
}

export default App

import { Camera, Mail, MapPin, Users } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'
export default function IntroductionPage() { return <div className="intro-page">
  <BrandLogo size="medium" className="brand-logo--on-dark" /><span className="eyebrow">Desde el fin del mundo</span><h2>Crecer juntos<br/>es nuestra forma<br/>de hacer negocios.</h2>
  <div className="intro-card"><h3>¿Quiénes somos?</h3><p>Somos una distribuidora mayorista cercana, dedicada a acompañar a comercios y familias con un surtido confiable.</p><h3>Nuestra experiencia</h3><p>Conocemos el ritmo de Tierra del Fuego y trabajamos cada día para ofrecer atención simple, variedad y buenas oportunidades.</p></div>
  <div className="social-grid"><span><MapPin /> Ushuaia, Tierra del Fuego</span><span><Camera /> @donatilio</span><span><Users /> Don Atilio</span><span><Mail /> hola@donatilio.com.ar</span></div>
</div> }

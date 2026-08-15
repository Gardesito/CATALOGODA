import { Camera, Mail, MapPin, Phone, Users } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'
export default function ContactPage() { return <div className="contact-page">
  <BrandLogo size="large" className="brand-logo--on-dark" /><span className="eyebrow">Gracias por elegirnos</span><h2>Hagamos crecer<br/>tu negocio.</h2><p>Consultanos por disponibilidad, entregas y condiciones mayoristas.</p>
  <div className="contact-list"><span><Phone /> +54 2901 00-0000</span><span><Mail /> ventas@donatilio.com.ar</span><span><MapPin /> Ushuaia, Tierra del Fuego</span><span><Camera /> @donatilio</span><span><Users /> Don Atilio</span></div>
  <div className="contact-foot">DON ATILIO · DISTRIBUIDORA MAYORISTA</div>
</div> }

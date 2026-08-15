import { ArrowRight } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'
export default function CoverPage() { return <div className="cover-page">
  <BrandLogo size="cover" priority />
  <div className="cover-copy"><span className="eyebrow">Edición · Agosto 2026</span><h1>Catálogo<br/><em>Mayorista</em></h1><p>Buenos productos, mejores oportunidades para tu negocio.</p></div>
  <div className="validity-chip">Vigencia 01/08 al 31/08</div>
  <p className="swipe-hint">Deslizá para comenzar <ArrowRight /></p>
</div> }

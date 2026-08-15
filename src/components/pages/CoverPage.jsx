import { ArrowRight, Leaf } from 'lucide-react'
export default function CoverPage() { return <div className="cover-page">
  <div className="brand-lockup"><span className="logo-mark"><Leaf /></span><span>DON ATILIO<small>Distribuidora</small></span></div>
  <div className="cover-copy"><span className="eyebrow">Edición · Agosto 2026</span><h1>Catálogo<br/><em>Mayorista</em></h1><p>Buenos productos, mejores oportunidades para tu negocio.</p></div>
  <div className="validity-chip">Vigencia 01/08 al 31/08</div>
  <p className="swipe-hint">Deslizá para comenzar <ArrowRight /></p>
</div> }

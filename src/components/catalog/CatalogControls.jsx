import { ChevronLeft, ChevronRight, Expand, List } from 'lucide-react'
import IconButton from '../ui/IconButton'

export default function CatalogControls({ current, total, onPrevious, onNext, onIndex, onFullscreen }) {
  return <nav className="catalog-controls" aria-label="Controles del catálogo">
    <IconButton label="Página anterior" onClick={onPrevious} disabled={current === 0}><ChevronLeft /></IconButton>
    <IconButton label="Volver al índice" onClick={onIndex}><List /></IconButton>
    <span className="page-counter" aria-live="polite"><strong>{current + 1}</strong> / {total}</span>
    <IconButton label="Activar pantalla completa" onClick={onFullscreen}><Expand /></IconButton>
    <IconButton label="Página siguiente" onClick={onNext} disabled={current >= total - 1}><ChevronRight /></IconButton>
  </nav>
}

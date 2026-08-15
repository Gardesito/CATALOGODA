export default function PageNumber({ number }) { return <span className="page-number" aria-label={`Página ${number}`}>{String(number).padStart(2, '0')}</span> }

import { Navigate, Route, Routes } from 'react-router-dom'
import PublicCatalog from './views/PublicCatalog'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicCatalog />} />
      <Route path="/catalogo" element={<PublicCatalog />} />
      <Route path="*" element={<Navigate to="/catalogo" replace />} />
    </Routes>
  )
}

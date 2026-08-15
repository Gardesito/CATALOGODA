import CatalogViewer from '../components/catalog/CatalogViewer'
import { categories } from '../data/categories'
import { mockProducts } from '../data/mockProducts'

export default function PublicCatalog() {
  return <CatalogViewer categories={categories} products={mockProducts} />
}

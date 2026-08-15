import { MessageCircle } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'
import ProductImage from './ProductImage'
import ProductOffer from './ProductOffer'
import ProductPriceLists from './ProductPriceLists'
import ProductSimple from './ProductSimple'

const variants = { simple: ProductSimple, offer: ProductOffer, 'price-lists': ProductPriceLists }
export default function ProductPage({ product, category, onIndex }) {
  const PriceVariant = variants[product.type] || ProductSimple
  return <div className="product-page" style={{ '--category': category.color }}>
    <header><BrandLogo size="signature" /><button onClick={onIndex}>Volver al índice</button></header>
    <div className="product-category">{category.number} · {category.name}</div>
    <div className="product-heading">{product.brand && <span>{product.brand}</span>}<h2>{product.name}</h2>{product.presentation && <p>{product.presentation}</p>}</div>
    <ProductImage src={product.image} alt={product.name} />
    <PriceVariant product={product} />
    <footer><small>{product.validity}</small><button aria-label={`Consultar por ${product.name}`}><MessageCircle /> Consultar</button></footer>
  </div>
}

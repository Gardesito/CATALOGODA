import { formatPrice } from '../../utils/priceFormatter'
export default function ProductSimple({ product }) { return <div className="price-block simple-price"><span>Precio mayorista</span><strong>{formatPrice(product.price)}</strong>{product.unit && <small>por {product.unit}</small>}</div> }

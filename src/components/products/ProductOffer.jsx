import { formatPrice } from '../../utils/priceFormatter'
export default function ProductOffer({ product }) { return <div className="price-block offer-price"><span className="offer-label">{product.offerLabel}</span><del>{formatPrice(product.previousPrice)}</del><strong>{formatPrice(product.price)}</strong><small>Precio final</small></div> }

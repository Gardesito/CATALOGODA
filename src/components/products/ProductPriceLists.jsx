import { formatPrice } from '../../utils/priceFormatter'
export default function ProductPriceLists({ product }) { return <div className="lists-block">
  <div><span>Lista 2</span><strong>{formatPrice(product.list2)}</strong></div><div><span>Lista 6</span><strong>{formatPrice(product.list6)}</strong></div><div className="cash"><span>Contado</span><strong>{formatPrice(product.cashPrice)}</strong></div>
</div> }

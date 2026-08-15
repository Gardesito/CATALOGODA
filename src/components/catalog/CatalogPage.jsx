import { forwardRef } from 'react'
import PageNumber from './PageNumber'

const CatalogPage = forwardRef(function CatalogPage({ children, number, className = '', showNumber = true }, ref) {
  return <div className={`catalog-page ${className}`} ref={ref}><div className="page-inner">{children}{showNumber && <PageNumber number={number} />}</div></div>
})
export default CatalogPage

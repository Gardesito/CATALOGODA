import { useState } from 'react'
import { brand } from '../../config/brand'

export default function BrandLogo({ className = '', size = 'medium', variant, priority = false }) {
  const [failed, setFailed] = useState(false)
  const resolvedSize = variant || size

  return (
    <span className={`brand-logo brand-logo--${resolvedSize} ${className}`.trim()}>
      {failed ? (
        <span className="brand-logo__fallback" role="img" aria-label={brand.logoAlt}>{brand.name}</span>
      ) : (
        <img
          src={brand.logoUrl}
          alt={brand.logoAlt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
        />
      )}
    </span>
  )
}

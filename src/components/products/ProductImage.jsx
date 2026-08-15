import { ImageOff } from 'lucide-react'
import { useState } from 'react'
export default function ProductImage({ src, alt }) {
  const [failed, setFailed] = useState(false)
  return <div className="product-image">{failed || !src ? <div className="image-fallback"><ImageOff /><span>Imagen del producto</span></div> : <img src={src} alt={alt} onError={() => setFailed(true)} />}</div>
}

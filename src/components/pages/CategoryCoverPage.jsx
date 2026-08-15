import { ArrowRight, Leaf } from 'lucide-react'
export default function CategoryCoverPage({ name, number, color, image, icon: Icon, text }) { return <div className="category-cover" style={{ '--category': color }}>
  <div className="mini-brand"><Leaf /> Don Atilio</div><div className="category-number">{number}</div>
  <div className="category-visual"><img src={image} alt={`Selección de ${name}`} /><span><Icon /></span></div>
  <div className="category-copy"><span>Categoría</span><h2>{name}</h2><p>{text}</p><small>Descubrí los productos <ArrowRight /></small></div>
</div> }

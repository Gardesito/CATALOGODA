import { ArrowUpRight, Leaf } from 'lucide-react'
export default function IndexPage({ categories, onCategoryClick }) { return <div className="index-page">
  <header><div className="mini-brand"><Leaf /> Don Atilio</div><span>Índice</span></header>
  <h2>Catálogo<br/>Mayorista</h2>
  <p className="index-lead">Elegí una categoría para ir directo a sus novedades.</p>
  <div className="category-list">{categories.map((category) => <button key={category.id} onClick={() => onCategoryClick(category.id)} style={{ '--category': category.color }}><b>{category.number}</b><span>{category.name}</span><ArrowUpRight /></button>)}</div>
</div> }

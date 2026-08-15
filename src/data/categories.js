import { Apple, Beef, Cookie, IceCreamBowl, PackageOpen, Sparkles, SprayCan } from 'lucide-react'

export const categories = [
  { id: 'perecederos', name: 'Perecederos', number: '01', color: '#74c92d', icon: Apple, image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=85', text: 'Frescura que llega todos los días.' },
  { id: 'no-perecederos', name: 'No Perecederos', number: '02', color: '#f4b82c', icon: PackageOpen, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=85', text: 'Todo lo esencial para tu negocio.' },
  { id: 'perfumeria', name: 'Perfumería', number: '03', color: '#ea7aa9', icon: Sparkles, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85', text: 'Cuidado y bienestar en cada detalle.' },
  { id: 'carnes', name: 'Carnes', number: '04', color: '#d9534f', icon: Beef, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1000&q=85', text: 'Calidad seleccionada para tu mesa.' },
  { id: 'congelados', name: 'Congelados', number: '05', color: '#42a9d8', icon: IceCreamBowl, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1000&q=85', text: 'Practicidad siempre a mano.' },
  { id: 'tiempo-libre', name: 'Tiempo Libre', number: '06', color: '#8b63c7', icon: Cookie, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=85', text: 'Momentos para disfrutar y compartir.' },
  { id: 'limpieza', name: 'Limpieza', number: '07', color: '#17a88b', icon: SprayCan, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1000&q=85', text: 'Soluciones que rinden más.' },
]

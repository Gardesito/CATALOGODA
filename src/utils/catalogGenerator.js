export function generateCatalogPages(categories, products) {
  const pages = [
    { id: 'cover', type: 'cover' },
    { id: 'index', type: 'index' },
    { id: 'introduction', type: 'introduction' },
  ]

  categories.forEach((category) => {
    pages.push({ id: `category-${category.id}`, type: 'category', category })
    products.filter((product) => product.category === category.id).forEach((product) => {
      pages.push({ id: `product-${product.id}`, type: 'product', product, category })
    })
  })

  pages.push({ id: 'contact', type: 'contact' })
  return pages.map((page, index) => ({ ...page, pageNumber: index + 1 }))
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { generateCatalogPages } from '../../utils/catalogGenerator'
import CatalogControls from './CatalogControls'
import CatalogPage from './CatalogPage'
import CoverPage from '../pages/CoverPage'
import IndexPage from '../pages/IndexPage'
import IntroductionPage from '../pages/IntroductionPage'
import CategoryCoverPage from '../pages/CategoryCoverPage'
import ContactPage from '../pages/ContactPage'
import ProductPage from '../products/ProductPage'
import BrandLogo from '../ui/BrandLogo'

export default function CatalogViewer({ categories, products }) {
  const bookRef = useRef(null)
  const viewerRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [mobile, setMobile] = useState(() => window.innerWidth < 900)
  const pages = useMemo(() => generateCatalogPages(categories, products), [categories, products])
  const pageIndex = useMemo(() => Object.fromEntries(pages.map((page, index) => [page.id, index])), [pages])
  const goTo = useCallback((index) => bookRef.current?.pageFlip()?.flip(index), [])
  const goToIndex = useCallback(() => goTo(pageIndex.index), [goTo, pageIndex])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 899px)')
    const update = (event) => setMobile(event.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowRight') bookRef.current?.pageFlip()?.flipNext()
      if (event.key === 'ArrowLeft') bookRef.current?.pageFlip()?.flipPrev()
      if (event.key.toLowerCase() === 'i') goToIndex()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goToIndex])

  const renderPage = (page) => {
    if (page.type === 'cover') return <CoverPage />
    if (page.type === 'index') return <IndexPage categories={categories} onCategoryClick={(id) => goTo(pageIndex[`category-${id}`])} />
    if (page.type === 'introduction') return <IntroductionPage />
    if (page.type === 'category') return <CategoryCoverPage {...page.category} />
    if (page.type === 'product') return <ProductPage product={page.product} category={page.category} onIndex={goToIndex} />
    return <ContactPage />
  }

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) await viewerRef.current?.requestFullscreen?.()
    else await document.exitFullscreen?.()
  }

  return <main className="catalog-shell" ref={viewerRef}>
    <div className="viewer-heading"><BrandLogo size="viewer" /><p>Catálogo Mayorista</p></div>
    <section className="book-stage" aria-label="Catálogo digital">
      <HTMLFlipBook key={mobile ? 'mobile' : 'desktop'} ref={bookRef} width={520} height={730} size="stretch" minWidth={280} maxWidth={520} minHeight={393} maxHeight={730} showCover={false} mobileScrollSupport swipeDistance={20} useMouseEvents drawShadow={!mobile} flippingTime={650} maxShadowOpacity={0.25} showPageCorners={!mobile} usePortrait={mobile} startPage={current} onFlip={(event) => setCurrent(event.data)} className="flip-book">
        {pages.map((page) => <CatalogPage key={page.id} number={page.pageNumber} showNumber={page.type !== 'cover'} className={`page-${page.type}`}>{renderPage(page)}</CatalogPage>)}
      </HTMLFlipBook>
    </section>
    <CatalogControls current={current} total={pages.length} onPrevious={() => bookRef.current?.pageFlip()?.flipPrev()} onNext={() => bookRef.current?.pageFlip()?.flipNext()} onIndex={goToIndex} onFullscreen={toggleFullscreen} />
    <p className="keyboard-help">Usá las flechas del teclado para navegar · I para volver al índice</p>
  </main>
}

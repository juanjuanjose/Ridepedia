import { Navigate, Route, Routes } from 'react-router-dom'

import { AppLayout } from './components/layout/AppLayout'
import { CatalogPage } from './pages/CatalogPage'
import { CommunityPage } from './pages/CommunityPage'
import { HomePage } from './pages/HomePage'
import { MarketplacePage } from './pages/MarketplacePage'
import { MotorcycleDetailPage } from './pages/MotorcycleDetailPage'
import { NewsPage } from './pages/NewsPage'
import { TechnicalComparatorPage } from './pages/TechnicalComparatorPage'
import { VisualComparatorPage } from './pages/VisualComparatorPage'

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="marketplace" element={<MarketplacePage />} />
        <Route path="visual-comparator" element={<VisualComparatorPage />} />
        <Route path="technical-comparator" element={<TechnicalComparatorPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="motorcycles/:motorcycleSlug" element={<MotorcycleDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

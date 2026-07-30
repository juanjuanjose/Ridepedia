import { Navigate, Route, Routes } from 'react-router-dom'

import { AppLayout } from './components/layout/AppLayout'
import { CatalogPage } from './pages/CatalogPage'
import { HomePage } from './pages/HomePage'
import { MotorcycleDetailPage } from './pages/MotorcycleDetailPage'

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="motorcycles/:motorcycleSlug" element={<MotorcycleDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

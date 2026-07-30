import type { Motorcycle } from '../types/motorcycle'

const DEFAULT_CAR_IMAGES_BASE_URL = 'https://carimages-api.onrender.com'

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, '')
}

function normalizeToken(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
}

function buildBaseUrl() {
  if (import.meta.env.DEV) {
    return '/api/car-images'
  }

  return trimTrailingSlash(import.meta.env.VITE_CAR_IMAGES_BASE_URL || DEFAULT_CAR_IMAGES_BASE_URL)
}

export function buildCarImagesUrl(motorcycle: Motorcycle) {
  const apiKey = import.meta.env.VITE_CAR_IMAGES_KEY

  if (!apiKey) {
    return null
  }

  const query = motorcycle.media.carImagesQuery
  const make = normalizeToken(query?.make || motorcycle.brand)
  const model = normalizeToken(query?.model || motorcycle.model)
  const year = String(query?.year || motorcycle.year)
  const descriptor = `${make} ${model} ${year}`.trim()
  const params = new URLSearchParams({
    key: apiKey,
    api_key: apiKey,
    make,
    model,
    year,
    q: descriptor,
    search: descriptor,
    transparent: 'false',
    format: 'webp',
  })

  return `${buildBaseUrl()}/image?${params.toString()}`
}

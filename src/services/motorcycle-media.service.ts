import type { Motorcycle, MotorcycleMediaAsset } from '../types/motorcycle'

import { buildCarImagesUrl } from './car-images.client'

function buildWikimediaUrl(fileName: string) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1440`
}

function buildPlaceholderDataUri(motorcycle: Motorcycle) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#07111f" />
          <stop offset="55%" stop-color="#101b35" />
          <stop offset="100%" stop-color="${motorcycle.accent}" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#bg)" rx="40" />
      <circle cx="430" cy="620" r="126" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="18" />
      <circle cx="1120" cy="620" r="126" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="18" />
      <path d="M430 620h148l118-166h185l90 92h149" fill="none" stroke="rgba(255,255,255,0.74)" stroke-width="28" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M720 462l120-92h136" fill="none" stroke="rgba(255,255,255,0.52)" stroke-width="20" stroke-linecap="round" />
      <text x="120" y="160" fill="#f8fafc" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="700">${motorcycle.brand} ${motorcycle.model}</text>
      <text x="120" y="240" fill="rgba(248,250,252,0.72)" font-family="Inter, Arial, sans-serif" font-size="34">Ridepedia fallback artwork</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export function getMotorcycleMediaCandidates(motorcycle: Motorcycle): MotorcycleMediaAsset[] {
  const candidates: MotorcycleMediaAsset[] = []

  if (motorcycle.media.localImage) {
    candidates.push({
      source: 'local',
      url: motorcycle.media.localImage,
      alt: `${motorcycle.brand} ${motorcycle.model}`,
    })
  }

  const carImagesUrl = buildCarImagesUrl(motorcycle)
  if (carImagesUrl) {
    candidates.push({
      source: 'carimages',
      url: carImagesUrl,
      alt: `${motorcycle.brand} ${motorcycle.model}`,
    })
  }

  if (motorcycle.media.wikimediaFileName) {
    candidates.push({
      source: 'wikimedia',
      url: buildWikimediaUrl(motorcycle.media.wikimediaFileName),
      alt: `${motorcycle.brand} ${motorcycle.model}`,
    })
  }

  candidates.push({
    source: 'placeholder',
    url: buildPlaceholderDataUri(motorcycle),
    alt: `${motorcycle.brand} ${motorcycle.model}`,
  })

  return candidates
}

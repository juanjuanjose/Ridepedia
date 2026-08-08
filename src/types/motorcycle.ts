export type MotorcycleCategory = 'Naked' | 'Adventure' | 'Sport' | 'Modern Classic'

export type MediaSource = 'local' | 'carimages' | 'wikimedia' | 'placeholder'

export interface MotorcycleSpecBlock {
  label: string
  value: string
}

export interface MotorcycleMediaConfig {
  localImage?: string
  carImagesQuery?: {
    make?: string
    model?: string
    year?: number
  }
  wikimediaFileName?: string
}

export interface MotorcycleModelConfig {
  localPath?: string
}

export interface MotorcycleTechnicalSearchConfig {
  make: string
  model: string
  year?: number
}

export interface Motorcycle {
  id: string
  slug: string
  brand: string
  model: string
  year: number
  category: MotorcycleCategory
  tagline: string
  summary: string
  story: string
  accent: string
  galleryLabel: string
  heroStats: string[]
  specs: MotorcycleSpecBlock[]
  anatomyNotes: string[]
  media: MotorcycleMediaConfig
  model3d?: MotorcycleModelConfig
  technicalSearch?: MotorcycleTechnicalSearchConfig
}

export interface MotorcycleMediaAsset {
  source: MediaSource
  url: string
  alt: string
}

export interface MotorcycleModelAsset {
  source: 'local'
  url: string
}

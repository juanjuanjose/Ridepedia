/// <reference types="vite/client" />

import type * as React from 'react'

interface ImportMetaEnv {
  readonly VITE_CAR_IMAGES_KEY?: string
  readonly VITE_CAR_IMAGES_BASE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        poster?: string
        alt?: string
        'camera-controls'?: boolean
        'touch-action'?: string
        'shadow-intensity'?: string
        exposure?: string
        'interaction-prompt'?: string
        loading?: 'auto' | 'eager' | 'lazy'
        reveal?: 'auto' | 'interaction' | 'manual'
        'camera-orbit'?: string
        'min-camera-orbit'?: string
        'max-camera-orbit'?: string
        'field-of-view'?: string
        orientation?: string
        'tone-mapping'?: string
      }
    }
  }
}

export {}

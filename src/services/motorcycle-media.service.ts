import type { Motorcycle, MotorcycleMediaAsset } from '../types/motorcycle'

import { resolveAssetPath } from '../utils/asset-path'

const sharedMockMotorcycleImage = resolveAssetPath('/Hero images/h2r.jpg')

export function getMotorcycleMediaCandidates(motorcycle: Motorcycle): MotorcycleMediaAsset[] {
  return [
    {
      source: 'local',
      url: sharedMockMotorcycleImage,
      alt: `${motorcycle.brand} ${motorcycle.model}`,
    },
  ]
}

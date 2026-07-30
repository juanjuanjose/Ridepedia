import type { Motorcycle, MotorcycleModelAsset } from '../types/motorcycle'

const availableLocalModelPaths = new Set<string>([])

export function getMotorcycleModelAsset(motorcycle: Motorcycle): MotorcycleModelAsset | null {
  const localPath = motorcycle.model3d?.localPath

  if (!localPath || !availableLocalModelPaths.has(localPath)) {
    return null
  }

  return {
    source: 'local',
    url: localPath,
  }
}

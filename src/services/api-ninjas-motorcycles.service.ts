import type { Motorcycle, MotorcycleTechnicalSearchConfig } from '../types/motorcycle'

export type TechnicalComparisonSnapshot = {
  make: string
  model: string
  year: string
  type: string
  engine: string
  power: string
  torque: string
  displacement: string
  totalWeight: string
  seatHeight: string
  wheelbase: string
  fuelCapacity: string
  gearbox: string
  cooling: string
}

const LOCAL_DATA_FALLBACK = 'No disponible en demo local'

function getSearchConfig(motorcycle: Motorcycle): MotorcycleTechnicalSearchConfig {
  return motorcycle.technicalSearch ?? {
    make: motorcycle.brand,
    model: motorcycle.model,
    year: motorcycle.year,
  }
}

function getSpecValue(motorcycle: Motorcycle, label: string) {
  return motorcycle.specs.find((spec) => spec.label === label)?.value ?? LOCAL_DATA_FALLBACK
}

function extractDisplacement(engine: string) {
  const match = engine.match(/([\d,.]+)\s*cc/i)
  return match ? `${match[1]} cc` : LOCAL_DATA_FALLBACK
}

function inferCooling(engine: string) {
  if (/air\s*\/\s*liquid-cooled/i.test(engine) || /air\/liquid-cooled/i.test(engine)) {
    return 'Air/liquid-cooled'
  }

  if (/air\s*\/\s*oil-cooled/i.test(engine) || /air\/oil-cooled/i.test(engine)) {
    return 'Air/oil-cooled'
  }

  if (/liquid-cooled/i.test(engine)) {
    return 'Liquid-cooled'
  }

  if (/air-cooled/i.test(engine)) {
    return 'Air-cooled'
  }

  return LOCAL_DATA_FALLBACK
}

function normalizeSnapshot(motorcycle: Motorcycle): TechnicalComparisonSnapshot {
  const search = getSearchConfig(motorcycle)
  const engine = getSpecValue(motorcycle, 'Engine')

  return {
    make: search.make,
    model: motorcycle.model,
    year: String(motorcycle.year),
    type: motorcycle.category,
    engine,
    power: getSpecValue(motorcycle, 'Power'),
    torque: getSpecValue(motorcycle, 'Torque'),
    displacement: extractDisplacement(engine),
    totalWeight: getSpecValue(motorcycle, 'Weight'),
    seatHeight: getSpecValue(motorcycle, 'Seat Height'),
    wheelbase: LOCAL_DATA_FALLBACK,
    fuelCapacity: LOCAL_DATA_FALLBACK,
    gearbox: LOCAL_DATA_FALLBACK,
    cooling: inferCooling(engine),
  }
}

export async function fetchTechnicalComparisonSnapshot(motorcycle: Motorcycle, signal?: AbortSignal) {
  if (signal?.aborted) {
    throw new DOMException('The operation was aborted.', 'AbortError')
  }

  return normalizeSnapshot(motorcycle)
}

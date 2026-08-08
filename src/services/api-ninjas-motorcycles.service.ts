import type { Motorcycle, MotorcycleTechnicalSearchConfig } from '../types/motorcycle'

type ApiNinjasMotorcycleRecord = {
  make?: string
  model?: string
  year?: string
  type?: string
  displacement?: string
  engine?: string
  power?: string
  torque?: string
  cooling?: string
  gearbox?: string
  total_weight?: string
  seat_height?: string
  wheelbase?: string
  fuel_capacity?: string
}

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

function normalizeToken(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function getSearchConfig(motorcycle: Motorcycle): MotorcycleTechnicalSearchConfig {
  return motorcycle.technicalSearch ?? {
    make: motorcycle.brand,
    model: motorcycle.model,
    year: motorcycle.year,
  }
}

function scoreCandidate(candidate: ApiNinjasMotorcycleRecord, search: MotorcycleTechnicalSearchConfig) {
  let score = 0

  const candidateMake = normalizeToken(candidate.make ?? '')
  const candidateModel = normalizeToken(candidate.model ?? '')
  const searchMake = normalizeToken(search.make)
  const searchModel = normalizeToken(search.model)

  if (candidateMake === searchMake) {
    score += 4
  } else if (candidateMake.includes(searchMake) || searchMake.includes(candidateMake)) {
    score += 2
  }

  if (candidateModel === searchModel) {
    score += 6
  } else if (candidateModel.includes(searchModel) || searchModel.includes(candidateModel)) {
    score += 3
  }

  if (search.year && candidate.year === String(search.year)) {
    score += 4
  }

  return score
}

function selectBestCandidate(results: ApiNinjasMotorcycleRecord[], search: MotorcycleTechnicalSearchConfig) {
  return [...results]
    .sort((left, right) => scoreCandidate(right, search) - scoreCandidate(left, search))
    .at(0)
}

function normalizeSnapshot(candidate: ApiNinjasMotorcycleRecord): TechnicalComparisonSnapshot {
  return {
    make: candidate.make ?? 'No disponible',
    model: candidate.model?.trim() || 'No disponible',
    year: candidate.year ?? 'No disponible',
    type: candidate.type ?? 'No disponible',
    engine: candidate.engine ?? 'No disponible',
    power: candidate.power ?? 'No disponible',
    torque: candidate.torque ?? 'No disponible',
    displacement: candidate.displacement ?? 'No disponible',
    totalWeight: candidate.total_weight ?? 'No disponible',
    seatHeight: candidate.seat_height ?? 'No disponible',
    wheelbase: candidate.wheelbase ?? 'No disponible',
    fuelCapacity: candidate.fuel_capacity ?? 'No disponible',
    gearbox: candidate.gearbox ?? 'No disponible',
    cooling: candidate.cooling ?? 'No disponible',
  }
}

export async function fetchTechnicalComparisonSnapshot(motorcycle: Motorcycle, signal?: AbortSignal) {
  const search = getSearchConfig(motorcycle)
  const params = new URLSearchParams({
    make: search.make,
    model: search.model,
  })

  if (search.year) {
    params.set('year', String(search.year))
  }

  const response = await fetch(`/api/motorcycles?${params.toString()}`, {
    method: 'GET',
    signal,
  })

  if (!response.ok) {
    throw new Error(`No se pudo consultar la ficha técnica (${response.status}).`)
  }

  const results = (await response.json()) as ApiNinjasMotorcycleRecord[]

  if (!Array.isArray(results) || results.length === 0) {
    throw new Error('No se encontraron resultados técnicos para esta moto.')
  }

  const bestCandidate = selectBestCandidate(results, search)

  if (!bestCandidate) {
    throw new Error('La API no devolvió una coincidencia utilizable.')
  }

  return normalizeSnapshot(bestCandidate)
}

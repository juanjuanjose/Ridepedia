import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { featuredMotorcycles, motorcycles } from '../../data/motorcycles'
import { fetchTechnicalComparisonSnapshot, type TechnicalComparisonSnapshot } from '../../services/api-ninjas-motorcycles.service'
import { ComparisonMetricCard } from '../common/ComparisonMetricCard'
import { Reveal } from '../common/Reveal'

type ComparatorSide = 'left' | 'right'

type ComparisonMetricDefinition = {
  key: keyof Pick<
    TechnicalComparisonSnapshot,
    'power' | 'torque' | 'displacement' | 'totalWeight' | 'seatHeight' | 'wheelbase' | 'fuelCapacity'
  >
  label: string
  detail: string
  unitLabel: string
  advantage?: 'higher' | 'lower'
}

const comparisonMetrics: ComparisonMetricDefinition[] = [
  {
    key: 'power',
    label: 'Potencia',
    detail: 'Sirve para leer empuje general y ambición de rendimiento.',
    unitLabel: 'hp',
    advantage: 'higher',
  },
  {
    key: 'torque',
    label: 'Torque',
    detail: 'Marca mejor la respuesta llena y usable en medios.',
    unitLabel: 'Nm',
    advantage: 'higher',
  },
  {
    key: 'displacement',
    label: 'Cilindrada',
    detail: 'Da contexto sobre el tamaño del motor y su posicionamiento.',
    unitLabel: 'cc',
    advantage: 'higher',
  },
  {
    key: 'totalWeight',
    label: 'Peso total',
    detail: 'Impacta mucho en agilidad, maniobra y sensación de volumen.',
    unitLabel: 'kg',
    advantage: 'lower',
  },
  {
    key: 'seatHeight',
    label: 'Altura del asiento',
    detail: 'Importa mucho para confianza en baja y lectura ergonómica.',
    unitLabel: 'mm',
  },
  {
    key: 'wheelbase',
    label: 'Distancia entre ejes',
    detail: 'Ayuda a leer estabilidad, presencia y orientación del chasis.',
    unitLabel: 'mm',
  },
  {
    key: 'fuelCapacity',
    label: 'Capacidad de combustible',
    detail: 'Da una pista rápida sobre autonomía y tipo de uso esperado.',
    unitLabel: 'L',
    advantage: 'higher',
  },
]

function parseMetricValue(rawValue: string) {
  const match = rawValue.replace(/,/g, '').match(/-?\d+(?:\.\d+)?/)
  return match ? Number.parseFloat(match[0]) : null
}

function formatDelta(unitLabel: string, leftValue: string, rightValue: string) {
  const leftNumeric = parseMetricValue(leftValue)
  const rightNumeric = parseMetricValue(rightValue)

  if (leftNumeric === null || rightNumeric === null) {
    return 'Lectura cualitativa'
  }

  const difference = Math.abs(leftNumeric - rightNumeric)

  if (difference === 0) {
    return 'Misma cifra'
  }

  return `Delta: ${difference.toFixed(difference >= 10 ? 0 : 1)} ${unitLabel}`
}

function getAdvantageSide(metric: ComparisonMetricDefinition, leftValue: string, rightValue: string): ComparatorSide | undefined {
  const leftNumeric = parseMetricValue(leftValue)
  const rightNumeric = parseMetricValue(rightValue)

  if (leftNumeric === null || rightNumeric === null || leftNumeric === rightNumeric || !metric.advantage) {
    return undefined
  }

  if (metric.advantage === 'higher') {
    return leftNumeric > rightNumeric ? 'left' : 'right'
  }

  return leftNumeric < rightNumeric ? 'left' : 'right'
}

function getMotorcycleBySlug(slug: string) {
  return motorcycles.find((motorcycle) => motorcycle.slug === slug) ?? motorcycles[0]
}

function isValidMotorcycleSlug(slug: string | null) {
  return slug ? motorcycles.some((motorcycle) => motorcycle.slug === slug) : false
}

function buildOverviewItems(snapshot: TechnicalComparisonSnapshot) {
  return [
    { label: 'Tipo', value: snapshot.type },
    { label: 'Motor', value: snapshot.engine },
    { label: 'Caja', value: snapshot.gearbox },
    { label: 'Refrigeración', value: snapshot.cooling },
  ]
}

export function TechnicalComparatorWorkbench() {
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultLeftSlug = featuredMotorcycles[0]?.slug ?? motorcycles[0].slug
  const defaultRightSlug = featuredMotorcycles[1]?.slug ?? motorcycles[1].slug
  const [leftSlug, setLeftSlug] = useState(() => (isValidMotorcycleSlug(searchParams.get('left')) ? searchParams.get('left')! : defaultLeftSlug))
  const [rightSlug, setRightSlug] = useState(() => (isValidMotorcycleSlug(searchParams.get('right')) ? searchParams.get('right')! : defaultRightSlug))
  const [leftSnapshot, setLeftSnapshot] = useState<TechnicalComparisonSnapshot | null>(null)
  const [rightSnapshot, setRightSnapshot] = useState<TechnicalComparisonSnapshot | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const leftMotorcycle = getMotorcycleBySlug(leftSlug)
  const rightMotorcycle = getMotorcycleBySlug(rightSlug)

  useEffect(() => {
    const leftFromQuery = searchParams.get('left')
    const rightFromQuery = searchParams.get('right')

    if (isValidMotorcycleSlug(leftFromQuery) && leftFromQuery !== leftSlug) {
      setLeftSlug(leftFromQuery)
    }

    if (isValidMotorcycleSlug(rightFromQuery) && rightFromQuery !== rightSlug) {
      setRightSlug(rightFromQuery)
    }
  }, [leftSlug, rightSlug, searchParams])

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams)
    nextParams.set('left', leftSlug)
    nextParams.set('right', rightSlug)

    if (nextParams.toString() !== searchParams.toString()) {
      setSearchParams(nextParams, { replace: true })
    }
  }, [leftSlug, rightSlug, searchParams, setSearchParams])

  useEffect(() => {
    const abortController = new AbortController()

    async function loadComparison() {
      setIsLoading(true)
      setErrorMessage(null)

      try {
        const [leftResult, rightResult] = await Promise.all([
          fetchTechnicalComparisonSnapshot(leftMotorcycle, abortController.signal),
          fetchTechnicalComparisonSnapshot(rightMotorcycle, abortController.signal),
        ])

        setLeftSnapshot(leftResult)
        setRightSnapshot(rightResult)
      } catch (error) {
        if (abortController.signal.aborted) {
          return
        }

        setErrorMessage(error instanceof Error ? error.message : 'No se pudo cargar la comparación técnica.')
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    void loadComparison()

    return () => abortController.abort()
  }, [leftMotorcycle, rightMotorcycle])

  return (
    <div className="section-shell mt-6 space-y-10 pb-6 md:mt-8">
      <Reveal>
        <section className="overflow-hidden rounded-[40px] border border-black/8 bg-[var(--ride-paper)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8 lg:p-10">
          <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr] xl:items-end">
            <div>
              <p className="editorial-eyebrow text-black/45">Comparador técnico</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] text-black sm:text-5xl lg:text-[4.15rem]">
                Compará dos motos lado a lado con datos reales antes de dejarte llevar por la intuición.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-black/64 sm:text-lg">
                Esta es la primera vertical secundaria realmente funcional: cruza potencia, torque, peso, altura del asiento y otras métricas importantes para convertir descubrimiento en decisión.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Ficha técnica local', 'Cards reutilizables', 'Comparación clara de deltas'].map((highlight) => (
                  <span key={highlight} className="rounded-full border border-[#2563EB]/16 bg-[#2563EB]/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#2563EB]">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-[linear-gradient(180deg,#111827,#020617)] p-6 shadow-[0_28px_90px_rgba(15,23,42,0.18)] md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <p className="text-xs uppercase tracking-[0.32em] text-white/42">Selección activa</p>
                <span className="rounded-full border border-[#2563EB]/45 bg-[#2563EB]/20 px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] text-white/82">
                  MVP funcional
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {[leftMotorcycle, rightMotorcycle].map((motorcycle) => (
                  <article key={motorcycle.slug} className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/42">{motorcycle.category}</p>
                    <p className="mt-3 text-xl font-medium text-white">{motorcycle.brand} {motorcycle.model}</p>
                    <p className="mt-3 text-sm leading-7 text-white/62">{motorcycle.tagline}</p>
                  </article>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setLeftSlug(rightSlug)
                  setRightSlug(leftSlug)
                }}
                className="mt-5 inline-flex rounded-full border border-white/14 px-5 py-3 text-sm font-medium text-white/82 transition hover:border-white/32"
              >
                Invertir comparación
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-[36px] border border-black/8 bg-[linear-gradient(180deg,#fcfbf8,#f5efe8)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:p-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              { title: 'Moto A', motorcycle: leftMotorcycle, value: leftSlug, onChange: setLeftSlug },
              { title: 'Moto B', motorcycle: rightMotorcycle, value: rightSlug, onChange: setRightSlug },
            ].map((selector) => (
              <div key={selector.title} className="rounded-[28px] border border-black/8 bg-white/80 p-5 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
                <p className="text-xs uppercase tracking-[0.3em] text-black/42">{selector.title}</p>
                <h2 className="mt-3 text-2xl font-semibold text-black">{selector.motorcycle.brand} {selector.motorcycle.model}</h2>
                <p className="mt-2 text-sm leading-7 text-black/64">{selector.motorcycle.summary}</p>

                <label className="mt-4 block text-xs uppercase tracking-[0.24em] text-black/42" htmlFor={`selector-${selector.title}`}>
                  Elegir modelo
                </label>
                <select
                  id={`selector-${selector.title}`}
                  value={selector.value}
                  onChange={(event) => selector.onChange(event.target.value)}
                  className="mt-3 w-full rounded-[20px] border border-black/10 bg-[var(--ride-paper)] px-4 py-3 text-sm text-black outline-none transition focus:border-[#2563EB]"
                >
                  {motorcycles.map((motorcycle) => (
                    <option key={motorcycle.slug} value={motorcycle.slug}>
                      {motorcycle.brand} {motorcycle.model} ({motorcycle.year})
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {isLoading ? (
        <Reveal>
          <section className="rounded-[36px] border border-black/8 bg-white/82 p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
            <p className="text-xs uppercase tracking-[0.3em] text-black/42">Preparing technical snapshot</p>
            <p className="mt-4 text-base leading-8 text-black/64">Loading local demo data to compare these two motorcycles.</p>
          </section>
        </Reveal>
      ) : null}

      {errorMessage ? (
        <Reveal>
          <section className="rounded-[36px] border border-[#9D2235]/18 bg-[#9D2235]/6 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9D2235]">No se pudo cargar la comparación</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-black/68">{errorMessage}</p>
          </section>
        </Reveal>
      ) : null}

      {!isLoading && !errorMessage && leftSnapshot && rightSnapshot ? (
        <>
          <Reveal>
            <section className="grid gap-6 xl:grid-cols-2">
              {[
                { motorcycle: leftMotorcycle, snapshot: leftSnapshot },
                { motorcycle: rightMotorcycle, snapshot: rightSnapshot },
              ].map(({ motorcycle, snapshot }) => (
                <article key={motorcycle.slug} className="rounded-[32px] border border-black/8 bg-white/82 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-black/42">Local technical snapshot</p>
                      <h2 className="mt-3 text-3xl font-semibold text-black">{motorcycle.brand} {motorcycle.model}</h2>
                    </div>
                    <span className="rounded-full border border-black/10 bg-[var(--ride-paper)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-black/58">
                      {snapshot.year}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {buildOverviewItems(snapshot).map((item) => (
                      <div key={item.label} className="rounded-[20px] border border-black/8 bg-[#f8f4ef] px-4 py-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/42">{item.label}</p>
                        <p className="mt-2 text-sm leading-7 text-black/68">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          </Reveal>

          <Reveal>
            <section className="space-y-5">
              <div className="max-w-3xl">
                <p className="editorial-eyebrow text-black/45">Lectura comparativa</p>
                <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">Diferencias clave para empezar a decidir con más criterio.</h2>
                <p className="mt-4 text-base leading-8 text-black/64">
                  Algunas métricas dan una ventaja clara; otras simplemente explican dos filosofías distintas. La gracia del comparador es volver visible esa diferencia sin perder legibilidad.
                </p>
              </div>

              <div className="grid gap-4 xl:grid-cols-2">
                {comparisonMetrics.map((metric) => (
                  <ComparisonMetricCard
                    key={metric.key}
                    label={metric.label}
                    detail={metric.detail}
                    delta={formatDelta(metric.unitLabel, leftSnapshot[metric.key], rightSnapshot[metric.key])}
                    leftLabel={`${leftMotorcycle.brand} ${leftMotorcycle.model}`}
                    leftValue={leftSnapshot[metric.key]}
                    rightLabel={`${rightMotorcycle.brand} ${rightMotorcycle.model}`}
                    rightValue={rightSnapshot[metric.key]}
                    leftAccent={leftMotorcycle.accent}
                    rightAccent={rightMotorcycle.accent}
                    advantage={getAdvantageSide(metric, leftSnapshot[metric.key], rightSnapshot[metric.key])}
                  />
                ))}
              </div>
            </section>
          </Reveal>
        </>
      ) : null}
    </div>
  )
}

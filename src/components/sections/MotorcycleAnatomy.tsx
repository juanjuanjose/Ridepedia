import { lazy, Suspense, useState } from 'react'

import type { Motorcycle } from '../../types/motorcycle'
import { Reveal } from '../common/Reveal'

const StreetfighterStage = lazy(() => import('../3d/StreetfighterStage'))
const DUCATI_NAKED_MODEL_URL = '/motorcycles/2024-ducati-streetfighter-v4-s/source/2024%20Ducati%20StreetFighter%20V4%20S.glb'
const BMW_S1000RR_MODEL_URL = '/motorcycles/bmw-s1000rr-2019/source/8788%207%20%2080884.glb'
const KTM_450_MODEL_URL = '/motorcycles/ktm_450_exc.glb'
const FREE_HONDA_MODEL_URL = '/motorcycles/free_honda_crf_450.glb'

const motorcycleCategories = [
  {
    label: 'Naked',
    slug: 'naked',
    description: 'Deportivas sin carenado, ágiles y versátiles.',
    model: 'Ducati Streetfighter V4',
    summary:
      'Las naked mezclan carácter deportivo con una lectura visual más directa. Son motos intensas, ágiles y versátiles para un uso fuerte en calle y ruta.',
    strengths: ['Aceleración explosiva', 'Postura más libre', 'Gran respuesta urbana y de carretera'],
    usage: 'Ciudad rápida, escapadas de fin de semana y conducción deportiva sin carenado.',
    stats: [
      { label: 'Potencia', value: '208 hp' },
      { label: 'Torque', value: '123 Nm' },
      { label: 'Peso', value: '197.5 kg' },
    ],
    hasModel: true,
    modelUrl: DUCATI_NAKED_MODEL_URL,
  },
  {
    label: 'Deportivas',
    slug: 'sport',
    description: 'Máximo rendimiento en carretera y circuito.',
    model: 'BMW S1000RR',
    summary:
      'Las deportivas nacen para velocidad, estabilidad en altas revoluciones y precisión en curva. Todo en ellas está pensado para exprimir rendimiento.',
    strengths: ['Aerodinámica agresiva', 'Respuesta inmediata', 'Gran velocidad punta'],
    usage: 'Circuito, carreteras rápidas y conducción de alto ritmo.',
    stats: [
      { label: 'Potencia', value: '216 hp' },
      { label: 'Torque', value: '120 Nm' },
      { label: 'Peso', value: '191 kg' },
    ],
    hasModel: true,
    modelUrl: BMW_S1000RR_MODEL_URL,
  },
  {
    label: 'Adventure',
    slug: 'adventure',
    description: 'Preparadas para asfalto y caminos difíciles.',
    model: 'BMW R1300GS',
    summary:
      'Las adventure priorizan distancia, comodidad y capacidad para salir del asfalto sin perder compostura en carretera.',
    strengths: ['Ergonomía para viaje', 'Suspensión larga', 'Versatilidad total'],
    usage: 'Ruta, touring mixto y caminos complejos.',
    stats: [
      { label: 'Potencia', value: '145 hp' },
      { label: 'Torque', value: '149 Nm' },
      { label: 'Autonomía', value: 'Alta' },
    ],
    hasModel: false,
  },
  {
    label: 'Touring',
    slug: 'touring',
    description: 'Diseñadas para recorrer largas distancias con comodidad.',
    model: 'Yamaha Tracer 9 GT',
    summary:
      'Las touring se enfocan en confort sostenido, protección aerodinámica y facilidad para devorar kilómetros con equipaje y acompañante.',
    strengths: ['Confort prolongado', 'Capacidad de carga', 'Protección contra el viento'],
    usage: 'Viajes extensos, carretera y trayectos de muchas horas.',
    stats: [
      { label: 'Potencia', value: '119 hp' },
      { label: 'Torque', value: '93 Nm' },
      { label: 'Confort', value: 'Muy alto' },
    ],
    hasModel: false,
  },
  {
    label: 'Enduro',
    slug: 'enduro',
    description: 'Pensadas para uso fuera del asfalto y terrenos exigentes.',
    model: 'KTM 450',
    summary:
      'Las enduro están hechas para terreno roto, control físico y respuesta inmediata en contextos donde el asfalto deja de existir.',
    strengths: ['Ligereza', 'Suspensión off-road', 'Tracción en terreno técnico'],
    usage: 'Senderos, montaña y off-road exigente.',
    stats: [
      { label: 'Peso', value: 'Bajo' },
      { label: 'Suspensión', value: 'Larga' },
      { label: 'Terreno', value: 'Extremo' },
    ],
    hasModel: true,
    modelUrl: KTM_450_MODEL_URL,
  },
  {
    label: 'Motocross',
    slug: 'motocross',
    description: 'Exclusivas para circuitos de tierra y saltos.',
    model: 'Free Honda',
    summary:
      'Motocross significa reacción instantánea, chasis compacto y resistencia para saltos, apoyos fuertes y tierra constante.',
    strengths: ['Explosión en baja', 'Geometría compacta', 'Preparación para saltos'],
    usage: 'Pistas de tierra, competencia y entrenamiento técnico.',
    stats: [
      { label: 'Motor', value: '450 cc' },
      { label: 'Peso', value: 'Ligero' },
      { label: 'Uso', value: 'Circuito' },
    ],
    hasModel: true,
    modelUrl: FREE_HONDA_MODEL_URL,
  },
  {
    label: 'Supermotard',
    slug: 'supermotard',
    description: 'Enduro adaptadas al asfalto con comportamiento muy deportivo.',
    model: 'KTM 690 SMC R',
    summary:
      'Las supermotard llevan la base ligera del off-road al asfalto y la convierten en una herramienta de diversión, frenada tardía y cambios de apoyo rápidos.',
    strengths: ['Agilidad extrema', 'Frenada fuerte', 'Diversión urbana'],
    usage: 'Ciudad, tramos revirados y conducción juguetona.',
    stats: [
      { label: 'Peso', value: 'Ligero' },
      { label: 'Par', value: 'Alto' },
      { label: 'Control', value: 'Muy directo' },
    ],
    hasModel: false,
  },
  {
    label: 'Cruiser',
    slug: 'cruiser',
    description: 'Conducción relajada, mucho torque y estilo clásico.',
    model: 'Harley-Davidson Fat Boy',
    summary:
      'Las cruiser ponen por delante el torque, la postura relajada y una presencia visual pesada que busca disfrutar el recorrido con calma y estilo.',
    strengths: ['Torque desde abajo', 'Confort relajado', 'Estética clásica'],
    usage: 'Paseo, ciudad tranquila y rutas abiertas.',
    stats: [
      { label: 'Torque', value: 'Muy alto' },
      { label: 'Postura', value: 'Relajada' },
      { label: 'Estilo', value: 'Icónico' },
    ],
    hasModel: false,
  },
] as const

interface MotorcycleAnatomyProps {
  motorcycle: Motorcycle
}

export function MotorcycleAnatomy({ motorcycle: _motorcycle }: MotorcycleAnatomyProps) {
  const [isInteractive, setIsInteractive] = useState(false)
  const [selectedCategorySlug, setSelectedCategorySlug] = useState('naked')
  const selectedCategory = motorcycleCategories.find((category) => category.slug === selectedCategorySlug) ?? motorcycleCategories[0]
  const activeModelUrl = 'modelUrl' in selectedCategory ? selectedCategory.modelUrl : null
  const showModel = selectedCategory.hasModel && activeModelUrl !== null

  return (
    <>
      <Reveal className="section-shell mt-24">
        <section className="px-1 py-1 md:px-2">
          <h2 className="text-3xl font-semibold text-black lg:text-[3.2rem] lg:leading-[1.02]">Qué son las motocicletas</h2>
          <p className="mt-4 max-w-5xl text-base leading-8 text-black/70 lg:text-lg">
              Una motocicleta resume movilidad, carácter y especialización en una sola pieza. Según su categoría puede priorizar velocidad, viaje, tierra, confort o control técnico, y por eso la lectura cambia cuando seleccionás un tipo distinto.
          </p>
        </section>
      </Reveal>

      <Reveal className="mx-auto mt-8 w-[min(1860px,calc(100%-0.75rem))]">
        <section className="grid gap-4 lg:grid-cols-[2.38fr_0.72fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[42px] bg-[#090909] p-7 text-[#f5f3ef] shadow-[0_44px_150px_rgba(0,0,0,0.24)] md:p-10">
            <div className="grid gap-3 border-b border-white/10 pb-6 lg:grid-cols-[0.18fr_1fr] lg:items-end">
              <p className="editorial-eyebrow text-white/52">Modelo 3D</p>
              <div>
                <h2 className="text-3xl font-semibold text-white xl:text-[2.5rem]">Exploración visual por tipo de moto</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-white/68 xl:text-[15px]">
                  Elegí una categoría y el modelo se convierte en la pieza central de la sección. El panel descriptivo vive aparte para que la escena respire.
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.28em] text-white/42">
                  Modelos activos en Naked, Deportivas, Enduro y Motocross
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.11fr_0.89fr] lg:items-stretch">
              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="grid gap-2">
                  {motorcycleCategories.map((category) => {
                    const isSelected = category.slug === selectedCategory.slug

                    return (
                      <button
                        key={category.slug}
                        type="button"
                        onClick={() => setSelectedCategorySlug(category.slug)}
                        className={`min-h-[4.7rem] rounded-[22px] px-3 py-3 text-left text-[11px] font-medium uppercase tracking-[0.16em] transition ${isSelected ? 'bg-[#9D2235] text-white shadow-[0_16px_30px_rgba(157,34,53,0.32)]' : 'bg-white/4 text-white/62 hover:bg-white/8 hover:text-white'}`}
                      >
                        {category.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.66),rgba(10,10,10,0.52)),url('/motorcycles/hangar.webp')] bg-cover bg-center p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:p-5">
                {showModel ? (
                  <div
                    className="relative h-full min-h-[34rem] overflow-hidden rounded-[30px] border border-white/8 bg-[rgba(2,6,23,0.18)] lg:min-h-[44rem]"
                    onMouseEnter={() => setIsInteractive(true)}
                    onMouseLeave={() => setIsInteractive(false)}
                  >
                    <Suspense
                      fallback={
                        <div className="flex h-full items-center justify-center text-sm text-white/50">
                          Cargando modelo 3D...
                        </div>
                      }
                    >
                      <StreetfighterStage
                        modelUrl={activeModelUrl}
                        interactive={isInteractive}
                        resetSignal={selectedCategory.slug}
                      />
                    </Suspense>

                  <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/72">
                    {isInteractive ? '360 activo' : 'Pasá el cursor para girar'}
                  </div>

                  <div className="pointer-events-none absolute left-5 top-5 rounded-[22px] border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/48">Tipo activo</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{selectedCategory.label}</p>
                  </div>
                </div>
              ) : (
                  <div className="flex h-full min-h-[34rem] flex-col items-start justify-between rounded-[30px] border border-dashed border-white/10 bg-black/34 p-8 backdrop-blur-[2px] lg:min-h-[44rem]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/42">Modelo 3D</p>
                      <h3 className="mt-3 text-5xl font-semibold text-white">{selectedCategory.label}</h3>
                    </div>

                    <div>
                      <p className="mt-4 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
                        Modelo 3D próximamente
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="rounded-[42px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,244,239,0.98))] p-8 shadow-[0_34px_110px_rgba(15,23,42,0.11)] ring-1 ring-black/5 md:p-10">
            <p className="editorial-eyebrow text-black/45">Tipo de moto</p>
            <h3 className="mt-3 text-5xl font-semibold text-black xl:text-[4.25rem] xl:leading-[0.96]">{selectedCategory.label}</h3>
            <p className="mt-5 rounded-[24px] border border-black/8 bg-white/78 px-5 py-5 text-base leading-8 text-black/72">
              {selectedCategory.summary}
            </p>

            <div className="mt-6 rounded-[28px] border border-black/8 bg-white/88 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-black/42">Uso principal</p>
              <p className="mt-3 text-base leading-8 text-black/72">{selectedCategory.usage}</p>
            </div>

            <div className="mt-4 rounded-[28px] border border-black/8 bg-white/88 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-black/42">Fortalezas</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedCategory.strengths.map((strength) => (
                  <span key={strength} className="rounded-full border border-black/10 px-4 py-2.5 text-sm text-black/76">
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2">
              {selectedCategory.stats.map((stat) => (
                <div key={stat.label} className="rounded-[24px] border border-black/8 bg-white/88 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-black/42">{stat.label}</p>
                  <p className="mt-3 text-xl font-medium text-black">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[24px] border border-dashed border-black/10 px-5 py-5 text-sm leading-7 text-black/52">
              {selectedCategory.hasModel
                ? `Demo activa: ${selectedCategory.model} en vista 360 sin reinicios por hover ni interferencia del scroll.`
                : 'Cuando sumes el siguiente `.glb`, solo cambiará el modelo mientras este panel mantiene su lectura.'}
            </div>
          </aside>
        </section>
      </Reveal>
    </>
  )
}

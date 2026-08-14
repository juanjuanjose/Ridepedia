import { useEffect, useState } from 'react'

import { Reveal } from '../common/Reveal'
import { resolveAssetPath } from '../../utils/asset-path'

type LearnBikeCategory = {
  slug: string
  label: string
  modelName: string
  description: string
  keyTraits: string[]
  strengths: string[]
  modelUrl: string
  posterUrl?: string
  accent: string
  cameraOrbit: string
  orientation: string
  exposure: string
}

const learnBikeCategories: LearnBikeCategory[] = [
  {
    slug: 'naked',
    label: 'Naked',
    modelName: 'Ducati Streetfighter V4 S',
    description:
      'Las naked priorizan respuesta, ligereza visual y una postura más libre. Son motos intensas para calle rápida, curvas y uso diario con carácter deportivo.',
    keyTraits: ['Sin carenado completo', 'Postura más erguida', 'Entrega agresiva de potencia'],
    strengths: ['Gran agilidad urbana', 'Sensación directa con la moto', 'Versatilidad entre ciudad y ruta'],
    modelUrl: resolveAssetPath('/motorcycles/2024-ducati-streetfighter-v4-s/source/2024%20Ducati%20StreetFighter%20V4%20S.glb'),
    accent: '#9d2235',
    cameraOrbit: '28deg 72deg 7m',
    orientation: '0deg 0deg 0deg',
    exposure: '0.9',
  },
  {
    slug: 'sport',
    label: 'Deportiva',
    modelName: 'BMW S1000RR',
    description:
      'Las deportivas nacen para velocidad, estabilidad y precisión en curva. Todo en ellas busca rendimiento, aerodinámica y control a ritmos altos.',
    keyTraits: ['Carenado aerodinámico', 'Posición más cargada al frente', 'Chasis enfocado en alta precisión'],
    strengths: ['Excelente estabilidad', 'Alta velocidad punta', 'Respuesta ideal para circuito y carretera rápida'],
    modelUrl: resolveAssetPath('/motorcycles/bmw-s1000rr-2019/source/8788%207%20%2080884.glb'),
    accent: '#2563eb',
    cameraOrbit: '24deg 72deg 6.9m',
    orientation: '0deg 0deg 0deg',
    exposure: '0.78',
  },
  {
    slug: 'enduro',
    label: 'Enduro',
    modelName: 'KTM 450 EXC',
    description:
      'Las enduro están pensadas para terreno roto, control técnico y trabajo físico del piloto. Buscan tracción, ligereza y absorción fuera del asfalto.',
    keyTraits: ['Suspensión larga', 'Peso contenido', 'Diseño para terreno técnico'],
    strengths: ['Control en senderos', 'Capacidad off-road real', 'Gran respuesta en superficies difíciles'],
    modelUrl: resolveAssetPath('/motorcycles/ktm_450_exc.glb'),
    accent: '#ea580c',
    cameraOrbit: '28deg 74deg 7.1m',
    orientation: '0deg 0deg 0deg',
    exposure: '0.88',
  },
  {
    slug: 'motocross',
    label: 'Motocross',
    modelName: 'Honda CRF 450',
    description:
      'Las motocross están hechas para circuitos de tierra, saltos y cambios de apoyo violentos. Su foco es reacción inmediata y resistencia al uso extremo.',
    keyTraits: ['Chasis compacto', 'Preparación para saltos', 'Uso específico de pista'],
    strengths: ['Explosión en baja', 'Cambios rápidos de dirección', 'Muy buen desempeño en tierra cerrada'],
    modelUrl: resolveAssetPath('/motorcycles/free_honda_crf_450.glb'),
    accent: '#dc2626',
    cameraOrbit: '28deg 74deg 7m',
    orientation: '0deg 0deg 0deg',
    exposure: '0.88',
  },
]

export function LearnBikeSection() {
  const [isViewerReady, setIsViewerReady] = useState(false)
  const [selectedSlug, setSelectedSlug] = useState(learnBikeCategories[0].slug)
  const selectedCategory = learnBikeCategories.find((category) => category.slug === selectedSlug) ?? learnBikeCategories[0]

  useEffect(() => {
    let isMounted = true

    void import('@google/model-viewer').then(() => {
      if (isMounted) {
        setIsViewerReady(true)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Reveal className="mx-auto mt-24 w-[min(1440px,calc(100%-2rem))]">
      <section id="learnbike" className="px-1 py-1 md:px-2">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="editorial-eyebrow text-black/45">LearnBike / experiencia 3D</p>
            <h2 className="mt-3 text-3xl font-semibold text-black lg:text-[3.2rem] lg:leading-[1.02]">
              El 3D se mantiene visible porque le da identidad al portal y explica motos de una forma más rica.
            </h2>
            <p className="mt-4 text-base leading-8 text-black/70 lg:text-lg">
              LearnBike suma una capa premium de exploración y anticipa cómo Ridepedia puede contar diferencias entre motos más allá del texto y las fichas.
              No reemplaza al catálogo: lo complementa y vuelve más memorable la entrada al producto.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
            <span className="rounded-full border border-[#9d2235]/18 bg-[#f6f1eb] px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#9d2235]">
              Punto estratégico
            </span>
            <span className="rounded-full border border-black/12 bg-[#f1ece5] px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-black/58">
              Refuerza el futuro comparador
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.72fr_1.08fr] xl:items-stretch 2xl:grid-cols-[1.8fr_1fr]">
          <div className="overflow-hidden rounded-[36px] border border-black/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%),linear-gradient(180deg,#111827,#020617)] p-5 shadow-[0_34px_110px_rgba(15,23,42,0.2)] md:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/42">Visor interactivo</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Explorá categorías de motos en 3D</h3>
                </div>
              <div
                className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/80"
                style={{ borderColor: `${selectedCategory.accent}66`, backgroundColor: `${selectedCategory.accent}22` }}
              >
                {selectedCategory.label}
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
              {isViewerReady ? (
                <model-viewer
                  key={selectedCategory.slug}
                  src={selectedCategory.modelUrl}
                  poster={selectedCategory.posterUrl}
                  alt={`Modelo 3D de ${selectedCategory.modelName}`}
                  camera-controls
                  touch-action="pan-y"
                  shadow-intensity="0.75"
                  exposure={selectedCategory.exposure}
                  interaction-prompt="auto"
                  loading="eager"
                  reveal="auto"
                  tone-mapping="neutral"
                  camera-orbit={selectedCategory.cameraOrbit}
                  orientation={selectedCategory.orientation}
                  min-camera-orbit="auto auto 4m"
                  max-camera-orbit="auto auto 9m"
                  field-of-view="26deg"
                  style={{ width: '100%', height: 'clamp(32rem, 56vw, 50rem)', minHeight: '32rem', background: 'transparent' }}
                />
              ) : (
                <div className="flex min-h-[32rem] items-center justify-center px-6 text-center text-sm uppercase tracking-[0.28em] text-white/40 md:min-h-[50rem]">
                  Cargando visor 3D...
                </div>
              )}
            </div>

              <p className="mt-4 text-sm leading-7 text-white/58">
                  Modelo activo: <span className="text-white/82">{selectedCategory.modelName}</span>. Esta pieza funciona como gancho visual y también como prueba de que Ridepedia puede explicar categorías de forma visual, no solo con specs.
                </p>
              </div>

          <aside className="rounded-[36px] border border-black/12 bg-[linear-gradient(180deg,rgba(249,245,239,0.98),rgba(241,235,227,0.96))] p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] md:p-8 xl:p-9">
            <p className="editorial-eyebrow text-black/45">Tipo de moto</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {learnBikeCategories.map((category) => {
                const isSelected = category.slug === selectedCategory.slug

                return (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => setSelectedSlug(category.slug)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${isSelected ? 'text-white shadow-[0_18px_35px_rgba(15,23,42,0.16)]' : 'border-black/12 bg-[#f3eee8] text-black/68 hover:border-black/22 hover:text-black'}`}
                    style={
                      isSelected
                        ? {
                            borderColor: selectedCategory.accent,
                            backgroundColor: selectedCategory.accent,
                          }
                        : undefined
                    }
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>

            <h3 className="mt-6 text-4xl font-semibold text-black xl:text-[4rem] xl:leading-[0.96]">{selectedCategory.label}</h3>
            <p className="mt-5 rounded-[24px] border border-black/10 bg-[#f5f0e9] px-5 py-5 text-base leading-8 text-black/72">
              {selectedCategory.description}
            </p>

            <div className="mt-4 rounded-[24px] border border-black/10 bg-[#f5efe8] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-black/42">Rasgos clave</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedCategory.keyTraits.map((trait) => (
                  <span key={trait} className="rounded-full border border-black/12 bg-[#efe8e0] px-4 py-2.5 text-sm text-black/76">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[24px] border border-black/10 bg-[#f5efe8] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-black/42">Fortalezas</p>
              <div className="mt-4 grid gap-3">
                {selectedCategory.strengths.map((strength) => (
                  <div key={strength} className="rounded-[18px] border border-black/10 bg-[#eee7df] px-4 py-3 text-sm text-black/72">
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Reveal>
  )
}

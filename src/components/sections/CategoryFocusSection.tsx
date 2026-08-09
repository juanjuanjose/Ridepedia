import { Link } from 'react-router-dom'

import type { Motorcycle, MotorcycleCategory } from '../../types/motorcycle'
import { Reveal } from '../common/Reveal'

type CategoryFocus = {
  eyebrow: string
  title: string
  description: string
  pillars: Array<{
    label: string
    title: string
    description: string
  }>
  comparePrompt: string
}

const categoryFocusMap: Record<MotorcycleCategory, CategoryFocus> = {
  Naked: {
    eyebrow: 'Lectura de categoría',
    title: 'En una naked importa tanto la respuesta del motor como la sensación de control y postura.',
    description:
      'Estas motos viven de cómo mezclan carácter, agilidad y uso real. Una buena naked entra rápido por los ojos, pero se define por lo que transmite en ciudad, curvas y escapadas cortas.',
    pillars: [
      {
        label: 'Postura',
        title: 'Más libertad arriba de la moto',
        description: 'Manillar alto, menos carga en muñecas y una lectura más directa del chasis cambian por completo la experiencia.',
      },
      {
        label: 'Entrega',
        title: 'Motor que se siente desde medio régimen',
        description: 'En esta categoría importa mucho cómo responde al salir de curva o al abrir gas en uso diario, no solo la cifra final.',
      },
      {
        label: 'Decisión',
        title: 'Diseño fuerte sin perder utilidad',
        description: 'Las mejores naked equilibran presencia visual, equipamiento y una posición que siga funcionando fuera de la foto.',
      },
    ],
    comparePrompt: 'Si la estás mirando en serio, compará postura, peso, electrónica y cómo entrega potencia en calle antes que la potencia máxima sola.',
  },
  Adventure: {
    eyebrow: 'Lectura de categoría',
    title: 'En una adventure pesan el viaje, la comodidad y qué tan honesta es su promesa fuera del asfalto.',
    description:
      'La categoría mezcla motos para viajar lejos, para uso mixto y para imaginar rutas más grandes. Lo importante es separar la estética aventurera de la capacidad real.',
    pillars: [
      {
        label: 'Ergonomía',
        title: 'Postura alta y control amplio',
        description: 'Altura de asiento, protección aerodinámica y posición de pies/manos determinan si sirve para muchas horas arriba.',
      },
      {
        label: 'Terreno',
        title: 'No todas interpretan igual la aventura',
        description: 'Algunas están mucho más cerca del touring que del off-road, así que conviene leer ruedas, suspensión y peso con cuidado.',
      },
      {
        label: 'Decisión',
        title: 'Uso real antes que fantasía de viaje',
        description: 'Conviene elegir según ciudad, ruta, pasajero y escapadas reales, no solo por la imagen de expedición que proyecta.',
      },
    ],
    comparePrompt: 'Compará peso, altura de asiento, autonomía y enfoque de suspensión para saber si estás frente a una trail media, una touring alta o una ADV grande.',
  },
  Sport: {
    eyebrow: 'Lectura de categoría',
    title: 'En una sport la posición, la aerodinámica y la precisión pesan tanto como la potencia declarada.',
    description:
      'Estas motos viven más cerca de la velocidad, pero no todas sirven para lo mismo. Algunas están pensadas para carretera rápida y otras ya rozan una lógica de circuito.',
    pillars: [
      {
        label: 'Posición',
        title: 'Una postura que condiciona toda la experiencia',
        description: 'Clip-ons, altura de estriberas y carga al frente marcan si la moto será tolerable en uso real o si pide conducción más intensa.',
      },
      {
        label: 'Chasis',
        title: 'Precisión más importante que cifra suelta',
        description: 'En esta categoría cambia mucho cómo frena, apoya y transmite confianza a ritmo alto.',
      },
      {
        label: 'Decisión',
        title: 'Elegir entre deseo puro y uso sostenible',
        description: 'La mejor compra no siempre es la más extrema; muchas veces gana la moto que todavía podés disfrutar fuera del contexto ideal.',
      },
    ],
    comparePrompt: 'Antes de decidir, mirá postura, peso, electrónica y tipo de motor para separar una sport utilizable de una mucho más radical.',
  },
  'Modern Classic': {
    eyebrow: 'Lectura de categoría',
    title: 'En una modern classic el encanto visual tiene que sostenerse con una moto que siga siendo buena para usar.',
    description:
      'Acá importan proporción, terminación y personalidad, pero también confort, respuesta y qué tan bien convive esa estética con una moto actual.',
    pillars: [
      {
        label: 'Diseño',
        title: 'La silueta tiene un peso enorme',
        description: 'Tanque, asiento, iluminación y motor expuesto no son detalles: son parte central de por qué esta categoría existe.',
      },
      {
        label: 'Carácter',
        title: 'Importa cómo entrega sensaciones',
        description: 'La respuesta del motor, el sonido y la forma en que acelera pesan tanto como el equipamiento cuando se elige una moto así.',
      },
      {
        label: 'Decisión',
        title: 'Estilo sí, pero con uso real detrás',
        description: 'Una buena modern classic no solo entra por nostalgia: también tiene que funcionar en ciudad, ruta corta y uso frecuente.',
      },
    ],
    comparePrompt: 'Compará posición, peso, respuesta del motor y nivel de terminación para distinguir una retro estética de una modern classic realmente lograda.',
  },
}

interface CategoryFocusSectionProps {
  motorcycle: Motorcycle
}

export function CategoryFocusSection({ motorcycle }: CategoryFocusSectionProps) {
  const focus = categoryFocusMap[motorcycle.category]

  return (
    <Reveal className="section-shell mt-20">
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <div className="rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,#fcfbf8,#f3eee7)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] md:p-8 xl:sticky xl:top-28">
          <p className="editorial-eyebrow text-black/45">{focus.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-black sm:text-[2.5rem] sm:leading-[1.04]">
            {focus.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-black/66">{focus.description}</p>

          <div className="mt-6 rounded-[24px] border border-black/8 bg-white/84 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-black/42">Qué comparar después</p>
            <p className="mt-3 text-sm leading-7 text-black/66">{focus.comparePrompt}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={`/technical-comparator?left=${motorcycle.slug}`}
              className="inline-flex rounded-full bg-[var(--ride-tech)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
            >
              Abrir comparación
            </Link>
            <Link
              to="/catalog"
              className="inline-flex rounded-full border border-black/10 bg-white/84 px-5 py-3 text-sm font-medium text-black/78 transition hover:border-[var(--ride-brand-line)] hover:text-[var(--ride-brand)]"
            >
              Volver al catálogo
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-3">
          {focus.pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[28px] border border-black/8 bg-white/84 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--ride-brand)]">{pillar.label}</p>
              <h3 className="mt-3 text-[1.35rem] font-semibold leading-[1.08] text-black">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/64">{pillar.description}</p>
            </article>
          ))}

          <article className="rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,var(--ride-dark-2),#020617)] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.18)] md:col-span-3">
            <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/42">En esta ficha</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{motorcycle.brand} {motorcycle.model}</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {motorcycle.heroStats.map((stat) => (
                  <div key={stat} className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/78">
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </Reveal>
  )
}

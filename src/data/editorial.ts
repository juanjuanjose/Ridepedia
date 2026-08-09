import { resolveAssetPath } from '../utils/asset-path'

export type EditorialStory = {
  id: string
  section: string
  title: string
  summary: string
  href: string
  meta: string
  accent: string
}

export type EditorialBrief = {
  id: string
  label: string
  title: string
  summary: string
}

export const editorialLeadStory = {
  section: 'Portada del dia',
  title: 'La agenda motera cambia rapido: mercado, uso real y nuevas motos vuelven a cruzarse en la misma conversacion.',
  summary:
    'Marcas en movimiento, segmentos que se reordenan y modelos que concentran miradas: la actualidad del sector ya no pasa por un solo titular.',
  href: '/news',
  cta: 'Ver noticias',
  highlights: ['Mercado', 'Tendencias', 'Modelos clave'],
  image: resolveAssetPath('/Hero images/h2r.jpg'),
}

export const editorialHeroStories: EditorialStory[] = [
  {
    id: 'industry-premium-shift',
    section: 'Industria',
    title: 'Las marcas premium ya no compiten solo por potencia: ahora pelean por presencia, tecnologia y posicionamiento.',
    summary: 'El valor de una moto se juega cada vez mas entre propuesta, equipamiento e identidad de marca.',
    href: '/motorcycles/bmw-r-1300-gs',
    meta: 'BMW · Ecosistema premium',
    accent: 'var(--ride-brand)',
  },
  {
    id: 'daily-use-culture',
    section: 'Uso y cultura',
    title: 'El uso diario vuelve a influir en el deseo: ciudad, escapada y estilo ya no van por separado.',
    summary: 'Las motos que combinan imagen, comodidad y versatilidad estan ganando terreno en varias categorias.',
    href: '/motorcycles/honda-cb650r',
    meta: 'Honda · Uso real',
    accent: 'var(--ride-tech)',
  },
  {
    id: 'product-watchlist',
    section: 'Producto',
    title: 'Hay motos que se vuelven noticia porque reordenan la conversacion de todo su segmento.',
    summary: 'Diseño, equipamiento y lectura de uso convierten a ciertos modelos en referencia inmediata.',
    href: '/motorcycles/ducati-streetfighter-v4',
    meta: 'Modelos bajo radar editorial',
    accent: 'var(--ride-insight)',
  },
]

export const newsroomStories: EditorialStory[] = [
  {
    id: 'premium-ecosystems',
    section: 'Industria',
    title: 'Las marcas premium estan construyendo ecosistemas mas completos alrededor de cada modelo estrella.',
    summary: 'No alcanza con una ficha potente: tambien pesa como se posiciona y se entiende cada producto.',
    href: '/motorcycles/bmw-r-1300-gs',
    meta: 'BMW · Marcas premium',
    accent: 'var(--ride-brand)',
  },
  {
    id: 'daily-life-riding',
    section: 'Tendencia',
    title: 'La moto deseada de hoy necesita convivir mejor con ciudad, escapadas cortas y consumo de contenido constante.',
    summary: 'La aspiracion sigue viva, pero ahora se mezcla con practicidad, imagen y uso real.',
    href: '/motorcycles/honda-cb650r',
    meta: 'Honda · Uso real',
    accent: 'var(--ride-tech)',
  },
  {
    id: 'segment-gateways',
    section: 'Agenda',
    title: 'Las motos que concentran conversacion funcionan como puerta de entrada a categorias enteras, no como casos aislados.',
    summary: 'Cuando un modelo activa debate por diseno o tecnologia, arrastra interes hacia toda su categoria.',
    href: '/motorcycles/kawasaki-z900',
    meta: 'Kawasaki · Segmentos',
    accent: 'var(--ride-insight)',
  },
  {
    id: 'gear-and-utility',
    section: 'Equipamiento',
    title: 'Equipamiento, ergonomia y confort ya pesan tanto como la potencia en muchas decisiones.',
    summary: 'Pantallas, ayudas electronicas y comodidad dejaron de ser un detalle secundario.',
    href: '/technical-comparator',
    meta: 'Tecnologia · Uso',
    accent: 'var(--ride-tech)',
  },
  {
    id: 'adventure-identity',
    section: 'Cultura',
    title: 'La aventura sigue vendiendo imaginario, pero gana valor cuando tambien funciona en el uso real.',
    summary: 'La estetica aventurera se sostiene mejor cuando se traduce en una moto util fuera del viaje idealizado.',
    href: '/motorcycles/yamaha-tenere-700',
    meta: 'Adventure · Lifestyle',
    accent: 'var(--ride-insight)',
  },
  {
    id: 'catalog-connected-news',
    section: 'Ridepedia',
    title: 'Streetfighter V4, Ténéré 700 y otras motos clave ya empujan la conversación hacia el catálogo real.',
    summary: 'La actualidad conecta mejor cuando aterriza en modelos concretos y categorias reconocibles.',
    href: '/motorcycles/yamaha-mt-09-sp',
    meta: 'Yamaha · Motos clave',
    accent: 'var(--ride-brand)',
  },
]

export const newsroomBriefs: EditorialBrief[] = [
  {
    id: 'market-watch',
    label: 'Mercado',
    title: 'Las categorias medias y premium siguen acercandose en propuesta.',
    summary: 'El salto entre segmentos ya no siempre se nota tan claro como antes.',
  },
  {
    id: 'cultural-signal',
    label: 'Cultura',
    title: 'La moto vuelve a verse como objeto de identidad, no solo de movilidad.',
    summary: 'Diseño, presencia visual y comunidad digital pesan mas en el deseo de compra.',
  },
  {
    id: 'editorial-role',
    label: 'Producto',
    title: 'Los modelos que generan mas ruido terminan marcando el ritmo del resto del segmento.',
    summary: 'Cuando una moto se vuelve referencia, toda su categoria recibe mas atencion.',
  },
]

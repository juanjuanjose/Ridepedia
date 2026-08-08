import { ProductPageShell } from '../components/sections/ProductPageShell'

export function MarketplacePage() {
  return (
    <ProductPageShell
      eyebrow="Marketplace"
      title="Una futura capa de compra y venta donde los avisos heredan contexto en vez de sentirse descartables."
      description="La página de marketplace presenta a Ridepedia como un lugar de mayor confianza para mirar motos en venta. Pero para esta entrega debe funcionar como visión honesta, no como una promesa de transacción ya resuelta."
      statusLabel="Roadmap visible"
      accent="#C2410C"
      highlights={['Avisos con contexto', 'Lectura curada', 'Señales de confianza']}
      metrics={[
        {
          label: 'Postura de inventario',
          value: 'Primero curado',
          detail: 'La prioridad va a la claridad, el contexto verificado del modelo y la presentación disciplinada, no al volumen por sí mismo.',
        },
        {
          label: 'Usuario principal',
          value: 'Compradores con criterio',
          detail: 'La página apunta a riders que quieren conectar los avisos con categoría, specs y lectura visual del modelo.',
        },
        {
          label: 'Encaje estratégico',
          value: 'Conectado al catálogo',
          detail: 'Marketplace se vuelve más fuerte cuando cada aviso puede apoyarse en la capa de datos viva de Ridepedia.',
        },
      ]}
      primaryCta={{ label: 'Explorar catálogo base', to: '/catalog' }}
      secondaryCta={{ label: 'Ver comparador técnico', to: '/technical-comparator' }}
      sections={[
        {
          eyebrow: 'Formato de transacción',
          title: 'El marketplace tiene que sentirse más showroom guiado que pared de clasificados ruidosa.',
          description: 'Estos bloques muestran la clase de estructura que haría sentir el producto más intencional mientras la funcionalidad backend todavía no existe.',
          cards: [
            {
              meta: 'Avisos destacados',
              title: 'Inventario curado',
              description: 'Una capa premium para motos destacadas, versiones raras y publicaciones con fotos completas, specs claras y estado bien explicado.',
            },
            {
              meta: 'Herramientas de compra',
              title: 'Shortlist con contexto',
              description: 'Guardar candidatas junto a categoría, tipo de motor y enlaces de vuelta al catálogo para que la investigación no arranque de cero.',
            },
            {
              meta: 'Calidad del vendedor',
              title: 'Estándares de publicación',
              description: 'Pedir modelo, kilometraje, notas de estado y disciplina de fotos para que cada aviso parezca parte de un sistema coherente.',
            },
            {
              meta: 'Capa de confianza',
              title: 'Señales que bajan el ruido',
              description: 'Destacar coincidencia verificada del modelo, set de media completo y specs transparentes para alejarse del posteo genérico y de baja confianza.',
            },
          ],
        },
        {
          eyebrow: 'Cómo presentarlo',
          title: 'El MVP ya puede comunicar el destino aunque la capa transaccional todavía no exista.',
          description: 'Eso importa porque arquitectura de producto no es solo backend. El usuario tiene que entender para qué existe esta vertical y por qué pertenece dentro de Ridepedia.',
          cards: [
            {
              meta: 'Corto plazo',
              title: 'Exploración guiada por descubrimiento',
              description: 'Arrancar con cards cuidadas, estantes por categoría y una propuesta clara alrededor de inventario con buen contexto.',
            },
            {
              meta: 'Expansión',
              title: 'Comparar antes de contactar',
              description: 'Más adelante los compradores deberían poder saltar desde un aviso a comparaciones lado a lado antes de decidir si escriben o no.',
            },
          ],
        },
      ]}
    />
  )
}

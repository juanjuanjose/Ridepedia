import { ProductPageShell } from '../components/sections/ProductPageShell'

export function CommunityPage() {
  return (
    <ProductPageShell
      eyebrow="Comunidad"
      title="Una futura capa de participación que crece desde la profundidad del producto, no desde engagement fingido."
      description="La página de comunidad presenta la dirección social futura de Ridepedia con bastante cuidado. Tiene que mostrar hacia dónde podrían ir perfiles, follows y discusión útil, sin fingir que la plataforma necesita mecánicas sociales ruidosas antes de madurar su núcleo moto."
      statusLabel="Roadmap de participación"
      accent="#7C3AED"
      highlights={['Perfiles con propósito', 'Discusión sobre modelos', 'Participación ganada']}
      metrics={[
        {
          label: 'Principio base',
          value: 'Utilidad antes que ruido',
          detail: 'La comunidad solo funciona si el usuario ya tiene razones para volver por catálogo, comparaciones y valor editorial.',
        },
        {
          label: 'Mejor ancla',
          value: 'Modelos y decisiones',
          detail: 'La discusión debería engancharse a páginas de motos, comparaciones, notas de uso y lanzamientos en vez de flotar sin contexto.',
        },
        {
          label: 'Mensaje del MVP',
          value: 'Intencional, no ruidoso',
          detail: 'La página comunica dirección seria sin convertir el producto actual en un feed social genérico.',
        },
      ]}
      primaryCta={{ label: 'Explorar el catálogo vivo', to: '/catalog' }}
      secondaryCta={{ label: 'Ver dirección editorial', to: '/news' }}
      sections={[
        {
          eyebrow: 'Diseño de participación',
          title: 'Las mejores funciones de comunidad se apoyan en valor real para el rider.',
          description: 'Eso significa enfatizar identidad, contexto de uso y conversación útil alrededor de las motos, en vez de copiar patrones sociales genéricos.',
          cards: [
            {
              meta: 'Capa de identidad',
              title: 'Perfiles construidos alrededor de motos',
              description: 'Los perfiles podrían destacar motos propias, wishlist, historial de comparación y modelos guardados en vez de señales vacías de vanidad social.',
            },
            {
              meta: 'Capa de discusión',
              title: 'Conversaciones pegadas al producto',
              description: 'Comentarios e hilos tienen más sentido cuando viven alrededor de lanzamientos, fichas y decisiones de comparación que de verdad importan.',
            },
            {
              meta: 'Capa de aporte',
              title: 'Conocimiento comunitario con moderación',
              description: 'Más adelante Ridepedia puede invitar impresiones de dueños, notas prácticas y correcciones en un formato controlado que proteja la calidad de información.',
            },
            {
              meta: 'Capa de retención',
              title: 'Seguir lo que sí importa',
              description: 'Seguir marcas, categorías y motos concretas es mucho más útil que una red social amplia sin propósito de producto.',
            },
          ],
        },
        {
          eyebrow: 'Regla de madurez',
          title: 'Esta página importa porque mantiene visible la comunidad sin dejar que domine demasiado pronto.',
          description: 'Esa es una postura de producto mucho más sana que meter previews sociales especulativos adentro de la homepage.',
          cards: [
            {
              meta: 'Rol actual',
              title: 'Señalar la participación futura',
              description: 'La página deja claro que comunidad forma parte del roadmap, mientras preserva la home como un portal limpio hacia áreas más claras del producto.',
            },
            {
              meta: 'Rol futuro',
              title: 'Profundizar lealtad y recurrencia',
              description: 'Cuando el catálogo y la capa de comparación sean más fuertes, comunidad puede convertirse en el mecanismo que haga volver a la gente con propósito.',
            },
          ],
        },
      ]}
    />
  )
}

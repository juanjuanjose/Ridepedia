import { ProductPageShell } from '../components/sections/ProductPageShell'

export function VisualComparatorPage() {
  return (
    <ProductPageShell
      eyebrow="Comparador visual"
      title="Un producto persona-contra-moto pensado para responder la pregunta del encaje antes de que los specs tomen todo el control."
      description="Esta vertical explica el comparador visual como producto propio: una persona escalada según su altura al lado de una moto, para entender silueta, postura e impresión física de un modo que los números solos no pueden resolver."
      statusLabel="Preview creíble"
      accent="#0F766E"
      highlights={['Persona vs moto', 'Escala y postura', 'Dirección compatible con 3D']}
      metrics={[
        {
          label: 'Pregunta central',
          value: '¿Cómo me va a quedar?',
          detail: 'El producto se enfoca en encaje percibido, postura y escala visual antes de que el usuario se meta en una investigación más profunda.',
        },
        {
          label: 'Modelo de interacción',
          value: 'Comparación guiada por altura',
          detail: 'Una figura humana puede escalarse desde la altura del usuario y ponerse junto a una moto por vez para una lectura visual más clara.',
        },
        {
          label: 'Relación con la home',
          value: 'Refuerza LearnBike',
          detail: 'La home deja el 3D visible porque hace que este futuro producto se sienta creíble y no puramente especulativo.',
        },
      ]}
      primaryCta={{ label: 'Volver a LearnBike en home', to: '/' }}
      secondaryCta={{ label: 'Ver comparador técnico', to: '/technical-comparator' }}
      sections={[
        {
          eyebrow: 'Concepto de producto',
          title: 'Esto no es una planilla. Es una herramienta para entender visualmente una moto.',
          description: 'Su trabajo es responder preguntas que muchas veces cuestan evaluar desde fotos de concesionario o fichas aisladas.',
          cards: [
            {
              meta: 'Lectura de encaje',
              title: 'Escala humana al lado de la moto',
              description: 'Mostrar un avatar escalado desde la altura ingresada en centímetros para generar una noción más honesta de proporción frente a la moto.',
            },
            {
              meta: 'Control de perspectiva',
              title: 'Vistas intercambiables',
              description: 'El perfil lateral es esencial, pero frente y tres cuartos pueden profundizar la lectura de ancho, altura de asiento y postura.',
            },
            {
              meta: 'Valor de decisión',
              title: 'Reducir incertidumbre temprano',
              description: 'El comparador ayuda a descartar opciones claramente desalineadas antes de gastar tiempo comparando specs completos.',
            },
            {
              meta: 'Profundidad futura',
              title: 'Piloto montado más adelante',
              description: 'Una pose sentada o montada sería una fase más avanzada porque introduce complejidad de postura y alineación de modelos.',
            },
          ],
        },
        {
          eyebrow: 'Cómo presentarlo',
          title: 'La página dedicada le da al concepto el espacio suficiente para sentirse como una vertical real.',
          description: 'Esa separación importa. Meter toda esta explicación dentro de la home debilita tanto el relato como la jerarquía del portal.',
          cards: [
            {
              meta: 'Valor inmediato',
              title: 'Explicar el recorrido de comparación',
              description: 'Posicionar la página como el lugar donde Ridepedia ayudará a entender encaje físico antes de comparar motor y rendimiento.',
            },
            {
              meta: 'Principio de diseño',
              title: 'Visual primero, humo no',
              description: 'Mantener la experiencia aspiracional pero clara sobre el alcance, para que se sienta premium sin fingir que la herramienta completa ya existe.',
            },
          ],
        },
      ]}
    />
  )
}

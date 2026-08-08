import type { Motorcycle } from '../types/motorcycle'

import { resolveAssetPath } from '../utils/asset-path'

export const motorcycles: Motorcycle[] = [
  {
    id: 'ducati-streetfighter-v4',
    slug: 'ducati-streetfighter-v4',
    brand: 'Ducati',
    model: 'Streetfighter V4 S',
    year: 2024,
    category: 'Naked',
    tagline: 'Hypernaked precision with superbike intent.',
    summary: 'A sharp, technical naked that feels sculpted around speed, aero, and rider confidence.',
    story:
      'The Streetfighter V4 S is the visual anchor of Ridepedia: violent lines, race-grade electronics, and a silhouette that deserves both a premium gallery and a controlled 3D stage.',
    accent: '#ff4d4d',
    galleryLabel: 'Race-bred bodywork, deep red paint, and active aero energy.',
    heroStats: ['208 hp', '178 kg dry', 'Öhlins Smart EC 2.0'],
    specs: [
      { label: 'Engine', value: '1,103 cc Desmosedici Stradale V4' },
      { label: 'Power', value: '208 hp @ 13,000 rpm' },
      { label: 'Torque', value: '123 Nm @ 9,500 rpm' },
      { label: 'Weight', value: '197.5 kg wet' },
      { label: 'Seat Height', value: '845 mm' },
      { label: 'Electronics', value: 'Cornering ABS, slide control, launch control' },
    ],
    anatomyNotes: [
      'Biplane wings shape high-speed stability without drowning the naked stance.',
      'The compact V4 architecture keeps the mass visually central and mechanically dense.',
      'The single-sided swingarm leaves the rear wheel exposed as a design statement.',
    ],
    media: {
      localImage: resolveAssetPath('/media/motorcycles/ducati-streetfighter-v4.svg'),
      carImagesQuery: { make: 'Ducati', model: 'Streetfighter V4', year: 2024 },
      wikimediaFileName: 'Ducati Streetfighter V4 Lamborghini.jpg',
    },
    model3d: {
      localPath: resolveAssetPath('/motorcycles/2024-ducati-streetfighter-v4-s/source/2024%20Ducati%20StreetFighter%20V4%20S.glb'),
    },
    technicalSearch: {
      make: 'Ducati',
      model: 'Streetfighter V4',
      year: 2024,
    },
  },
  {
    id: 'bmw-r-1300-gs',
    slug: 'bmw-r-1300-gs',
    brand: 'BMW',
    model: 'R 1300 GS',
    year: 2024,
    category: 'Adventure',
    tagline: 'Boxer torque engineered for horizon chasing.',
    summary: 'Adventure comfort, travel tech, and unmistakable boxer width in one polished flagship package.',
    story:
      'The R 1300 GS balances long-range readiness with a body language that still feels premium in close-up product storytelling.',
    accent: '#7bf1a8',
    galleryLabel: 'Tall stance, travel geometry, and layered touring hardware.',
    heroStats: ['145 hp', '237 kg wet', 'Adaptive ride height'],
    specs: [
      { label: 'Engine', value: '1,300 cc air/liquid-cooled boxer twin' },
      { label: 'Power', value: '145 hp @ 7,750 rpm' },
      { label: 'Torque', value: '149 Nm @ 6,500 rpm' },
      { label: 'Weight', value: '237 kg ready to ride' },
      { label: 'Seat Height', value: '850 mm standard' },
      { label: 'Electronics', value: 'Radar-ready platform, dynamic ESA, riding modes Pro' },
    ],
    anatomyNotes: [
      'The exposed boxer heads define both cooling strategy and visual width.',
      'Long-travel suspension keeps the rider triangle upright and neutral.',
      'The beak and tank shoulders project utility without losing premium surface control.',
    ],
    media: {
      localImage: resolveAssetPath('/media/motorcycles/bmw-r1300gs.svg'),
      carImagesQuery: { make: 'BMW', model: 'R 1300 GS', year: 2024 },
      wikimediaFileName: 'BMW R 1300 GS Option 719 Tramuntana (2024) on display, front left.jpg',
    },
    technicalSearch: {
      make: 'BMW',
      model: 'R 1300 GS',
      year: 2024,
    },
  },
  {
    id: 'triumph-street-triple-rs',
    slug: 'triumph-street-triple-rs',
    brand: 'Triumph',
    model: 'Street Triple RS',
    year: 2024,
    category: 'Naked',
    tagline: 'Triple-cylinder bite with surgical road manners.',
    summary: 'Compact aggression and front-end clarity make it one of the most readable performance nakeds on the road.',
    story:
      'The Street Triple RS adds contrast to the Ducati with a lighter, tighter personality and a more intimate cockpit feel.',
    accent: '#f6f16d',
    galleryLabel: 'Minimal bodywork, stacked headlights, and focused rider ergonomics.',
    heroStats: ['128 hp', '188 kg wet', 'Showa + Öhlins chassis'],
    specs: [
      { label: 'Engine', value: '765 cc inline triple' },
      { label: 'Power', value: '128 hp @ 12,000 rpm' },
      { label: 'Torque', value: '80 Nm @ 9,500 rpm' },
      { label: 'Weight', value: '188 kg wet' },
      { label: 'Seat Height', value: '836 mm' },
      { label: 'Electronics', value: 'Cornering ABS, quickshifter, track-ready TFT controls' },
    ],
    anatomyNotes: [
      'The compact triple lets the bike stay visually short between wheels.',
      'High tail and narrow waist amplify the premium lightweight theme.',
      'Suspension hardware is part of the visual identity, not hidden support equipment.',
    ],
    media: {
      carImagesQuery: { make: 'Triumph', model: 'Street Triple RS', year: 2024 },
      wikimediaFileName: 'Triumph Street Triple RS 2023.jpg',
    },
    technicalSearch: {
      make: 'Triumph',
      model: 'Street Triple RS',
      year: 2024,
    },
  },
  {
    id: 'yamaha-tenere-700',
    slug: 'yamaha-tenere-700',
    brand: 'Yamaha',
    model: 'Ténéré 700 Extreme',
    year: 2024,
    category: 'Adventure',
    tagline: 'Rally silhouette built around simplicity and distance.',
    summary: 'A premium overland icon that mixes lean bodywork with proven CP2 usability.',
    story:
      'The Ténéré 700 brings a more elemental adventure stance to the catalog, with less bodywork and more vertical intent.',
    accent: '#63a7ff',
    galleryLabel: 'Tall rally tower, long-travel suspension, and off-road clarity.',
    heroStats: ['72 hp', '205 kg wet', 'Rally cockpit'],
    specs: [
      { label: 'Engine', value: '689 cc CP2 parallel twin' },
      { label: 'Power', value: '72 hp @ 9,000 rpm' },
      { label: 'Torque', value: '68 Nm @ 6,500 rpm' },
      { label: 'Weight', value: '205 kg wet' },
      { label: 'Seat Height', value: '910 mm' },
      { label: 'Electronics', value: 'Switchable ABS, rally-focused minimalism' },
    ],
    anatomyNotes: [
      'The front tower pushes the rider eye-line upward into a rally posture.',
      'Minimal side panels keep the chassis honest and mechanically legible.',
      'Long suspension travel changes the whole stance, even when parked.',
    ],
    media: {
      carImagesQuery: { make: 'Yamaha', model: 'Tenere 700', year: 2024 },
      wikimediaFileName: 'Yamaha T7 2019 1X7A2370.jpg',
    },
    technicalSearch: {
      make: 'Yamaha',
      model: 'Tenere 700',
      year: 2024,
    },
  },
]

export const featuredMotorcycles = motorcycles.slice(0, 3)

export function findMotorcycleBySlug(slug: string) {
  return motorcycles.find((motorcycle) => motorcycle.slug === slug)
}

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/**
 * @see https://github.com/antfu/vitesse-nuxt3/blob/main/unocss.config.ts
 */
export default defineConfig({
  theme: {
    colors: {
      primary: 'rgb(var(--primary))',
      logo: 'rgb(var(--logo))',
      error: '#e74c3c',
      gray: '#D9D9D9',
      lightgray: '#f8f8f8',
      darkgray: '#575555',
      indigo: '#2C3E50',
      // yellow: '#F1C40F',
    },
  },

  rules: [
    ['font-urbanist', { 'font-family': 'Urbanist' }],
    ['font-inter', { 'font-family': 'Inter' }],
  ],

  shortcuts: {
    card: 'bg-white rounded-3 shadow p-4',
  },

  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetTypography(),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'grid-cols-4',
    'i-material-symbols-info-outline-rounded',
    'i-material-symbols-payments-outline-rounded',
    'i-material-symbols-receipt-long-outline-rounded',
    'i-material-symbols-hourglass-top-rounded',
    'i-material-symbols-file-present-outline-rounded',
    'bg-error',
    'text-error',
    'border-error',
  ],
})

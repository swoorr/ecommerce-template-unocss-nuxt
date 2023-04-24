import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
  } from 'unocss'
  
  export default defineConfig({
    rules: [
      ['custom-rule', { color: 'red' }]
    ],
    shortcuts: {
      'custom-shortcut': 'text-lg text-orange hover:text-teal',
      'primary':'bg-#DB7437',
      'text':'bg-#3E3E3E',
      'success':'bg-#7FB765',
      'danger':'bg-#CE6662',
      'warning':'bg-#CE9938',
      'info':'bg-#3B7BD5',
      'text-primary':'c-#DB7437',
      'text-text':'c-#3E3E3E',
      'text-success':'c-#7FB765',
      'text-danger':'c-#CE6662',
      'text-warning':'c-#CE9938',
      'text-info':'c-#3B7BD5'
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        cdn: 'https://esm.sh/'
      }),
    ]
  })
  
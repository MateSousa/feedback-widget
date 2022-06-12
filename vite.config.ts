import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
      ],
      theme: {
        colors: {
          brand: '#8257e5',
          brandHover: '#996dff',
          textOnBrandColor: '#fff',
          darkSurfacePrimary: '#18181b',
          darkSurfaceSecondary: '#2727a',
          darkSecondaryHover: '#3f3f46',
          darkStroke: '#52525b',
          darkTooltip:  '#f4f4f5',
          darkTextPrimary: '#f4f4f5',
          darkTextSecondary: '#a1a1aa',
          darkTextOnTooltip: '#27272a',
          whiteSurfacePrimary: '#fff',
          whiteSurfaceSecondary: '#f4f4f5',
          whiteSecondaryHover: '#e4e4e7',
          whiteStroke: '#d4d4d8',
          whiteTooltip: '#27272a',
          whiteTextPrimary: '#27272a',
          whiteTextSecondary: '#711717a',
          whiteTextOnTooltip: '#f4f4f5',

        }
      }
    }),
    Components(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
    }),
  ],  
})

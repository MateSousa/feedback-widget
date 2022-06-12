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

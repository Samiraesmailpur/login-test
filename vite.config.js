import { fileURLToPath, URL } from 'node:url'
import svgLoader from 'vite-svg-loader';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    [vue(),
      svgLoader(),
    ]
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// {
//   defaultImport: "component",
//   svgoConfig: {
//     plugins: [
//       {
//         name: "preset-default",
//         params: {
//           overrides: {
//             removeViewBox: false, // Ensure the viewBox attribute is preserved
//           },
//         },
//       }
//     ],
//   },
// }

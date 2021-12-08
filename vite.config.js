import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import postcssMixins from "postcss-mixins";
import viteSvgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteSvgLoader()],
  css: {
    postcss:{
      plugins: [postcssNesting, postcssMixins]
    }
  }
})

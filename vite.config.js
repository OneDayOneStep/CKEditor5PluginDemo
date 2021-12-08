import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import postcssMixins from "postcss-mixins";
import viteSvgLoader from "vite-svg-loader";
import commonjs from '@rollup/plugin-commonjs'
import svgSprites from 'rollup-plugin-svg-sprites'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteSvgLoader(), commonjs(), svgSprites({
    include: ["node_modules"]
  })],
  css: {
    postcss:{
      plugins: [postcssNesting, postcssMixins]
    }
  }
})

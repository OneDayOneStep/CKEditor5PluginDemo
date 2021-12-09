import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssNesting from 'postcss-nesting';
import postcssMixins from "postcss-mixins";
import CKEditorSvgLoader from "./CKEditorSvgLoader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), CKEditorSvgLoader()],
  css: {
    postcss:{
      plugins: [postcssNesting, postcssMixins]
    }
  }
})

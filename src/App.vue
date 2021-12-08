<script>
import {defineComponent, onMounted, ref} from "vue";

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Image from '@ckeditor/ckeditor5-image/src/image';

import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import Custom from './plugins/main';

import ImgCustom from './imgPlugins/main';

import imgResWin from "./imgResWin.vue";

export default defineComponent({
  components: {
    imgResWin
  },
  setup() {
    let showImgResWin = ref(false);
    onMounted(() => {
      ClassicEditor
          .create(document.querySelector('#editor'), {
            plugins: [Essentials, Paragraph, Image, Custom],
            toolbar: [Custom.pluginName]
          })
      .then(editor => {
        CKEditorInspector.attach(editor);
      })
      .catch(error => {
        console.log(error);
      });

      ClassicEditor
          .create(document.querySelector('#imgEditor'), {
            plugins: [Essentials, Paragraph, ImgCustom],
            toolbar: [ImgCustom.pluginName]
          })
      .then(editor => {
        CKEditorInspector.attach(editor);
      })
      .catch(error => {
        console.log(error);
      });
    });
    return {
      showImgResWin
    }
  }
});
</script>

<template>
  <div id="editor"></div>
  <div id="imgEditor"></div>
  <imgResWin v-show="showImgResWin" />
</template>

<style></style>

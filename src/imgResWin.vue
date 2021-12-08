<script>
import {defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    let selectedIndex = ref(1);
    let changeSelect = function(index) {
      selectedIndex.value = index;
    }
    return {
      selectedIndex,
      changeSelect
    }
  }
});
</script>

<template>
  <div class="imgResWin">
    <div class="imgResWinCon">
      <div class="imgResWinConImgs">
        <div @click="changeSelect(0)" :class="{ selected: selectedIndex === 0 }"><img src="./imgs/img_0.png" /></div>
        <div @click="changeSelect(1)" :class="{ selected: selectedIndex === 1 }"><img src="./imgs/img_1.png" /></div>
        <div @click="changeSelect(2)" :class="{ selected: selectedIndex === 2 }"><img src="./imgs/img_2.png" /></div>
      </div>
      <span class="confirm">确定</span>
    </div>
  </div>
</template>


<style scoped>
  .imgResWin {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 50;
  }
  .imgResWinCon {
    position: absolute;
    top: 100px;
    left: 100px;
    right: 100px;
    bottom: 100px;
    background-color: #fff;
    padding: 50px;
  }
  .imgResWinConImgs:after {
    content: "";
    display: block;
    clear: both;
  }
  .imgResWinConImgs > div {
    margin: 0 50px 50px 0;
    width: 200px;
    height: 150px;
    cursor: pointer;
    float: left;
  }
  .selected {
    outline: #409eff 10px solid;
  }
  .imgResWinConImgs img {
    height: 100%;
    width: 100%;
  }
  .confirm {
    margin-top: 100px;
    background-color: #409eff;
    font-size: 20px;
    padding: 15px 20px;
    border-radius: 6px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    color: #fff;
  }
</style>

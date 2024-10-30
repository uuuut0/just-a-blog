<script setup>
import { onMounted, ref } from 'vue';

const limitText = () => {
  const max = 40
  const element = document.querySelector('.textbox >p')
  const len = element.innerText.length
  if (len > max) {
    console.log('result:')
    const txt = element.innerText.substring(0, max - 1) + '...'
    console.log(txt)
    element.innerText = txt
  }
  console.log(len)

}
onMounted(() => {
  limitText()
})
</script>

<template>
  <main>
    hihi trypage
    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-3 ">
          <div class="ccr">1</div>
        </div>
        <div class="col-6 col-sm-3">
          <div class="ccr">1</div>

        </div>
        <div class="col-6 col-sm-3">
          <div class="ccr">1</div>
        </div>
        <div class="col-6 col-sm-3">
          <div class="ccr">1</div>
        </div>
      </div>
    </div>
    <div class="iconwrap">
      <span class="material-symbols-sharp">menu</span>
    </div>

    <div class="textbox">
      <p>買坐福進羊朋片苦田花乾玉紅員衣。休七牙耍！會直米耳因十紅邊男學；爬帶門告點以故教坡比功交，蛋二旁眼鼻買坐福進羊朋片苦田花乾玉紅員衣。休七牙耍！會直米耳因十紅邊男學；爬帶門告點以故教坡比功交，蛋二旁眼鼻</p>
    </div>
  </main>
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.ccr {
  border: 1px solid #000;
  background-color: #3f1919;
}

.iconwrap {
  background-color: #aa9e9e;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  span {
    background-color: #fff;
    font-size: 80px;
  }
}

.textbox {
  width: 360px;
  background-color: #892a2a;
}
</style>

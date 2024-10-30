<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import BaseHeader from '@/components/main/BaseHeader.vue'
import BaseFooter from '@/components/main/BaseFooter.vue'

const footer_pos = ref(-1)
const footer_dist = ref(-1)
const footer_dit = ref(-1)

// TO BE DONE: hide the headernav when footer is in view
const headernav_handle = () => {
  const footer = document.querySelector('.base-footer')
  footer_pos.value = footer.offsetTop
  footer_dist.value = document.documentElement.scrollHeight
}
onMounted(() => {
  //headernav_handle()
})
</script>

<template>
  <BaseHeader />
  <RouterView />
  <BaseFooter />

</template>

<style scoped>
.tofixed {
  background-color: #fff;
  position: fixed;
  top: 50%;
  z-index: 6;
}

.colcolored {
  background-color: #fa6969;
  margin: 50px 0;
  padding: 0 10px;
}

.colcolored-2 {
  background-color: #5bd540;
  margin: 50p;
  padding: 0 10px;
}

.col-con {
  background-color: #91eca6;
}

.fullw {
  background-color: #5d2e2e;
}

.row {
  background-color: #ffffff75;
}
</style>

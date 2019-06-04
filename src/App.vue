<template>
  <div>
    <TitleBar/>
    <router-view/>
  </div>
</template>

<script>

import TitleBar from '@/components/TitleBar.vue'

export default {
  name: 'app',
  components:{
    TitleBar
  }
}

//动态设置字体大小
document.addEventListener('DOMContentLoaded',()=>{
  const html=document.querySelector('html');

  let fontSize=window.innerWidth/10>40?40:window.innerWidth/10;
  html.style.fontSize=fontSize+'px';
});

</script>

<style>

</style>

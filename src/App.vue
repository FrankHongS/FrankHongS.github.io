<template>
  <div>
    <router-view/>
  </div>
</template>

<script>



export default {
  name: 'app',
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

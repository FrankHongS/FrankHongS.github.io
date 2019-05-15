<template>
  <div id="app">
    <TitleBar :shouldTitleBarShow="shouldTitleBarShow"/>
    <BlogList
    @checkIfTitleBarShow="checkIfTitleBarShow"/>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue'
import BlogList from '@/components/BlogList.vue'

export default {
  name: 'app',
  data(){
    return {
      shouldTitleBarShow:true,
    };
  },
  components: {
    TitleBar,
    BlogList
  },
  methods:{
    checkIfTitleBarShow(flag){
      if(flag!=this.shouldTitleBarShow){
        this.shouldTitleBarShow=flag;
      }
    }
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

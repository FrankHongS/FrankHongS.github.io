<template>
  <div>
    <!-- <TitleBar :shouldTitleBarShow="shouldTitleBarShow"/> -->
    <BlogList
    @checkIfTitleBarShow="checkIfTitleBarShow"/>
  </div>
</template>

<script>
// import TitleBar from '@/components/TitleBar.vue'
import BlogList from '@/components/BlogList.vue'

export default {
  
  components: {
    // TitleBar,
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

</script>

<style lang="scss" scoped>

</style>

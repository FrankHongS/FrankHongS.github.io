<template>
<transition name="slide-down">
     <div class="title-wrapper" v-show="shouldTitleBarShow">
        <div class="profile-wrapper">
          <i class="icon-profile"/>
          <span class="name">Frank Hon</span>
        </div>
        <div class="index-wrapper">
          <div class="category-wrapper" @click="goToList">
            <i class="icon-category"/>
            <span class="category">category</span>
            <!-- <router-link to="/home" class="category">category</router-link> -->
          </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
  props:[
    'shouldTitleBarShow'
  ],
  methods:{
    goToList(){
      this.$router.push('/home');
    }
  }
}

</script>
<style lang='scss' scoped>

@import '../assets/styles/global';

.title-wrapper{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: px2rem(60);
    z-index: 101;
    display: flex;
    background: white;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);

    .profile-wrapper{
      flex: 0 0 px2rem(160);
      display: flex;
      @include center;
      cursor: pointer;

      .name{
        font-size: px2rem(20);
        padding-left: px2rem(8);
      }
    }

    .index-wrapper{
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      padding-right: px2rem(16);
      
      .category-wrapper{
        display: flex;
        @include center;
        cursor: pointer;

        .category{
          font-size: px2rem(16);
          padding-left: px2rem(8);
        }
      }
    }
}

</style>
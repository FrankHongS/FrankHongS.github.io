<template>
  <transition name="slide-down">
      <div class="title-wrapper" v-show="shouldTitleBarShow">
          <div class="profile-wrapper">
            <i class="icon-profile"/>
            <span class="name">Frank Hon</span>
          </div>
          <div class="search-wrapper">
            <i class="icon-search"/>
            <input class="search-content" type="text" placeholder="search" v-model="searchContent"
            @keyup.enter="onSearch">
          </div>
          <div class="index-wrapper">
            <div class="category-wrapper" @click="goToList">
              <i class="icon-category"/>
              <span class="category">Category</span>
              <!-- <router-link to="/home" class="category">category</router-link> -->
            </div>
          </div>
      </div>
  </transition>
</template>

<script>
export default {
  data(){
    return {
      shouldTitleBarShow:true,
      searchContent:''
    };
  },
  methods:{
    goToList(){
      this.$router.push('/home');
    },
    onSearch(ev){
      this.$emit('doSearch',this.searchContent);
    }
  },
  mounted(){
    // reset page offset
    pageYOffset=0;
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;

    window.addEventListener('scroll',()=>{
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const delta=scrollTop-this.originalScrollTop;
      this.originalScrollTop=scrollTop;
      if(delta>0){
        this.shouldTitleBarShow=false;
      }else if(delta<0){
        this.shouldTitleBarShow=true;
      }
    });
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
      @include center;
      cursor: pointer;

      .name{
        font-size: px2rem(20);
        padding-left: px2rem(8);
      }
    }

    .search-wrapper{
      flex: 0 0 px2rem(560);
      @include center;
      padding-left: px2rem(20);
      margin: px2rem(8) px2rem(18);
      background: #f1f3f4;
      border-radius: px2rem(4);

      .icon-search{
        font-size: px2rem(25);
        padding-right: px2rem(6);
      }

      .search-content{
        flex: 1;
        height: px2rem(20);
        font-size: px2rem(20);
        border: none;
        background:none;  
        outline:none;
        padding: px2rem(8);
        // color:#80868b;
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
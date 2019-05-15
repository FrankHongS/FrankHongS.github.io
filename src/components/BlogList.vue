<template>
  <div>
    <div class="blog-list">
      <ul>
        <li class="blog-item" v-for="(item,index) of blogTitleList " :key='index'>
          <div class="blog-desc-wrapper" @click='goToBlogDetail(index)'>
            <span class="blog-title">{{item.title}}</span>
            <span class="blog-date">{{item.date}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogTitleList: [
        {
          title:
            "关于Android事件分发机制关于Android事件分发机制",
          date: "2019-5-15 16:12"
        },
        {
          title:
            "关于Android事件分发机制",
          date: "2019-5-15 16:12"
        },
        {
          title:
            "关于Android事件分发机制关于Android事件分发机制关于Android事件分发机制关于Android事件分发机制关于Android事件分发机制关于Android事件分发机制",
          date: "2019-5-15 16:12"
        },
        {
          title:
            "关于Android事件分发机制关于Android事件分发机制关于Android事件分发机制关于Android事件分发机制关于Android事件分发机制关于Android事件分发机制",
          date: "2019-5-15 16:12"
        },
        {
          title:
            "关于Android事件分发机制关于Android事件分发机制",
          date: "2019-5-15 17:12"
        },
        {
          title:
            "关于Android事件分发机制关于Android事件分发机制",
          date: "2019-5-15 16:12"
        },
        {
          title:
            "关于Android事件分发机制关于Android事件分发机制",
          date: "2019-5-15 16:12"
        },
        {
          title:
            "关于Android事件分发机制关于Android事件分发机制",
          date: "2019-5-15 16:12"
        },
        {
          title:
            "关于Android事件分发机制关于Android事件分发机制",
          date: "2019-5-15 16:12"
        }
      ],
      originalScrollTop:0
    };
  },

  methods:{
      goToBlogDetail(index){
          alert(index);
      }
  },

  mounted(){
    window.addEventListener('scroll',()=>{
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const delta=scrollTop-this.originalScrollTop;
      this.originalScrollTop=scrollTop;
      if(delta>0){
        this.$emit('checkIfTitleBarShow',false);
      }else if(delta<0){
        this.$emit('checkIfTitleBarShow',true);
      }
    });
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/styles/global";

.blog-list {
  width: 100%;
  height: 100%;
  display: flex;
  @include center;
  margin-top: px2rem(74);

  ul {
      width: 80%;
  }
  .blog-item {
    display: flex;
    background: white;
    border-radius: px2rem(8);
    min-height: px2rem(80);
    box-shadow: 0 px2rem(4) px2rem(8) rgba(0, 0, 0, 0.25);
    margin: px2rem(16) 0;

    .blog-desc-wrapper {
      flex:1;
      display: flex;
      flex-direction: column;
      padding: px2rem(8);
      cursor: pointer;

      .blog-title {
        flex: 1;
        font-size: px2rem(24);
        line-height: 1.4em;
      }

      .blog-date {
        display: flex;
        justify-content: flex-end;
        font-size: px2rem(16);
      }
    }
  }
}
</style>
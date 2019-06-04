<template>
  <div>
    <!-- <TitleBar
    @doSearch="doSearch"/>-->
    <div class="blog-list">
      <ul>
        <li class="blog-item" v-for="(item,index) of blogTitleList " :key="index">
          <div class="blog-desc-wrapper" @click="goToBlogDetail(index,item.title)">
            <span class="blog-title">{{item.title.split('.')[0]}}</span>
            <span class="blog-date">{{item.date}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import data from '@/assets/config.json'
import TitleBar from "@/components/TitleBar.vue";

export default {
  data() {
    return {
      originalBlogTitleList: [],
      blogTitleList: [],
      originalScrollTop: 0
    };
  },
  components: {
    TitleBar
  },
  methods: {
    goToBlogDetail(index, title) {
      this.$router.push("/detail/" + title);
    },

    doSearch(input) {
      if (input == "") {
        this.blogTitleList = this.originalBlogTitleList;
        return;
      }

      const regx = new RegExp(input, "g");
      const result = [];
      this.blogTitleList.forEach(item => {
        if (regx.test(item.title)) {
          result.push(item);
        }
      });

      this.blogTitleList = result;
    }
  },
  mounted() {
    this.bus.$on("onSearch", keyword => {
      this.doSearch(keyword);
    });

    this.$axios
      .get("/config.json")
      .then(res => {
        this.blogTitleList = res.data;
        this.originalBlogTitleList = res.data;
      })
      .catch(error => {
        console.log(error);
      });

    // this.$axios
    //     .get('/blog')
    //     .then(
    //       res=>{
    //         console.log(res);
    //       }
    //     )
    //     .catch(
    //       error=>{
    //         console.log(error);
    //       }
    //     );
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/styles/global";

.blog-list {
  width: 100%;
  height: 100%;
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
      flex: 1;
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
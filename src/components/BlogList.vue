<template>
  <div>
    <div class="blog-list">
      <div class="category-wrapper" v-show="category">
        <span class="category">{{category}}</span>
      </div>
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

export default {
  data() {
    return {
      originalBlogTitleList: [],
      blogTitleList: [],
      originalScrollTop: 0,
      category: ""
    };
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
      this.originalBlogTitleList.forEach(item => {
        if (regx.test(item.title)) {
          result.push(item);
        }
      });
      // this.blogTitleList.forEach(item => {
      //   if (regx.test(item.title)) {
      //     result.push(item);
      //   }
      // });todo 连续按r，有bug

      this.blogTitleList = result;
    },
    check(keyword) {
      if (keyword) {
        this.doSearch(keyword);
      }
    }
  },
  created() {
    this.bus.$on("onSearch", keyword => {
      this.doSearch(keyword);
    });

    const category = this.$route.params.category;
    const keyword = this.$route.params.keyword;

    this.$axios
      .get("/config.json")
      .then(res => {
        if (keyword) {
          res.data.forEach(item => {
            this.blogTitleList = this.blogTitleList.concat(item.blog);
          });
          this.originalBlogTitleList = this.blogTitleList;
          this.check(keyword);
          return;
        }

        for (let i = 0; i < res.data.length; i++) {
          const item = res.data[i];
          if (category === item.category) {
            this.category = category;
            this.blogTitleList = this.blogTitleList.concat(item.blog);
            this.originalBlogTitleList = this.blogTitleList;
            break;
          }
        }
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
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
@import "../assets/styles/global";

.blog-list {
  width: 100%;
  height: 100%;
  @include center;
  flex-direction: column;
  margin-top: px2rem(74);

  .category-wrapper {
    width: 80%;
    margin-top: px2rem(14);
    font-size: px2rem(24);
    color: #666666;
    .category{
      border: #666666 1px solid;
      padding: px2rem(4);
    }
  }

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
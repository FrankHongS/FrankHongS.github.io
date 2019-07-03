<template>
  <div class="category-wrapper">
    <ul>
      <li v-for="(array,i1) of blogCategoryList" :key="i1">
        <div class="category" v-for="(item,i2) of array" :key="i2" @click="goToBlogList(item)">
          <i class="icon-folder" :title="item"/>
          <span class="category-name">{{item}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogCategoryList: [
          ["Android", "Java", "Kotlin"],
          ["js", "other"]
      ]
    };
  },
  methods:{
      goToBlogList(category){
          this.$router.push('/blogList/'+category);
      }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/styles/global";

.category-wrapper {
  @include center;
  margin-top: px2rem(74);
  ul {
    width: 70%;
  }
  li{
      display: flex;
      flex-direction:row;
      margin: px2rem(50) 0;
      .category{
          flex: 0 0 px2rem(400);
          cursor: pointer;
          .icon-folder{
              font-size: px2rem(50);
          }
          .category-name{
              padding-left: px2rem(10);
              font-size: px2rem(25);
          }
      }
  }
}

li {
  list-style: none;
}
</style>
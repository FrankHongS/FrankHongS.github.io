<template>
  <div>
    <div class="blog-detail">
      <div class="content">
        <div class="blog-title-wrapper">
          <h1 class="blog-title">{{title}}</h1>
        </div>
        <div class="content-wrapper" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Remarkable from "remarkable";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

export default {
  data() {
    return {
      content: "",
      title: ""
    };
  },
  mounted() {

    this.bus.$on("onSearch", keyword => {
      if(keyword){
        this.$router.push({
          name:'BlogList',
          params:{
            keyword
          }
        });
      }
    });

    const title = this.$route.params.title;
    this.title = title.split(".")[0];

    const md = new Remarkable('full',{
    //   html: false, // Enable HTML tags in source
    //   xhtmlOut: false, // Use '/' to close single tags (<br />)
    //   breaks: false, // Convert '\n' in paragraphs into <br>
    //   langPrefix: "language-", // CSS language prefix for fenced blocks
    //   linkify: true, // autoconvert URL-like texts to links
    //   linkTarget: "", // set target to open link in

    //   // Enable some language-neutral replacements + quotes beautification
    //   typographer: false,

    //   // Double + single quotes replacement pairs, when typographer enabled,
    //   // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    //   quotes: "“”‘’",

      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (err) {}
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ""; // use external default escaping
      }
    });

    this.$axios
      .get("/blog/" + title)
      .then(res => {
        this.content = md.render(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/styles/global";

.blog-detail {
  @include center;
  margin-top: px2rem(74);

  .content {
    min-height: px2rem(400);
    width: 80%;
    box-shadow: 0 px2rem(4) px2rem(8) rgba(0, 0, 0, 0.25);
    background: #c7edcc;

    .blog-title-wrapper {
      @include center;
      padding: px2rem(20) 0;
      font-size: px2rem(36);
    }

    .content-wrapper {
      font-size: px2rem(24);
      padding: px2rem(12);
      line-height: 1.5em;
    }
  }
}
</style>
<template>
 <div>
     <div class="blog-detail">
         <div class="content">
            <div class="blog-title-wrapper">
                <h1 class="blog-title">{{title}}</h1>
            </div>
            <div class="content-wrapper" v-html="content">

            </div>
         </div>
     </div>
 </div>
</template>

<script>

import Remarkable from 'remarkable'


export default {
    data(){
       return {
           content:'',
           title:''
       };
    },
    mounted(){
        
        const title=this.$route.params.title;
        this.title=title.split('.')[0];

        const md=new Remarkable();
        this.$axios
            .get('/blog/'+title)
            .then(
                res=>{
                    this.content=md.render(res.data);
                }
            )
            .catch(
                error=>{console.log(error);}
            );
    }
}

</script>
<style lang='scss' scoped>

@import '../assets/styles/global';

.blog-detail{

    @include center;
    margin-top: px2rem(74);
    flex-direction: column;
    
    .content{
        min-height:px2rem(400);
        width: 80%;
        // @include center;
        box-shadow: 0 px2rem(4) px2rem(8) rgba(0, 0, 0, 0.25);

        .blog-title-wrapper{
            @include center;
            padding: px2rem(20) 0;
            font-size: px2rem(36);
        }

        .content-wrapper{
            font-size: px2rem(24);
            padding: px2rem(8) px2rem(8) px2rem(8) px2rem(18); 
            line-height: 1.5em;
        }
        
    }

}
</style>
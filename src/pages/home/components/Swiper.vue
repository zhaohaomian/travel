<template>
    <div class="wrapper">
     <swiper :options="swiperOption" v-if=" this.$store.state.swiperList.length">
            <swiper-slide  v-for="item in this.$store.state.swiperList"  :key="item.id" >
                <img class="swiper-img" :src="item.imgUrl" >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div> 
  </swiper>
    </div>
</template>
<script>
export default {
    name:"HomeSwiper",
    data(){
        return {
            swiperOption:{
                pagination:".swiper-pagination",
                loop:true
            }        
        }
    }
}
</script>
<style lang="less" scoped>
 .wrapper /deep/  .swiper-pagination-bullet-active{
     background: #fff;
 }
    .wrapper{
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-bottom: 26.66%;
        background: #ccc;
        .swiper-img{
            width:100%;
            height: 100%;
        }
    }
</style>

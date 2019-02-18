<template>
  <div>
    <ul class="activity-list js-carousels-list">
      <li class="js-carousels-item" v-for="(article, articleIndex) in articles" :key="articleIndex">
        <a href="" class="activity">
          <time :datetime="article.date">{{article.date || moment('YYYY-MM-DD')}}</time>
          <img :src="article.image" alt="">
          <p class="">{{article.title}}</p>
        </a>
      </li>
    </ul>

    <!-- <swiper class="activity-list js-carousels-list" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="js-carousels-item" v-for="(article, articleIndex) in articles" :key="articleIndex">
        <a href="" class="activity">
          <time :datetime="article.date">{{article.date || moment('YYYY-MM-DD')}}</time>
          <img :src="article.image" alt="">
          <p class="">{{article.title}}</p>
        </a>
      </swiper-slide>
    </swiper> -->

    <!-- <div class="pager-container js-carousels-pager">
      <div :click="slidePrev()" class="pager-button is-prev"></div>
      <div v-on:click="slideNext()" class="pager-button is-next"></div>
      <div class="pager">
        <ul class="pager-list clearfix">
          <li v-for="(article, articleIndex) in articles" :key="articleIndex" :data-index="articleIndex">
            <div v-on:click="slideNext()" style="">test</div>
          </li>
        </ul>
        <div class="pager-bar" style="left:0;width:50px;"></div>
      </div>
      <div v-on:click="slideNext()">test</div>
    </div> -->
  </div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'SlideArticles',
  // components: {
  //   swiper,
  //   swiperSlide
  // },
  data () {
    return {
      swiperOption: {
        // initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 30,
        // centeredSlides: true,
        // watchOverflow: true,
        allowTouchMove: false,
        watchSlidesVisibility: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChange: () => {
            // console.log(this.swiper)
            if (this.swiper) {
              console.log(this.swiper.activeIndex)
            }
          }
        }
      }
    }
  },
  props: {
    articles: Array
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    goToSlide: function (index) {
      console.log(this.swiper.activeIndex)
      this.swiper.slideTo(index)
    },
    slideNext: function () {
      this.swiper.slideNext()
      console.log(this.swiper)
    },
    slidePrev: function () {
      console.log(this)
      console.log('ok')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_activity.scss";
</style>

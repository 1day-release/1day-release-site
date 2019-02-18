<template>
  <div id="activities">
    <div class="contents">
      <div class="wrap">
        <section>
          <!-- <h2 class="section-title">Activities <span class="text-color-accent">R</span>ecords.</h2> -->
          <h2 class="section-title"><span class="first-letter text-color-accent">A</span>
            <span class="decoration-line">
              <span></span>
              <span></span>
              <span></span>
            </span>ctivities<br>
            Records.</h2>
          <div class="activity-list-container">
            <SlideArticles v-if="$store.getters.hasSiteinfo" :articles="$store.getters.siteinfo.activities" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SlideArticles from './SlideArticles.vue'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Activities',
  components: {
    SlideArticles
    // swiper,
    // swiperSlide
  },
  data () {
    return {
      swiperOption: {
      }
    }
  },
  props: {
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_activity.scss";
</style>

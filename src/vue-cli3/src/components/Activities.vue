<template>
  <div id="activities">
    <div class="contents">
      <div class="wrap">
        <section>
          <!-- <h2 class="section-title">Activities <span class="text-color-accent">R</span>ecords.</h2> -->
          <h2 class="section-title"><span class="first-letter">A</span>
            <span class="decoration-line">
              <span></span>
              <span></span>
              <span></span>
            </span>ctivities<br>
            <span class="text-color-accent">R</span>ecords.</h2>
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

export default {
  name: 'Activities',
  components: {
    SlideArticles
  },
  props: {
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_activity.scss";
</style>

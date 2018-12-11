<template>
  <div id="activity">
    <div class="contents">
      <section>
        <h2 class="section-title wrap">Activity <span class="text-color-accent">R</span>ecord.</h2>
        <div class="activity-list-container">
          <SlideArticles />
        </div>
      </section>
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

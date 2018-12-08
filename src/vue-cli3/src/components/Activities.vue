<template>
  <div id="activity">
    <section>
      <h2 class="">Activity Record.</h2>
      <div class="js-carousels-container">
        <SlideArticles />
      </div>
    </section>
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

<template>
  <div id="works">
    <div class="contents">
      <div class="wrap">
        <section>
          <h2 class="section-title"><span class="text-color-accent">W</span>orks.</h2>
          <div class="work-list-container">
            <SlideProducts />
          </div>
        </section>
      </div>
    </div>
    <div class="background-image"></div>
  </div>
</template>

<script>
import SlideProducts from './SlideProducts.vue'

export default {
  name: 'Activities',
  components: {
    SlideProducts
  },
  props: {
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_works.scss";
</style>

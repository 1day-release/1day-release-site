<template>
  <div id="about">
    <div class="contents">
      <div class="wrap">
        <section>
          <h2 class="section-title"><span class="text-color-accent first-letter">A</span>
            <span class="decoration-line">
              <span></span>
              <span></span>
              <span></span>
            </span>bout<span class="text-color-accent">.</span></h2>
          <p class="about-text" v-if="this.$store.getters.hasSiteinfo">
            {{this.$store.getters.siteinfo.about.text}}
          </p>
          <p class="about-text is-english" v-if="this.$store.getters.hasSiteinfo">
            {{this.$store.getters.siteinfo.about.textEn}}
          </p>
        </section>
    <Scrollama @step-progress="scrollHandler" :offset="1.3" :progress="true"  threshold:="1">
      <div class="background-image step1" data-step="a" :style="{ opacity: bgOpacity }"></div>
    </Scrollama>
      </div>
    </div>
  </div>
</template>

<script>
import Scrollama from 'vue-scrollama'

export default {
  name: '',
  components: {
    Scrollama
  },
  props: {
  },
  data () {
    return {
      bgOpacity: 0
    }
  },
  methods: {
    scrollHandler ({ progress }) {
      this.bgOpacity = progress
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_about.scss";
</style>

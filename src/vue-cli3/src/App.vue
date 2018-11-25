<template>
  <div id="app">
    <!-- <div id="container" class="is-open"> -->
    <div id="container">
      <router-view/>
      <div class="cover"></div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    setPageMeta (to) {
      document.title = ((to.meta.title) ? to.meta.title + ' | ' : '') + '1Day Release'
    }
  },
  watch: {
    $route (to, from) {
      this.setPageMeta(to)
    }
  },
  mounted () {
    this.setPageMeta(this.$route)
  }
}
</script>

<style lang="scss">
@import "./styles/_variables";

// Mixin & Animate
// ===============================================
@import "./styles/mixin/_placeholdercolor.scss";
@import "./styles/_animate";

// Layout
// ===============================================
@import "./styles/_base";
@import "./styles/_text";

// Components
// ===============================================
@import "./styles/components/_header.scss";
@import "./styles/components/_menu.scss";
@import "./styles/components/_hero.scss";
@import "./styles/components/_footer.scss";
</style>

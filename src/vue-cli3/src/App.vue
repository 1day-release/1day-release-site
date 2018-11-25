<template>
  <div id="app">
    <!-- <div id="container" class="is-open"> -->
    <div id="container">
      <router-view/>
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

// Mixin
// ===============================================
@import "./styles/mixin/_placeholdercolor.scss";

// Layout
// ===============================================
@import "./styles/_base";
@import "./styles/_text";
</style>

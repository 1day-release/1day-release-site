<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  methods : {
    setPageMeta (to) {
      document.title = ((to.meta.title) ? to.meta.title + ' | ' : '') + '1Day Release';
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
</style>

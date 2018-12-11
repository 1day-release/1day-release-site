<template>
  <div class="l-footer">
    <footer>
      <div class="contents">
        <div class="wrap">
          <p class="footer-catch is-typewrite js-typewriter">
            <span class="text-color-accent">E</span>nrich your 1day.<br>
            <span class="text-color-accent">E</span>njoy your 1day.
          </p>
          <ul class="footer-menu">
            <li><a class="js-page-scroll" href="#about">About</a></li>
            <li><a class="js-page-scroll" href="#activity">Activity<br>Record</a></li>
            <li><a class="js-page-scroll" href="#works">Works</a></li>
            <li><a class="js-page-scroll" href="#member">Member</a></li>
            <li><a class="js-page-scroll" href="#contact">Contact</a></li>
          </ul>
          <p class="page-top text-uppercase">
            <a class="js-page-scroll" href="#">Go To Top</a>
          </p>
          <p class="copyright pc">
            <small>&copy; 2018 1Day Release. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_footer.scss";
</style>

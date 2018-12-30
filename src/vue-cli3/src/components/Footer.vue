<template>
  <div class="l-footer">
    <footer>
      <div class="contents">
        <div class="wrap">
          <TypingText :text="text"/>
          <ul class="footer-menu text-uppercase">
            <li><a class="js-page-scroll" href="#about">About</a></li>
            <li><a class="js-page-scroll" href="#activities">Activities<br>Records</a></li>
            <li><a class="js-page-scroll" href="#works">Works</a></li>
            <li><a class="js-page-scroll" href="#members">Members</a></li>
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
import TypingText from './TypingText.vue'

export default {
  name: 'Footer',
  components: {
    TypingText
  },
  props: {
  },
  data: function(){
    return {
      text: [
        {
          text: "E",
          speed: 70,
          delay: 0,
          color: "text-color-accent"
        },
        {
          text: "nrich your 1day.",
          speed: 70,
          delay: 200,
          color: "white"
        },
        {
          line_break: true
        },
        {
          text: "E",
          speed: 70,
          delay: 1600,
          color: "text-color-accent"
        },
        {
          text: "njoy your 1day.",
          speed: 70,
          delay: 1800,
          color: "white"
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_footer.scss";
</style>

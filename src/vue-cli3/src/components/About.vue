<template>
  <div id="about">
    <div class="contents">
      <div class="wrap">
        <section>
          <h2 class="section-title"><span class="text-color-accent">A</span>bout.</h2>
          <p class="about-text">
            「1dayでサービスを作る」<br>
            1day-releaseはその名の通り、アイデアブレストから実装までサービス制作のフローを1日で行い、プロダクトを完成させる取り組みです。<br>
            実際のサービス開発フローに乗っ取り、ディレクター・デザイナー・エンジニアのチームで制作を行っています。<br>
            普段はそれぞれが会社で働きながら1ヶ月に1度、1day-releaseは行われています。<br>
            「個人の技能を高める」「アイデアを実現させる」それぞれが目標を掲げ、1日という限られた時間でどこまで良いサービスを作ることが出来るのか。<br>
            ぼくたちは挑戦していきます。
          </p>
          <p class="about-text is-english">
            " Create a service on 1 day "<br>
            As the name implies, 1day-release is an effort to complete the product by conducting the flow of service creation from idea breast to implementation until the day.<br>
            It takes over the actual service development flow, and we are producing with the team of director, designer and engineer. Normally each day is working on a company and once a month, 1 day-release is done.<br>
            Each "goal" to raise "personal skills" and "to realize ideas", how far can we make good service in a limited time of one day?<br>
            We will challenge.
          </p>
        </section>
      </div>
    </div>
    <Scrollama @step-progress="scrollHandler" :offset="1.2" :progress="true">
      <div class="background-image step1" data-step="a" :style="{ opacity: bgOpacity }"></div>
    </Scrollama>
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
  data() {
    return {
      bgOpacity: 0
    }
  },
  methods: {
    scrollHandler ({progress}){
      // console.log(progress)
      this.bgOpacity = progress
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_about.scss";
</style>

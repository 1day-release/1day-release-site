<template>
  <div id="contact">
    <div class="contents">
      <div class="wrap">
        <section>
          <h2 class="section-title">Contact<span class="text-color-accent">.</span></h2>
          <p class="mail-text">
            <a class="" href="mailto:support@1day-release.com">support@1day-release.com</a>
          </p>
          <ul class="center-list">
            <li>
              <a class="sns-button" href="" target="_blank">
                <img src="../assets/facebook_icon.svg" alt="">
              </a>
            </li>
            <li>
              <a class="sns-button" href="" target="_blank">
                <img src="../assets/twitter_icon.svg" alt="">
              </a>
            </li>
            <li>
              <a class="sns-button" href="" target="_blank">
                <img src="../assets/instagram_icon.svg" alt="">
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  props: {
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_contact.scss";
</style>

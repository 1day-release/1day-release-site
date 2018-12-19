<template>
  <div id="members">
    <div class="contents">
      <div class="wrap">
        <section>
          <h2 class="section-title"><span class="first-letter">M</span>embers<span class="text-color-accent">.</span></h2>
          <ul class="member-list">
            <li v-for="member in members">
              <Member
                v-bind:member="member"
              />
            </li>
          </ul>
        </section>
      </div>
    </div>
    <div class="background-image" style="background-image: url(./images/);"></div>
  </div>
</template>

<script>
import Member from './Member.vue'

export default {
  name: 'Members',
  components: {
    Member
  },
  props: {
  },
  data:
    function () {
    return {
      test:"",
      members: [
        {name: "Ryoju Ohata", image: require('../assets/member_bg.jpg'), position:"Pasionate-Engineer", description:""},
        {name: "Yuya Sakai", image: require('../assets/member_bg.jpg'), position:"Designer", description:""},
        {name: "Kirin Nakayama", image: require('../assets/member_bg.jpg'), position:"Frontend-Engineer", description:""},
        {name: "Hiroshi Iwabuchi", image: require('../assets/member_bg.jpg'), position:"Frontend-Engineer", description:""},
        {name: "Mayama Mayama", image: require('../assets/member_bg.jpg'), position:"Backend-Engineer", description:""},
        {name: "Riku Niioka", image: require('../assets/member_bg.jpg'), position:"Director", description:""},
      ]
    }
  }

}
</script>

<style scoped lang="scss">
  @import "../styles/components/_member.scss";
</style>

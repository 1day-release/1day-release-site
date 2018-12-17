<template>
  <div id="members">
    <div class="contents">
      <div class="wrap">
        <section>
          <h2 class="section-title">Members<span class="text-color-accent">.</span></h2>
          <ul class="member-list">
            <li>
              <Member />
            </li>
            <li>
              <div class="member">
                <div class="member-img">
                  <!-- <img src="./images/member_ryoju.jpg" alt=""> -->
                </div>
                <p class="member-name">Ryoju Ohata</p>
                <p class="member-position">Pasionate-Engineer</p>
                <p class="member-description"></p>
              </div>
            </li>
            <li>
              <div class="member">
                <div class="member-img">
                  <!-- <img src="./images/member_.jpg" alt=""> -->
                </div>
                <p class="member-name"></p>
                <p class="member-position">Designer</p>
                <p class="member-description"></p>
              </div>
            </li>
            <li>
              <div class="member">
                <div class="member-img">
                  <!-- <img src="./images/member_.jpg" alt=""> -->
                </div>
                <p class="member-name"></p>
                <p class="member-position">Frontend-Engineer</p>
                <p class="member-description"></p>
              </div>
            </li>
            <li>
              <div class="member">
                <div class="member-img">
                  <!-- <img src="./images/member_.jpg" alt=""> -->
                </div>
                <p class="member-name"></p>
                <p class="member-position">Director</p>
                <p class="member-description"></p>
              </div>
            </li>
            <li>
              <div class="member">
                <div class="member-img">
                  <!-- <img src="./images/member_.jpg" alt=""> -->
                </div>
                <p class="member-name"></p>
                <p class="member-position">Backend-Engineer</p>
                <p class="member-description"></p>
              </div>
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
  }
}
</script>

<style scoped lang="scss">
</style>

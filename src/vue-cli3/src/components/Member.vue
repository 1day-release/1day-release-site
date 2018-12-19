<template>
  <div class="member">
    <div class="member-img">
      <img v-bind:src="member.image" alt="">
    </div>
    <p class="member-name">{{ member.name }}</p>
    <p class="member-position">{{ member.position }}</p>
    <p class="member-description">{{ member.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Member',
  props: ['member']
}
</script>

<style scoped lang="scss">
.member{
    text-align: center;
    .member-name{
      margin-bottom: 10px;
      font-size: 1.4rem;
    }
    .member-position{
      color: #585858;
      font-size: 1.2rem;
    }
    .member-img{
      overflow: hidden;
      margin-bottom: 15px;
      border-radius: 50%;
      img{
        width: 100%;
        vertical-align: bottom;
      }
    }
  }
</style>

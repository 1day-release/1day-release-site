<template>
  <div>
    <ul class="work-list js-carousels-list">
      <li class="js-carousels-item">
        <a class="work" href="">
          <figure>
            <img src="../assets/works_photo.jpg" alt="">
            <figcaption>作業時間管理ツール - Booster</figcaption>
          </figure>
        </a>
      </li>
      <li class="js-carousels-item">
        <a class="work" href="">
          <figure>
            <img src="../assets/works_photo.jpg" alt="">
            <figcaption>作業時間管理ツール - Booster</figcaption>
          </figure>
        </a>
      </li>
    </ul>
    <div class="pager-container js-carousels-pager">
      <a href="#" class="pager-button is-prev is-disabled"></a>
      <div class="pager">
        <ul class="pager-list clearfix">
          <li></li>
          <li></li>
        </ul>
        <div class="pager-bar" style="left:0;width:50px;"></div>
      </div>
      <a href="#" class="pager-button is-next"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideProducts',
  props: {
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_works.scss";
</style>

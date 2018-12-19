<template>
  <div>
    <ul class="activity-list js-carousels-list">
      <li class="js-carousels-item">
        <a href="" class="activity">
          <time datetime="2018-00-00">2018/00/00</time>
          <img src="../assets/record_bg.jpg" alt="">
          <p class="">大胸筋を鍛えながら、タスク管理サービスを作った結果...神展開。</p>
        </a>
      </li>
      <li class="js-carousels-item">
        <div class="activity">
          <time datetime="2018-00-00">2018/00/00</time>
          <img src="../assets/record_bg.jpg" alt="">
          <p class="">大胸筋を鍛えながら、タスク管理サービスを作った結果...神展開。</p>
        </div>
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
  name: 'SlideArticles',
  props: {
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/_activity.scss";
</style>

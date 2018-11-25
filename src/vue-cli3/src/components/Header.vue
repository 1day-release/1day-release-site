<template>
  <div class="l-header">
    <header>
      <div class="wrap">
        <div class="menu-container js-menu-container">
          <h1 class="site-logo">
            <a href="#"><img src="../assets/logo.png" alt="1Day Release"></a>
          </h1>
          <div class="menu text-uppercase">
            <nav>
              <a class="menu-button js-menu-toggle" href="#">
                <span class="menu-button-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span class="menu-button-text">Menu</span>
              </a>
              <ul class="menu-list text-uppercase js-menu-switch">
                <li><a class="js-page-scroll" href="#about">About</a></li>
                <li><a class="js-page-scroll" href="#activity">Activity<br>Record</a></li>
                <li><a class="js-page-scroll" href="#products">Products</a></li>
                <li><a class="js-page-scroll" href="#member">Member</a></li>
                <li><a class="js-page-scroll" href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="contents">
          <div class="hero-container">
            <p class="hero-catch is-typewrite js-typewriter">
            Go beyond the <strong class="text-color-accent">limit.</strong><br>
            Go beyond the <strong class="text-color-accent">1day.</strong>
            </p>
            <p class="hero-catch">
            <small><span class="text-color-accent">1Day</span>でリリースする。</small>
            </p>
            <p class="hero-updated">
            <span class="text-uppercase text-color-accent">Activity Record :</span><br>
            <time datetime="2018-00-00">2018/00/00</time> - <span class="">今日はタスク管理サービスを</span>
            </p>
            <p class="">
            <a class="js-page-scroll" href="#about">View About</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.l-header {
  position: relative;
  margin: 100px 0 120px;
}
</style>

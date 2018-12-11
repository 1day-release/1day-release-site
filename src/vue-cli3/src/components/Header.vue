<template>
  <header>
    <div class="l-header">
      <div class="wrap">
        <div class="menu-container js-menu-container">
          <h1 class="site-logo">
            <a href="#"><img src="../assets/logo.png" alt="1Day Release"></a>
          </h1>
          <div class="menu text-uppercase">
            <a class="menu-button js-menu-toggle" href="#">
              <span class="menu-button-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span class="menu-button-text">Menu</span>
            </a>
            <nav>
              <ul class="menu-list text-uppercase js-menu-item">
                <li><a class="js-page-scroll" href="#about">About</a></li>
                <li><a class="js-page-scroll" href="#activity">Activity<br>Record</a></li>
                <li><a class="js-page-scroll" href="#works">Works</a></li>
                <li><a class="js-page-scroll" href="#member">Member</a></li>
                <li><a class="js-page-scroll" href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="cover"></div>
        </div>
        <div class="contents">
          <div class="hero">
            <p class="hero-catch is-typewrite js-typewriter">
              Go beyond the <strong class="text-color-accent">limit.</strong><br>
              Go beyond the <strong class="text-color-accent">1day.</strong>
            </p>
            <p class="hero-catch">
              <small><span class="text-color-accent">1Day</span>でサービスを作る。</small>
            </p>
            <p class="hero-updated pc">
              <span class="text-uppercase text-color-accent">Activity Record :</span><br>
              <time datetime="2018-00-00">2018/00/00</time> - <span class="">今日はタスク管理サービスを</span>
            </p>
            <p class="hero-link text-uppercase">
              <a class="js-page-scroll" href="#about">View About</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
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

  .site-logo {
    position: relative;
    z-index: 10;
    float: left;
    width: auto;
    height: 45px;

    a {
      display: block;
      overflow: hidden;
      height: 100%;
    }

    img {
      display: block;
      width: auto;
      height: 100%;
    }

    @media #{$device-l} {
      height: 55px;
    }
  }

  .menu {
    $margin: 20px;

    &-container {
      position: fixed;
      overflow: hidden;
      z-index: 40;
      top: 0;
      left: 0;
      right: 0;
      padding: $margin;
      margin: 0 auto;
      transition-duration: $duration;

      @media #{$device-l} {
      }

      .cover {
        position: absolute;
        z-index: 1;
        bottom: inherit;
        height: 100vh;
        margin: 0 auto;
        background-color: #000;
      }

      &.is-hide {
        top: -85px;
        transition-duration: 0.8s;

        @media #{$device-l} {}
      }

      &.is-open {
        overflow: visible;

        .cover {
          pointer-events: auto;
        }

        .menu {

          @media #{$device-l} {
          }

          &-button {
            flex-direction: row-reverse;

            @media #{$device-l} {
            }

            &-icon {
              width: 12px;
              height: 12px;
              margin-right: 0;
              margin-left: 15px;

              >span {
                width: 140%;
                margin: 0;

                &:nth-child(1) {
                  right: inherit;
                  transform: rotate(45deg);
                  transform-origin: 0 50%;
                }

                &:nth-child(2) {
                  opacity: 0;
                }

                &:nth-child(3) {
                  top: 0;
                  bottom: inherit;
                  transform: rotate(-45deg);
                  transform-origin: 100% 50%;
                }
              }
            }
          }

          &-list {
            opacity: 1;
            pointer-events: auto;

            @media #{$device-l} {
            }
          }
        }
      }
    }

    @media #{$device-l} {
    }

    &-button {
      position: absolute;
      z-index: 10;
      top: 0;
      right: $margin;
      bottom: 0;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      text-decoration: none;

      @media #{$device-l} {
      }

      &-icon {
        position: relative;
        width: 50px;
        height: 9px;
        margin-right: 10px;

        @media #{$device-l} {
        }

        >span {
          position: absolute;
          height: 2px;
          background-color: #fff;

          &:nth-child(1) {
            top: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
          }

          &:nth-child(2) {
            width: 60%;
            bottom: 0;
            left: 0;
          }

          &:nth-child(3) {
            width: 30%;
            bottom: 0;
            right: 0;
          }
        }
      }

      &-text {
        @extend %mono;
        font-weight: bold;
        font-size: 1.2rem;
        color: #fff;

        @media #{$device-l} {
        }
      }
    }

    &-list {
      $padding: 85px;

      position: fixed;
      z-index: 10;
      top: $padding;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding-bottom: $padding;
      margin: auto;

      opacity: 0;
      pointer-events: none;

      @media #{$device-l} {
      }

      >li {
        position: relative;
        z-index: 30;
        margin: 10px 0;
      }

      a {
        display: block;
        padding: 5px;
        line-height: 1.5;
        text-align: center;
        @extend %mono;
        color: #fff;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  .hero {

    @media #{$device-l} {
    }

    &-catch {
      margin: 20px 0 25px;

      @media #{$device-l} {
      }

      &.is-typewrite {
        margin: 0 0 20px;
        line-height: 2.0;
        font-family: $ff-mono;
        letter-spacing: 0.15em;
        font-size: 1.8rem;
        font-weight: bold;
        white-space: nowrap;
        @extend %typewrite;
      }

      small {
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 0.6em;
      }
    }

    &-link {
      @extend %mono;

      @media #{$device-l} {
      }

      a {
        position: relative;
        display: inline-block;
        padding: 5px;
        padding-left: 45px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;

        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          display: block;
          height: 1px;
          margin: auto 0;
          background-color: #fff;
        }

        &::before {
          left: 0;
          width: 16px;
        }

        &::after {
          left: 22px;
          width: 10px;
        }
      }
    }
  }
</style>

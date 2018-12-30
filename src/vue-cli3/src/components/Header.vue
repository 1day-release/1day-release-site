<template>
  <header>
    <div class="l-header">
      <div class="menu-container js-menu-container" v-bind:class='{"is-open":isOpen}'>
    <h1 class="site-logo">
      <a href="#"><img src="../assets/logo.png" alt="1Day Release"></a>
    </h1>
    <div class="menu text-uppercase">
      <a class="menu-button js-menu-toggle" href="" v-on:click.prevent="isOpen=!isOpen">
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
          <li><a class="js-page-scroll" href="#activities">Activities<br>Records</a></li>
          <li><a class="js-page-scroll" href="#works">Works</a></li>
          <li><a class="js-page-scroll" href="#members">Members</a></li>
          <li><a class="js-page-scroll" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="cover sp"></div>
  </div>
      <div class="contents">
        <div class="wrap">
          <div class="hero">
            <!-- <p class="hero-catch is-typewrite js-typewriter">
              Go beyond the <strong class="text-color-accent">limit.</strong><br>
              Go beyond the <strong class="text-color-accent">1day.</strong>
            </p> -->
            <TypingText :text="text"/>
            <p class="hero-catch">
              <small><span class="text-color-accent">1Day</span>でサービスを作る。</small>
            </p>
            <dl class="hero-updated pc">
              <dt class="text-uppercase text-color-accent">Activities Records</dt>
              <dd class="js-scroll-text">
                <time datetime="2018-00-00">2018/00/00</time>今日はタスク管理サービスを制作しました！
              </dd>
            </dl>
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
import Menu from './Menu.vue'
import TypingText from './TypingText.vue'

export default {
  name: 'Header',
  components: {
    TypingText
  },
  props: {
    msg: String
  },
  data: function(){
    return {
      isOpen: false,
      text: [
        {
          text: "Go beyond the ",
          speed: 70,
          delay: 0,
          color: "white"
        },
        {
          text: "limit.",
          speed: 70,
          delay: 1300,
          color: "text-color-accent"
        },
        {
          line_break: true
        },
        {
          text: "Go beyond the ",
          speed: 70,
          delay: 2100,
          color: "white"
        },
        {
          text: "1day.",
          speed: 70,
          delay: 3200,
          color: "text-color-accent"
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
  .l-header {
    position: relative;

    @media #{$device-l} {
    }

    .wrap {

      @media #{$device-l} {
        // padding: 0;
      }
    }
  }

  .site-logo {
    position: relative;
    z-index: 10;
    float: left;
    width: auto;
    height: 45px;

    @media #{$device-l} {
      height: 55px;
    }

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
        $width: 100px;
        $margin: 40px;

        top: $margin;
        right: $pc-min-width - $width;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        overflow: visible;
        width: $width;
        height: calc(100vh - #{$margin} * 2);
        min-height: 500px;
        padding: 0 $margin;
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
        transition: all 1s;

        .cover {
          pointer-events: auto;
        }

        .menu {

          @media #{$device-l} {
          }

          &-button {
            flex-direction: row-reverse;

            @media #{$device-l} {
              justify-content: flex-end;
            }

            &-icon {
              width: 12px;
              height: 12px;
              margin-right: 0;
              margin-left: 15px;

              >span {
                width: 140%;
                margin: 0;
                transition: all 1s;
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
            transition: all 1s;

            @media #{$device-l} {
            }
          }
        }
      }
    }

    @media #{$device-l} {
      margin-top: 30px;
    }

    &-button {
      position: absolute;
      z-index: 10;
      top: 0;
      right: $margin;
      bottom: 0;
      width: 100px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      text-decoration: none;

      @media #{$device-l} {
        $par: 55px;

        position: static;
        margin: -#{$par} 0 100px;
        height: $par;
        transform: rotate(90deg);
        transform-origin: left bottom;
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
      overflow: hidden;
      padding-bottom: $padding;
      margin: auto;

      opacity: 0;
      pointer-events: none;

      @media #{$device-l} {
        position: absolute;
        top: inherit;
        right: inherit;
        left: 40px;
        align-items: flex-start;
        padding: 0;
        margin: 0;
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

        @media #{$device-l} {
          text-align: left;
        }
      }
    }
  }

  .hero {
    margin: 100px 0 120px;

    @media #{$device-l} {
      position: relative;
      padding-top: 100px;
      margin: 40px 0 150px;
    }

    &-catch {
      margin: 20px 0 25px;

      @media #{$device-l} {
        margin-bottom: 50px;
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

        @media #{$device-l} {
          margin-bottom: 20px;
          font-size: 3.2rem;
        }
      }

      small {
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 0.6em;
      }
    }

    &-updated {
      @media #{$device-l} {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        overflow: hidden;
        width: 260px;
        text-align: right;
        letter-spacing: 0.15em;
      }

      dt {
        display: block;
        font-family: $ff-mono;
        font-size: 1.5rem;
        font-weight: bold;

        @media #{$device-l} {
        }

        &::after {
          content: ":";
          margin-left: 10px;
        }
      }

      dd {
        position: relative;
        display: block;
        margin-top: 15px;
        font-size: 1.0rem;
        white-space: nowrap;

        @media #{$device-l} {
        }
      }

      time {
        vertical-align: middle;
        font-family: $ff-mono;

        @media #{$device-l} {
        }

        &::after {
          content: "";
          position: relative;
          top: -2px;
          display: inline-block;
          margin: 0 10px;
          width: 0.5em;
          height: 1px;
          background-color: #fff;
        }
      }
    }

    &-link {
      @extend %mono;

      @media #{$device-l} {
        font-size: 1.4rem;
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

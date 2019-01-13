<template>
  <Scrollama @step-enter="stepEnterHandler" :offset="2">
    <div class="step1"  data-step="a">
      <p class="catch is-typewrite js-typewriter">
        <span v-for="(typeObj,index) in typeText" v-bind:key="index">
          <template v-if="typeObj.line_break">
            <br>
          </template>

          <template v-else>
            <vue-typer
              :text="typeObj.text"
              :repeat='0'
              :type-delay="typeObj.speed"
              :pre-type-delay="typeObj.delay"
              :class="typeObj.color">
              </vue-typer>
          </template>
        </span>
      </p>
    </div>
  </Scrollama>
</template>

<script>
import 'intersection-observer'
import Scrollama from 'vue-scrollama'
import { VueTyper } from 'vue-typer'

export default {
  name: 'TypingText',
  components: {
    Scrollama,
    'vue-typer': VueTyper
  },
  props: {
    text: Array
  },
  data () {
    return {
      typeText: [{ text: ' ' }]
    }
  },
  methods: {
    stepEnterHandler ({ element, index, direction }) {
      console.log(element, index, direction)
      this.typeText = this.text
    }
  }
}
</script>

<style scoped lang="scss">
  /deep/ .vue-typer{
    &.white .custom.char.typed{
        color: #fff;
    }
    &.text-color-accent .custom.char.typed{
      color: #00fcff;
    }
  }
  /deep/ .catch {
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
</style>

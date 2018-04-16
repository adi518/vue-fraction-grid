<template>
  <div class="vfg-container" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import initConfig from '../utils/init-config'

export default {
  name: 'container',
  mixins: [initConfig],
  props: {
    width: String,    
    gutter: String
  },
  computed: {
    styleObject () {
      return {
        maxWidth: this.width || this.config.container,
        paddingRight: this.gutter || this.config.gutter,
        paddingLeft: this.gutter || this.config.gutter
      }
    }
  }
}
</script>

<style>
.vfg-container {
  box-sizing: border-box;
  margin: auto;
}
</style>

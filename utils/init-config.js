export default {
  created () {
    const { config = {} } = this.$options
    this.config = config
  }
}

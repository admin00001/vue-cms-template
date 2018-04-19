<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'icon',
    props: {
      iconClass: {
        type: String,
        required: true
      }
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      }
    }
  }
</script>

<style scoped lang="stylus">
  .icon
    width: 1em
    height: 1em
    fill: currentColor
    overflow: hidden
</style>

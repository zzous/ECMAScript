<template>
  <button class="scrollTop" :class="{active: activeTopButton}" @click="scrollTop()">
    TOP
  </button>
</template>
<script>
export default {
  name: 'SCROLLTOP',
  data () {
    return {
      activeTopButton: false,
      scrollH: 0
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollTop () {
      const isActive = event.target.className.includes('active')
      if (isActive) { window.scrollTo({ top: 0, behavior: 'smooth' }) }
    },
    handleScroll () {
      const scrT = window.scrollY // window.pageYOffset || document.documentElement.scrollTop
      if (scrT > this.scrollH) {
        console.log('down scroll')
      } else {
        console.log('up scroll')
      }
      this.scrollH = scrT
      this.activeTopButton = this.scrollH > 20
      this.$nuxt.$emit('windowScrollH', this.scrollH)
    }
  }
}
</script>

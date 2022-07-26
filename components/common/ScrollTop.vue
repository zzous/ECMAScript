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
      activeTopButton: false
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
      // Your scroll handling here
      // console.log(window.scrollY)
      const scrY = window.scrollY
      this.activeTopButton = scrY > 20
    }
  }
}
</script>

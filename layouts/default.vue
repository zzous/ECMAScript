<template>
  <div id="container">
    <Nav />
    <Nuxt />
    <button class="scrollTop" :class="{active: activeTopButton}" @click="scrollTop()">
      TOP
    </button>
  </div>
</template>
<script>
export default {
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

<template>
  <div id="progressBar">
    <span class="gauge" :style="{ width: `${gauge}%` }" />
  </div>
</template>

<script>
export default {
  name: 'PROGRESSBAR',
  data () {
    return {
      gauge: 0
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const winHeight = window.innerHeight
      const conHeight = document.querySelector('body').offsetHeight
      const scollY = window.scrollY
      // console.log('# conHeight', conHeight, '# winHeight', winHeight, '# scrollY', scollY, '# cal', (scollY / (conHeight - winHeight)) * 100)
      this.gauge = (scollY / (conHeight - winHeight)) * 100
    }
  }

}
</script>

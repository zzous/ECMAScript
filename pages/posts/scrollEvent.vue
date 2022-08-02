<template>
  <div>
    <h2>scroll / wheel ( event )</h2>
    <pre>
      <code v-highlight class="vue">// template
&lt;button class="scrollTop" :class="{active: activeTopButton}" @click="scrollTop()"&gt;
  TOP
&lt;/button&gt;

// script
export default {
  name: 'SCROLLTOP',
  data () {
    return {
      activeTopButton: false,
      scrollH: 0,
      scrollDirection: null
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('wheel', this.handleWheel)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('wheel', this.handleWheel)
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

      this.scrollH = scrT;

      this.activeTopButton = scrT > 20
    },
    handleWheel () {
      this.scrollDirection = event.deltaY > 0 ? 'up' : 'down'
      console.log('wheel', event.deltaY, this.scrollDirection)
    }
  }
}</code>
    </pre>

    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>
    <p>scroll down</p>

    <h2>nuxt 에서 eventBus</h2>
    <pre>
      <code v-highlight class="javascript">/* $emit
 * layouts/Default.vue 에서
 * emit 날릴때
 */
handleScroll () {
  const scrollH = window.scrollY
  this.$nuxt.$emit('winScrollH', scrollH)
}

/* $on
 * components/Header.vue 에서 * 받을때
 */
mounted () {
  this.$nuxt.$on('winScrollH', this.getWinScrollH)
},
beforeDestroy () {
  this.$nuxt.$off('windowScrollH', this.getWinScrollH)
},
methods: {
  getWinScrollH (val) {
    /*
     * 여기 val ( scrollH ) 값으로 처리
     */
    this.scrollH = val;
  }
}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'SCROLLEVENT',
  layout: 'blog'
}
</script>

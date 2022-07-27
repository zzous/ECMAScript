<template>
  <div>
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
      const scrY = window.scrollY
      this.activeTopButton = scrY > 20
    }
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

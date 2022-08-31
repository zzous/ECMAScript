<template>
  <div id="category">
    <div class="inner">
      <ul>
        <li><nuxt-link to="/">ES2022</nuxt-link></li>
        <li><nuxt-link to="/posts/vuex">vuex</nuxt-link></li>
        <li><nuxt-link to="/posts/dataTypes">Data Types</nuxt-link></li>
        <li>
          <nuxt-link to="/posts/map">Map / Reduce / Filter</nuxt-link>
          <ul v-if="$route.path === '/posts/map'" class="subList">
            <li><a class="link" @click="scrollMove('map')">map</a></li>
            <li><a class="link" @click="scrollMove('reduce')">reduce</a></li>
            <li><a class="link" @click="scrollMove('filter')">filter</a></li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/posts/scrollEvent">scrollEvent</nuxt-link>
          <ul>
            <li style="padding-left: 10px; background: rgba(255, 255, 255, 0.7); border-radius: 3px; white-space: nowrap;">
              scrollH(eventBus) : {{ winScrollH }}
            </li>
          </ul>
        </li>
        <li><nuxt-link to="/posts/highlightTag">tag highlight</nuxt-link></li>
        <li><nuxt-link to="/posts/searchTest">searchTest</nuxt-link></li>
        <li><nuxt-link to="/posts/ratingExample">ratingExample</nuxt-link></li>
        <li><nuxt-link to="/posts/tensorflow">tensorflow</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CATEGORY',
  data () {
    return {
      winScrollH: 0
    };
  },
  mounted () {
    this.$nuxt.$on('windowScrollH', this.getWinScrollH);
  },
  beforeDestroy () {
    this.$nuxt.$off('windowScrollH', this.getWinScrollH);
  },
  // destroyed () {
  //   window.$eventBus.$off('windowScrollH', this.getWinScrollH)
  // },
  methods: {
    scrollMove (target) {
      const _target = document.getElementById(target);
      window.scrollTo({ top: _target.offsetTop, behavior: 'smooth' });
    },
    getWinScrollH (val) {
      // console.log('eventBus', val)
      this.winScrollH = val;
    }
  }
};
</script>

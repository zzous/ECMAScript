<template>
  <div id="category">
    <div class="inner">
      <ul>
        <li>
          <nuxt-link to="/">
            ES2022
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts/vuex">
            vuex
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts/dataTypes">
            Data Types
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts/map">
            Map / Reduce / Filter
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/posts/scrollEvent">
            scrollEvent
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CATEGORY'
}
</script>

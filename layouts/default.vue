<template>
  <div id="container">
    <Category />
    <Nav />
    <Nuxt />
    <CommonScrollTop />
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
  head: {
    title: 'nuxt test site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'nuxt test site',
        name: 'nuxt test site',
        content: 'nuxt test site'
      }
    ]
  }
}
</script>

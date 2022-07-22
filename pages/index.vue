<template>
  <div>
    <Es2022 />
    <Es2021 />
    <Es2020 />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

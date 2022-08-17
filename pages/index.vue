<template>
  <div>
    <Es2022 />
    <Es2021 />
    <Es2020 />
    <Es2019 />
    <Es2018 />
    <Es2017 />
    <Es2015 />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>

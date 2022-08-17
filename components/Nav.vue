<template>
  <div id="navigation">
    <div class="inner">
      <ul>
        <li><a class="link" @click="scrollMove('ES2022')">ES2022</a></li>
        <li><a class="link" @click="scrollMove('ES2021')">ES2021</a></li>
        <li><a class="link" @click="scrollMove('ES2020')">ES2020</a></li>
        <li><a class="link" @click="scrollMove('ES2019')">ES2019</a></li>
        <li><a class="link" @click="scrollMove('ES2018')">ES2018</a></li>
        <li><a class="link" @click="scrollMove('ES2017')">ES2017</a></li>
        <li><a class="link" @click="scrollMove('ES2015')">ES2015 (ES6)</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  methods: {
    scrollMove (target) {
      const _target = document.getElementById(target);
      window.scrollTo({ top: _target.offsetTop, behavior: 'smooth' });
    }
  }
};
</script>

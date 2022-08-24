<template>
  <div>
    <h1>rating example</h1>

    <div class="raings">
      <div class="bg">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
      <div class="active" :style="`width: ${ratingCounter * 10}%`">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
      <div class="btn">
        <template v-for="idx in 5">
          <button :key="idx" @click="setCounterRating(idx)" />
        </template>
      </div>
    </div>
    <div style="margin-top: 50px;">
      <button @click="autoCount">
        + / -
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RATINGEXAMPLE',
  layout: 'blog',
  data () {
    return {
      // 
      ratingCounter: 0,
      countDirection: 'plus' // 'plus || minus'
    };
  },
  methods: {
    autoCount () {
      if (this.countDirection === 'plus') {
        this.ratingCounter++;
        if (this.ratingCounter === 10) {
          this.countDirection = 'minus';
        }
      } else {
        this.ratingCounter--;
        if (this.ratingCounter === 0) {
          this.countDirection = 'plus';
        }
      }
    },

    setCounterRating (idx) {
      console.log('index', idx);
      this.ratingCounter = idx * 2;
    }
  }
};
</script>

<style scoped>
.raings { position: relative; width: 135px; font-size: 29px; }
.raings > div { width: 135px; white-space: nowrap; }
.raings > div > span,
.raings > div > button { display: inline-block; width: 27px; height: 27px; }
.raings .bg { color: #ddd; }
.raings .active { position: absolute; top: 0; left: 0; overflow: hidden; color: #000; }
.raings .btn { position: absolute; top: 27px; left: 0; overflow: hidden; color: #000; }
</style>

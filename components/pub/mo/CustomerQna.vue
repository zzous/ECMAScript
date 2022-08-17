<template>
  <div class="customer_notice">
    <div class="customer_list">
      <div v-for="(item, index) in qnaLists" :key="index" :class="['cusdtomer_accordion']">
        <div class="accordion_q" @click="btnOption('accrToggle', index)">
          <span>{{ item.question }}</span>
        </div>
        <div class="accordion_a">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    qnaLists: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    };
  },
  methods: {
    btnOption (type, index) {
      this.$emit(type, index);
      const accItem = document.querySelectorAll('.cusdtomer_accordion');
      accItem.forEach((item, i) => {
        if (index === i) {
          item.classList.contains('open') ? item.classList.remove('open') : item.classList.add('open');
        } else {
          item.classList.remove('open');
        }
      });
    }
  }
};
</script>

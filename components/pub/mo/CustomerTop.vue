<template>
  <div class="customer_qna_top">
    <div class="customer_search">
      <div :class="['search_area',{inText:inputState }]">
        <div class="serarchinput">
          <input v-model="qnaInput" type="text" placeholder="궁금하신 내용을 입력해 주세요" @keyup.enter="searchResult('resultKeyword', qnaInput)">
          <button class="btn_search small" @click="searchResult('resultKeyword', qnaInput)">
            버튼
          </button>
          <button v-if="inputState" class="btn-searchDel" @click="textDel" />
        </div>
        <button class="btn_reset" @click="textDel" />
      </div>
      <div class="qna_soarting">
        <button
          v-for="(text, index) in searchLists"
          :key="index"
          class="btn_qna"
          @click="btnControl('qnaBtns','searchSoarting', text.text, index)"
        >
          {{ text.text }}
        </button>
      </div>
    </div>
    <div :class="['qna_lists_wrap', qnaClass]">
      <div class="qna_lists">
        <button
          v-for="(item, index) in qnasortingLists"
          :key="index"
          :class="['btn_qna_list', item.class, {active:item.active}]"
          @click="btnControl('qnaBtns', 'btnsSoarting', item.text, index)"
        >
          <em>{{ item.text }}</em>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchLists: {
      type: Array,
      default: () => []
    },
    qnasortingLists: {
      type: Array,
      default: () => []
    },
    qnaClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      qnaInput: ''
    };
  },
  computed: {
    inputState () {
      return this.qnaInput.length > 0;
    }
  },
  methods: {
    textDel () {
      this.qnaInput = '';
    },
    btnControl (emit, type, text, index) {
      this.$emit(emit, type, text, index);
    },
    searchResult (type, text) {
      console.log('#clicked', text);
      this.$emit(type, text);
    }
  }
};
</script>

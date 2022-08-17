<template>
  <div>
    <h1>tag highlight</h1>

    <div>
      <strong>원본 텍스트:</strong> <br><br>
      <p>
        {{ originText }}
      </p>
    </div>
    <div style="padding-top: 20px;">
      <p>typing</p>
      <p><input v-model="inputText" type="text"></p>
    </div>
    <div style="padding-top: 20px;">
      <p>tag 변환</p>
      <p v-html="convertText" />
    </div>
    <pre>
      <code v-highlight class="vue">// template
&lt;div>
  &lt;strong>원본 텍스트:&lt;/strong> &lt;br>&lt;br>
  &lt;p>
    {{ originText }}
  &lt;/p>
&lt;/div>
&lt;div style="padding-top: 20px;">
  &lt;p>typing&lt;/p>
  &lt;p>&lt;input v-model="inputText" type="text">&lt;/p>
&lt;/div>
&lt;div style="padding-top: 20px;">
  &lt;p>tag 변환&lt;/p>
  &lt;p v-html="convertText" />
&lt;/div>
// script
export default {
  name: 'DATATYPES',
  layout: 'blog',
  data () {
    return {
      originText: '터미널 접속을 위해서는 접속하려는 서버의 ACG에 SSH TCP/22에 대한 규칙이 설정되어 있어야 합니다. 규칙을 추가하려면 프로토콜, 접근 소스, 허용 포트를 기재하고 [추가] 버튼을 클릭합니다',
      inputText: null, // input 입력 text
      convertText: null // origin 변환 text ( inputText 와 일치항목 em 으로 감싼거 )
    }
  },
  watch: {
    inputText: {
      deep: true,
      handler () {
        this.convertText = this.convertKeyword(this.inputText, this.originText)
      }
    }
  },
  methods: {
    convertKeyword (keyword, origin) {
      const lowerText = origin.toLowerCase()
      keyword = keyword.trim()
      let keywordAry = keyword.split(' ')
      keywordAry = this.getDoubleCheckKeywordList(keywordAry)

      let findAry = []
      for (let i = 0, len = keywordAry.length; i &lt; len; i++) {
        const lowerWord = keywordAry[i].trim().toLowerCase()
        const findIndex = lowerText.indexOf(lowerWord)

        if (findIndex !== -1) { findAry.push([findIndex, findIndex + lowerWord.length]) }
      }

      findAry = this.getAscAry(findAry)
      const r = this.replaceFindKeyword(findAry, origin)
      return r
    },
    replaceFindKeyword (indexAry, str) {
      if (!indexAry || !indexAry.length) { return str }
      let result = str
      const frontStr = '<em class="em-point">'
      const backStr = '</em>'

      const fLen = frontStr.length
      const bLen = backStr.length

      let addLen = 0
      for (let i = 0, len = indexAry.length; i &lt; len; i++) {
        const current = indexAry[i]
        result = this.setCharAt(result, current[0] + addLen, frontStr)
        addLen += fLen
        result = this.setCharAt(result, current[1] + addLen, backStr)
        addLen += bLen
      }

      return result
    },
    getDoubleCheckKeywordList (list) {
      const newList = []
      for (let i = 0, len = list.length; i &lt; len; i++) {
        const keyword = list[i].trim().toLowerCase()
        const find = newList.find(x => x.includes(keyword))
        if (!find) {
          newList.push(keyword)
        }
      }
      return newList
    },
    setCharAt (str, index, chr) {
      if (index > str.length - 1) { return str }
      return str.substring(0, index) + chr + str.substring(index)
    },
    getAscAry (list) {
      list = list.concat()
      list.sort((a, b) => {
        return a[0] &lt; b[0] ? -1 : a[0] > b[0] ? 1 : 0
      })
      return list
    }
  }
}
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'DATATYPES',
  layout: 'blog',
  data () {
    return {
      originText: '터미널 접속을 위해서는 접속하려는 서버의 ACG에 SSH TCP/22에 대한 규칙이 설정되어 있어야 합니다. 규칙을 추가하려면 프로토콜, 접근 소스, 허용 포트를 기재하고 [추가] 버튼을 클릭합니다',
      inputText: null, // input 입력 text
      convertText: null // origin 변환 text ( inputText 와 일치항목 em 으로 감싼거 )
    };
  },
  watch: {
    inputText: {
      deep: true,
      handler () {
        this.convertText = this.convertKeyword(this.inputText, this.originText);
      }
    }
  },
  methods: {
    convertKeyword (keyword, origin) {
      const lowerText = origin.toLowerCase();
      keyword = keyword.trim();
      let keywordAry = keyword.split(' ');
      keywordAry = this.getDoubleCheckKeywordList(keywordAry);

      let findAry = [];
      for (let i = 0, len = keywordAry.length; i < len; i++) {
        const lowerWord = keywordAry[i].trim().toLowerCase();
        const findIndex = lowerText.indexOf(lowerWord);

        if (findIndex !== -1) { findAry.push([findIndex, findIndex + lowerWord.length]); }
      }

      findAry = this.getAscAry(findAry);
      const r = this.replaceFindKeyword(findAry, origin);
      return r;
    },
    replaceFindKeyword (indexAry, str) {
      if (!indexAry || !indexAry.length) { return str; }
      let result = str;
      const frontStr = '<em class="em-point">';
      const backStr = '</em>';

      const fLen = frontStr.length;
      const bLen = backStr.length;

      let addLen = 0;
      for (let i = 0, len = indexAry.length; i < len; i++) {
        const current = indexAry[i];
        result = this.setCharAt(result, current[0] + addLen, frontStr);
        addLen += fLen;
        result = this.setCharAt(result, current[1] + addLen, backStr);
        addLen += bLen;
      }

      return result;
    },
    getDoubleCheckKeywordList (list) {
      const newList = [];
      for (let i = 0, len = list.length; i < len; i++) {
        const keyword = list[i].trim().toLowerCase();
        const find = newList.find(x => x.includes(keyword));
        if (!find) {
          newList.push(keyword);
        }
      }
      return newList;
    },
    setCharAt (str, index, chr) {
      if (index > str.length - 1) { return str; }
      return str.substring(0, index) + chr + str.substring(index);
    },
    getAscAry (list) {
      list = list.concat();
      list.sort((a, b) => {
        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
      });
      return list;
    }
  }
};
</script>

<style>
input[type='text'] { border: 1px solid #ddd; }
.em-point { color: #165fd6; }
</style>

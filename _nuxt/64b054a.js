(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{484:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},485:function(t,n,e){var content=e(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(67).default)("d8312e50",content,!0,{sourceMap:!1})},498:function(t,n,e){"use strict";var r=e(2),o=e(499).trim;r({target:"String",proto:!0,forced:e(500)("trim")},{trim:function(){return o(this)}})},499:function(t,n,e){var r=e(3),o=e(25),d=e(13),c=e(484),l=r("".replace),f="["+c+"]",h=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),x=function(t){return function(n){var e=d(o(n));return 1&t&&(e=l(e,h,"")),2&t&&(e=l(e,v,"")),e}};t.exports={start:x(1),end:x(2),trim:x(3)}},500:function(t,n,e){var r=e(82).PROPER,o=e(4),d=e(484);t.exports=function(t){return o((function(){return!!d[t]()||"​᠎"!=="​᠎"[t]()||r&&d[t].name!==t}))}},501:function(t,n,e){"use strict";var r=e(2),o=e(83).find,d=e(135),c="find",l=!0;c in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),d(c)},502:function(t,n,e){"use strict";var r=e(2),o=e(3),d=e(40),c=e(26),l=e(33),f=e(202),h=e(13),v=e(4),x=e(201),y=e(136),w=e(503),A=e(504),m=e(81),T=e(505),k=[],C=o(k.sort),_=o(k.push),L=v((function(){k.sort(void 0)})),S=v((function(){k.sort(null)})),K=y("sort"),P=!v((function(){if(m)return m<70;if(!(w&&w>3)){if(A)return!0;if(T)return T<603;var code,t,n,e,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(e=0;e<47;e++)k.push({k:t+e,v:n})}for(k.sort((function(a,b){return b.v-a.v})),e=0;e<k.length;e++)t=k[e].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:L||!S||!K||!P},{sort:function(t){void 0!==t&&d(t);var n=c(this);if(P)return void 0===t?C(n):C(n,t);var e,r,o=[],v=l(n);for(r=0;r<v;r++)r in n&&_(o,n[r]);for(x(o,function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:h(n)>h(e)?1:-1}}(t)),e=o.length,r=0;r<e;)n[r]=o[r++];for(;r<v;)f(n,r++);return n}})},503:function(t,n,e){var r=e(65).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},504:function(t,n,e){var r=e(65);t.exports=/MSIE|Trident/.test(r)},505:function(t,n,e){var r=e(65).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},506:function(t,n,e){"use strict";e(485)},507:function(t,n,e){var r=e(66)(!1);r.push([t.i,"input[type=text]{border:1px solid #ddd}.em-point{color:#165fd6}",""]),t.exports=r},515:function(t,n,e){"use strict";e.r(n);e(498),e(30),e(200),e(501),e(15),e(47),e(48),e(84),e(502);var r={name:"DATATYPES",layout:"blog",data:function(){return{originText:"터미널 접속을 위해서는 접속하려는 서버의 ACG에 SSH TCP/22에 대한 규칙이 설정되어 있어야 합니다. 규칙을 추가하려면 프로토콜, 접근 소스, 허용 포트를 기재하고 [추가] 버튼을 클릭합니다",inputText:null,convertText:null}},watch:{inputText:{deep:!0,handler:function(){this.convertText=this.convertKeyword(this.inputText,this.originText)}}},methods:{convertKeyword:function(t,n){for(var e=n.toLowerCase(),r=(t=t.trim()).split(" "),o=[],i=0,d=(r=this.getDoubleCheckKeywordList(r)).length;i<d;i++){var c=r[i].trim().toLowerCase(),l=e.indexOf(c);-1!==l&&o.push([l,l+c.length])}return o=this.getAscAry(o),this.replaceFindKeyword(o,n)},replaceFindKeyword:function(t,n){if(!t||!t.length)return n;for(var e=n,r='<em class="em-point">',o="</em>",d=r.length,c=o.length,l=0,i=0,f=t.length;i<f;i++){var h=t[i];e=this.setCharAt(e,h[0]+l,r),l+=d,e=this.setCharAt(e,h[1]+l,o),l+=c}return e},getDoubleCheckKeywordList:function(t){for(var n=[],e=function(i,e){var r=t[i].trim().toLowerCase();n.find((function(t){return t.includes(r)}))||n.push(r)},i=0,r=t.length;i<r;i++)e(i);return n},setCharAt:function(t,n,e){return n>t.length-1?t:t.substring(0,n)+e+t.substring(n)},getAscAry:function(t){return(t=t.concat()).sort((function(a,b){return a[0]<b[0]?-1:a[0]>b[0]?1:0})),t}}},o=(e(506),e(14)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("tag highlight")]),t._v(" "),n("div",[n("strong",[t._v("원본 텍스트:")]),t._v(" "),n("br"),n("br"),t._v(" "),n("p",[t._v("\n        "+t._s(t.originText)+"\n      ")])]),t._v(" "),n("div",{staticStyle:{"padding-top":"20px"}},[n("p",[t._v("typing")]),t._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text"},domProps:{value:t.inputText},on:{input:function(n){n.target.composing||(t.inputText=n.target.value)}}})])]),t._v(" "),n("div",{staticStyle:{"padding-top":"20px"}},[n("p",[t._v("tag 변환")]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.convertText)}})]),t._v(" "),n("pre",[t._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"vue"},[t._v("// template\n<div>\n  <strong>원본 텍스트:</strong> <br><br>\n  <p>\n    "+t._s(t.originText)+'\n  </p>\n</div>\n<div style="padding-top: 20px;">\n  <p>typing</p>\n  <p><input v-model="inputText" type="text"></p>\n</div>\n<div style="padding-top: 20px;">\n  <p>tag 변환</p>\n  <p v-html="convertText" />\n</div>\n// script\nexport default {\n  name: \'DATATYPES\',\n  layout: \'blog\',\n  data () {\n    return {\n      originText: \'터미널 접속을 위해서는 접속하려는 서버의 ACG에 SSH TCP/22에 대한 규칙이 설정되어 있어야 합니다. 규칙을 추가하려면 프로토콜, 접근 소스, 허용 포트를 기재하고 [추가] 버튼을 클릭합니다\',\n      inputText: null, // input 입력 text\n      convertText: null // origin 변환 text ( inputText 와 일치항목 em 으로 감싼거 )\n    }\n  },\n  watch: {\n    inputText: {\n      deep: true,\n      handler () {\n        this.convertText = this.convertKeyword(this.inputText, this.originText)\n      }\n    }\n  },\n  methods: {\n    convertKeyword (keyword, origin) {\n      const lowerText = origin.toLowerCase()\n      keyword = keyword.trim()\n      let keywordAry = keyword.split(\' \')\n      keywordAry = this.getDoubleCheckKeywordList(keywordAry)\n\n      let findAry = []\n      for (let i = 0, len = keywordAry.length; i < len; i++) {\n        const lowerWord = keywordAry[i].trim().toLowerCase()\n        const findIndex = lowerText.indexOf(lowerWord)\n\n        if (findIndex !== -1) { findAry.push([findIndex, findIndex + lowerWord.length]) }\n      }\n\n      findAry = this.getAscAry(findAry)\n      const r = this.replaceFindKeyword(findAry, origin)\n      return r\n    },\n    replaceFindKeyword (indexAry, str) {\n      if (!indexAry || !indexAry.length) { return str }\n      let result = str\n      const frontStr = \''),n("em",{staticClass:"em-point"},[t._v("'\n      const backStr = '")]),t._v("'\n\n      const fLen = frontStr.length\n      const bLen = backStr.length\n\n      let addLen = 0\n      for (let i = 0, len = indexAry.length; i < len; i++) {\n        const current = indexAry[i]\n        result = this.setCharAt(result, current[0] + addLen, frontStr)\n        addLen += fLen\n        result = this.setCharAt(result, current[1] + addLen, backStr)\n        addLen += bLen\n      }\n\n      return result\n    },\n    getDoubleCheckKeywordList (list) {\n      const newList = []\n      for (let i = 0, len = list.length; i < len; i++) {\n        const keyword = list[i].trim().toLowerCase()\n        const find = newList.find(x => x.includes(keyword))\n        if (!find) {\n          newList.push(keyword)\n        }\n      }\n      return newList\n    },\n    setCharAt (str, index, chr) {\n      if (index > str.length - 1) { return str }\n      return str.substring(0, index) + chr + str.substring(index)\n    },\n    getAscAry (list) {\n      list = list.concat()\n      list.sort((a, b) => {\n        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0\n      })\n      return list\n    }\n  }\n}\n      ")]),t._v("\n    ")])])}),[],!1,null,null,null);n.default=component.exports}}]);
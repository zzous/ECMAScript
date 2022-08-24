(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{486:function(n,t,e){var content=e(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(67).default)("b410198c",content,!0,{sourceMap:!1})},508:function(n,t,e){"use strict";e(486)},509:function(n,t,e){var r=e(66)(!1);r.push([n.i,".raings[data-v-67d9aea6]{position:relative;width:135px;font-size:29px}.raings>div[data-v-67d9aea6]{width:135px;white-space:nowrap}.raings>div>button[data-v-67d9aea6],.raings>div>span[data-v-67d9aea6]{display:inline-block;width:27px;height:27px}.raings .bg[data-v-67d9aea6]{color:#ddd}.raings .active[data-v-67d9aea6]{top:0}.raings .active[data-v-67d9aea6],.raings .btn[data-v-67d9aea6]{position:absolute;left:0;overflow:hidden;color:#000}.raings .btn[data-v-67d9aea6]{top:27px}",""]),n.exports=r},517:function(n,t,e){"use strict";e.r(t);var r={name:"RATINGEXAMPLE",layout:"blog",data:function(){return{ratingCounter:0,countDirection:"plus"}},methods:{autoCount:function(){"plus"===this.countDirection?(this.ratingCounter++,10===this.ratingCounter&&(this.countDirection="minus")):(this.ratingCounter--,0===this.ratingCounter&&(this.countDirection="plus"))},setCounterRating:function(n){this.ratingCounter=2*n},setCounterHalfRating:function(n){2*n===this.ratingCounter?this.ratingCounter=this.ratingCounter-1:2*(n-1)<this.ratingCounter&&2*n>this.ratingCounter?this.ratingCounter=this.ratingCounter+1:this.ratingCounter=2*n}}},o=(e(508),e(14)),component=Object(o.a)(r,(function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v("rating example")]),n._v(" "),t("div",{staticClass:"raings"},[n._m(0),n._v(" "),t("div",{staticClass:"active",style:"width: ".concat(10*n.ratingCounter,"%")},[t("span",[n._v("★")]),t("span",[n._v("★")]),t("span",[n._v("★")]),t("span",[n._v("★")]),t("span",[n._v("★")])]),n._v(" "),t("div",{staticClass:"btn"},[n._l(5,(function(e){return[t("button",{key:e,on:{click:function(t){return n.setCounterRating(e)}}},[n._v("\n            "+n._s(e)+"\n          ")])]}))],2),n._v(" "),t("div",{staticClass:"btn",staticStyle:{"margin-top":"45px"}},[n._l(5,(function(e){return[t("button",{key:e,on:{click:function(t){return n.setCounterHalfRating(e)}}},[n._v("\n            "+n._s(e-1)+".5\n          ")])]}))],2)]),n._v(" "),t("div",{staticStyle:{"margin-top":"100px"}},[t("button",{on:{click:n.autoCount}},[n._v("\n        + / - 버튼\n      ")])]),n._v(" "),t("pre",[n._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"vue"},[n._v('// template\n<div class="raings">\n  <div class="bg">\n    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n  </div>\n  <div class="active" :style="`width: ${ratingCounter * 10}%`">\n    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>\n  </div>\n  <div class="btn">\n    <template v-for="idx in 5">\n      <button :key="idx" @click="setCounterRating(idx)" />\n    </template>\n  </div>\n  '),n._v('\n  <div class="btn" style="margin-top: 45px;">\n    <template v-for="idx in 5">\n      <button :key="idx" @click="setCounterHalfRating(idx)">\n              '),n._v("\n      </button>\n    </template>\n  </div>\n</div>\n<div style=\"margin-top: 50px;\">\n  <button @click=\"autoCount\">\n    + / -\n  </button>\n</div>\n\n// script\nexport default {\n  data () {\n    return {\n      ratingCounter: 0,\n      countDirection: 'plus' // 'plus || minus'\n    };\n  },\n  methods: {\n    autoCount () {\n      if (this.countDirection === 'plus') {\n        this.ratingCounter++;\n        if (this.ratingCounter === 10) {\n          this.countDirection = 'minus';\n        }\n      } else {\n        this.ratingCounter--;\n        if (this.ratingCounter === 0) {\n          this.countDirection = 'plus';\n        }\n      }\n    },\n\n    setCounterRating (idx) {\n      console.log('index', idx);\n      this.ratingCounter = idx * 2;\n    },\n    setCounterHalfRating (idx) {\n      if ((idx * 2) === this.ratingCounter) {\n        this.ratingCounter = this.ratingCounter - 1;\n      } else if (((idx - 1) * 2) < this.ratingCounter && (idx * 2) > this.ratingCounter) {\n        this.ratingCounter = this.ratingCounter + 1;\n      } else {\n        this.ratingCounter = idx * 2;\n      }\n    }\n  }\n};\n      ")]),n._v("\n    ")])])}),[function(){var n=this,t=n._self._c;return t("div",{staticClass:"bg"},[t("span",[n._v("★")]),t("span",[n._v("★")]),t("span",[n._v("★")]),t("span",[n._v("★")]),t("span",[n._v("★")])])}],!1,null,"67d9aea6",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{516:function(e,n,t){"use strict";t.r(n);var r={name:"MAP",layout:"blog"},c=t(14),component=Object(c.a)(r,(function(){var e=this,n=e._self._c;return n("div",[n("CommonScrollTop"),e._v(" "),n("h1",[e._v("# Map / Reduce / Filter")]),e._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/#ES2015"}},[e._v("\n        ES6 (ES2015)\n      ")]),e._v(" 에 추가된 methods\n    ")],1),e._v(" "),n("h2",{attrs:{id:"map"}},[e._v("\n      Array.prototype.map()\n    ")]),e._v(" "),n("p",[e._v("배열 내의 모든 요소들에 대해 주어진 함수의 결과값 들을 배열로 반환")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const _array = [1, 2, 3, 4, 5];\n\nconst _map = _array.map(item => item * 2);\n\nconsole.log(_map); // [2, 4, 6, 8, 10]")]),e._v("\n    ")]),e._v(" "),n("h3",[e._v("구문")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("arr.map(callback(currentValue[, index[, array]])[, thisArg])")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("callback")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("h3",[e._v("map() 활용")]),e._v(" "),n("p",[e._v("HOF (high order function, 고차함수) : 함수를 반환하거나 함수를 인수로 사용하는 함수")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const _arr = [1, 2, 3, 4, 5]\nconst _double = item => item * 2;\nconst result = _arr.map(_double);\n// 함수를 인수로 사용하고 있다. ( HOF )\nconsole.log(result); // [2, 4, 6, 8, 10]")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("특정 요소의 값만 가져오기")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const _arr = [\n  { name: 'tomas', gender: 'male', age: '18' },\n  { name: 'cyndi', gender: 'female', age: '22' },\n  { name: 'louis', gender: 'male', age: '35' },\n  { name: 'natasha', gender: 'female', age: '35' }\n]\nconst _name = _arr.map(item => item.name);\nconsole.log(_name) // ['tomas', 'cyndi', 'louis', 'natasha']")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("Object.entries() 를 이용한 object 순회")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const _obj = {\n        name: 'louis',\n        nickname: 'gaga'\n}\n\nconst _newArr = Object.entries(_obj);\nconsole.log(_newArr) // [['name', 'louis'], ['nickname', 'gaga']]")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("특정 요소 재정의")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const activePage = 'about'; // this.$route.path 등으로 받아온 현재 페이지\nconst navigation = [\n  { name: 'home', isActive: false },\n  { name: 'about', isActive: false },\n  { name: 'blog', isActive: false }\n];\nconst activeNav = navigation.map(item => {\n  item.isActive = (item.name === activePage) ? true : false\n  return {...item};\n});\nconsole.log(activeNav) // [{name: 'home', isActive: false}, {name: 'about', isActive: true}, {name: 'blog', isActive: false}]")]),e._v("\n    ")]),e._v(" "),n("h2",{attrs:{id:"reduce"}},[e._v("\n      Array.prototype.reduce()\n    ")]),e._v(" "),n("p",[e._v("배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환")]),e._v(" "),n("h3",[e._v("구문")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("arr.reduce(callback[, initialValue])")]),e._v("\n    ")]),e._v(" "),n("h3",[e._v("매개변수")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const _arr = [1, 2, 3, 4, 5];\nconst _sum = _arr.reduce((acc, cur) => acc + cur);\nconsole.log(_sum) // 15\n\nconst _sum10 = _arr.reduce((acc, cur) => acc + cur, 10);\nconsole.log(_sum10) // 25\n\nconst _empty = []\nconst _sumX = _empty.reduce((acc, cur) => acc + cur) // TypeError")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("initialValue ( 초기값 ) 설정이 없으면 최초 currentValue (1) 가 initialValue 로 설정된다.")]),e._v(" "),n("p",[e._v("빈 배열.reduce() 를 호출할 경우 initialValue 설정이 없으면(?) TypeError")]),e._v(" "),n("h3",[e._v("reduce() 활용")]),e._v(" "),n("p",[e._v("나이 합산")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const member = [\n  { name: 'tomas', gender: 'male', age: 18 },\n  { name: 'cyndi', gender: 'female', age: 22 },\n  { name: 'louis', gender: 'male', age: 35 },\n  { name: 'natasha', gender: 'female', age: 35 }\n]\nconst sumAge = member.reduce((acc, cur) => acc + cur.age, 0); // Object 로 이루어진 배열에 대해서는 반드시 initialValue 를 지정해야 한다.\nconsole.log(sumAge); // 110")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("중첩 배열 합치기")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const _arr = [[1, 2], [3, 4], [5, 6]];\nconst _concat = _arr.reduce((acc, cur) => acc.concat(cur));\nconsole.log(_concat); // [1, 2, 3, 4, 5, 6] ")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("속성으로 배열 분류하기")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const member = [\n  { name: 'tomas', gender: 'male', age: 18 },\n  { name: 'cyndi', gender: 'female', age: 22 },\n  { name: 'louis', gender: 'male', age: 35 },\n  { name: 'natasha', gender: 'female', age: 35 }\n]\n// gender 속성으로 분류하기\nconst gender = member.reduce((acc, cur) => {\n  const _key = cur.gender;\n  if (!acc[_key]) acc[_key] = [];\n  acc[_key].push(cur);\n  return acc;\n}, {})\nconsole.log(gender)\n// {\n//   male: [\n//     {name: 'tomas', gender: 'male', age: 18},\n//     {name: 'louis', gender: 'male', age: 35}\n//   ],\n//   female: [\n//     {name: 'cyndi', gender: 'female', age: 22},\n//     {name: 'natasha', gender: 'female', age: 35}\n//   ]\n// } ")]),e._v("\n    ")]),e._v(" "),n("h2",{attrs:{id:"filter"}},[e._v("\n      Array.prototype.filter()\n    ")]),e._v(" "),n("p",[e._v("주어진 함수의 조건을 만족하는 모든 요소를 새로운 배열로 반환")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];\nconst result = words.filter(word => word.length > 6);\nconsole.log(result);\n// expected output: Array [\"exuberant\", \"destruction\", \"present\"]")]),e._v("\n    ")]),e._v(" "),n("h3",[e._v("구문")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("arr.filter(callback(element[, index[, array]])[, thisArg])")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("callback (내부 함수) : 해당 함수의 return 값이 true / false 의 값만 갖는다 ( map() 의 내부 함수에서는 여러 타입의 return 값을 갖는다 )")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];\nconst result = words.filter((word, index, thisArg) => {\n  console.log('word : ', element, 'index : ', index, thisArg);\n  return element.length > 6;\n})")]),e._v("\n    ")]),e._v(" "),n("p",[e._v("return 값이 모두 false 이면 [] 빈 배열을 반환")]),e._v(" "),n("h3",[e._v("Polyfill")]),e._v(" "),n("pre",[e._v("      "),n("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javacript"},[e._v("if (!Array.prototype.filter) {\n  Array.prototype.filter = function (func, thisArg) {\n    'use strict';\n    if ( !((typeof func === 'Function' || typeof func === 'function') && this) )\n        throw new TypeError();\n\n    var len = this.length >>> 0,\n        res = new Array(len), // preallocate array\n        t = this, c = 0, i = -1;\n    if (thisArg === undefined) {\n      while (++i !== len) {\n        // checks to see if the key was set\n        if (i in this) {\n          if (func(t[i], i, t)) {\n            res[c++] = t[i];\n          }\n        }\n      }\n    } else {\n      while (++i !== len) {\n        // checks to see if the key was set\n        if (i in this) {\n          if (func.call(thisArg, t[i], i, t)) {\n            res[c++] = t[i];\n          }\n        }\n      }\n    }\n\n    res.length = c; // shrink down array to proper size\n    return res;\n  };\n}")]),e._v("\n    ")]),e._v(" "),e._m(15)],1)}),[function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("currentValue")]),e._v(" value\n    ")])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("index (Optional)")]),e._v(" index\n    ")])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("array (Optional)")]),e._v(" map()을 호출한 배열\n    ")])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("thisArg (Optional)")]),e._v(" callback을 실행할 때 this로 사용되는 값.\n    ")])},function(){var e=this,n=e._self._c;return n("p",[e._v("[참조] "),n("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map",target:"_blank"}},[e._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map")])])},function(){var e=this,n=e._self._c;return n("p",[n("span",{staticClass:"box"},[e._v("callback")]),e._v(" 배열의 각 요소에 대해 실행할 함수")])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("accumulator")]),e._v(" 누산기\n    ")])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("currentValue")]),e._v(" 현재 값\n    ")])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("currentIndex")]),e._v(" index\n    ")])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("array")]),e._v(" reduce()를 호출한 배열\n    ")])},function(){var e=this,n=e._self._c;return n("p",[n("span",{staticClass:"box"},[e._v("initialValue")]),e._v(" 초기값")])},function(){var e=this,n=e._self._c;return n("p",[e._v("[참조] "),n("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",target:"_blank"}},[e._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce")])])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("element")]),e._v(" value\n    ")])},function(){var e=this._self._c;return e("p",{staticClass:"indent"},[e("span",{staticClass:"box"},[this._v("index")])])},function(){var e=this,n=e._self._c;return n("p",{staticClass:"indent"},[n("span",{staticClass:"box"},[e._v("thisArg")]),e._v(" 원본 배열\n    ")])},function(){var e=this,n=e._self._c;return n("p",[e._v("[Code] "),n("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%ED%8F%B4%EB%A6%AC%ED%95%84",target:"_blank"}},[e._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%ED%8F%B4%EB%A6%AC%ED%95%84")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{CommonScrollTop:t(138).default})}}]);
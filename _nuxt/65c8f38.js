(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3,4,5,6,7,8],{491:function(e,t,n){"use strict";n.r(t);var o={name:"ES2022"},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ES2022"}},[t("h1",[e._v("# ES2022")]),e._v(" "),t("h2",[e._v("인덱싱 가능한 값의 메서드 .at()")]),e._v(" "),t("p",[e._v("이 함수는 주어진 인덱스에서 요소를 읽어 반환한다.")]),e._v(" "),t("p",[e._v("음수 적용 가능 ( 뒤에서 읽음 )")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const _arr = [1, 2, 3, 4, 5];\nconsole.log(_arr.at(2))   // 3\nconsole.log(_arr.at(-2))  // 4")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Object.hasOwn(obj, key)")]),e._v(" "),t("p",[e._v("Object.hasOwnProperty() 를 대체")]),e._v(" "),t("p",[e._v("key가 obj 객체의 자체 속성인지 확인하는 안전한 방법")]),e._v(" "),t("p",[e._v("속성이 상속되거나 존재하지 않는 경우 메서드는 false를 반환")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const object1 = {\n  prop: 'exists'\n};\n\nconsole.log(Object.hasOwn(object1, 'prop'));\n// expected output: true\n\nconsole.log(Object.hasOwn(object1, 'toString'));\n// expected output: false\n\nconsole.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));\n// expected output: false")]),e._v("\n    ")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Top-level await")]),e._v(" "),t("p",[e._v("비동기 함수나 메서드를 입력할 필요없이 최상위 모듈에서 await를 사용 가능")]),e._v(" "),t("h2",[e._v("Class Fields ( Class public Instance Fields & private Instance Fields )")]),e._v(" "),t("p",[e._v("ES2022 이전 버전에서의 클래스 속성 정의")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("class ButtonToggle extends HTMLElement {\n  constructor(){\n      super();\n      // public field\n      this.color = 'green'\n      // private field\n      this._value = true;\n  }\n\n  toggle(){\n      this.value = !this.value\n  }\n}\n\nconst button = new ButtonToggle();\nconsole.log(button.color);\n// green - public fields are accessible from outside classes\n\nbutton._value = false;\nconsole.log(button._value);\n// false - no error thrown, we can access it from outside the class")]),e._v("\n    ")]),e._v(" "),t("p",[e._v("ES2022")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("class ButtonToggle extends HTMLElement {\n\n  color = 'green';\n  #value = true;\n\n  toggle(){\n      this.#value = !this.#value;\n  }\n}\nconst button = new ButtonToggle();\nconsole.log(button.color);\n// green - public fields are accessible from outside classes\n\n// SyntaxError - cannot be accessed or modified from outside the class\nconsole.log(button.#value);\nbutton.#value = false;")]),e._v("\n    ")]),e._v(" "),t("p",[e._v("constructor 내부에서 field 를 정의할 필요가 없고, # 을 붙여 private field 를 정의 할 수 있다.")])])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("[Code] "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn",target:"_blank"}},[e._v("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn")])])}],!1,null,null,null);t.default=component.exports},492:function(e,t,n){"use strict";n.r(t);var o={name:"ES2021"},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ES2021"}},[t("h1",[e._v("# ES2021")]),e._v(" "),t("h2",[e._v("String.prototype.replaceAll()")]),e._v(" "),t("p",[e._v("replaceAll() 메서드는 패턴의 모든 일치 항목이 대체 항목으로 대체된 새 문자열을 반환한다.")]),e._v(" "),t("p",[e._v("ES2021 이전에는 replaceAll 메서드가 없어 replace 와 정규식을 이용하여 사용했다.")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("// replace()\nconst p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';\n\nconsole.log(p.replace('dog', 'monkey'));\n// expected output: \"The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?\"\n\nconst regex = /Dog/ig;\nconsole.log(p.replace(regex, 'ferret'));\n// expected output: \"The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?\"\n\n// replaceAll()\nconst p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';\n\nconsole.log(p.replaceAll('dog', 'monkey'));\n// expected output: \"The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?\"\n\n// global flag required when calling replaceAll with regex\nconst regex = /Dog/ig;\nconsole.log(p.replaceAll(regex, 'ferret'));\n// expected output: \"The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?\"")]),e._v("\n    ")]),e._v(" "),t("p",[e._v("( * i : 대소문자 구분 없이 * g : 전역으로 검색 )")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Promise.any()")]),e._v(" "),t("p",[e._v("동시에 실행되는 Promise 중 하나가 처리되면 해당 Promise 가 return 된다.")]),e._v(" "),t("p",[e._v("반복가능한 promises 중에 모든 Promise 가 reject 인 경우 그룹화 된 Promise 의 하위 클래스인 AggregateError(하나의 작업에서 여러 오류를 반환해야 하는 경우의 유형) return")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const promise1 = Promise.reject(0);\nconst promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));\nconst promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));\n\nconst promises = [promise1, promise2, promise3];\n\nPromise.any(promises).then((value) => console.log(value));\n\n// expected output: \"quick\"")]),e._v("\n    ")]),e._v(" "),e._m(1),e._v(" "),t("h2",[e._v("Numeric separators ( 숫자 구분 기호 _ )")]),e._v(" "),t("p",[e._v("'_' 를 숫자 사이에 삽입할 수 있다. ( 입력해도 수치로 인식 )")]),e._v(" "),t("p",[e._v("10진수 + 8진수, 16진수 및 2진수에서도 사용 가능")]),e._v(" "),t("p",[e._v("( TypeScript의 버전 2.7부터 사용 가능 )")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("// const value = 100000000;\nconst value = 100_000_000;\nconst octalValue  = 0o32_12;\nconst hexValue    = 0xff_55_00;\nconst binaryValue = 0b1010_1011_1111;")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Logical OR assignment (||=)")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("let foo;\nfoo ||= 'bar';\nconsole.log(foo) // bar\n\nfoo ||= 'baz';\nconsole.log(foo) // bar")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Logical AND assignment (&&=)")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("let foo;\nfoo &&= 'bar';\nconsole.log(foo) // undefined (no assignment because foo is falsy)\n\nfoo = 10;\n\nfoo &&= 'baz';\nconsole.log(foo) // baz")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Logical nullish assignment (??=)")]),e._v(" "),t("p",[e._v("null or undefined 일때 할당")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("let foo;\nfoo ??= 'bar';\nconsole.log(foo) // bar\n\nfoo = false;\n\nfoo ??= 'baz';\nconsole.log(foo) // bar (No assignment because foo is not nullish)")]),e._v("\n    ")])])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("[Code] "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#try_it",target:"_blank"}},[e._v("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#try_it")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("[Code] "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#try_it",target:"_blank"}},[e._v("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#try_it")])])}],!1,null,null,null);t.default=component.exports},493:function(e,t,n){"use strict";n.r(t);var o={name:"ES2020"},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ES2020"}},[t("h1",[e._v("# ES2020")]),e._v(" "),t("h2",[e._v("Dynamic Import")]),e._v(" "),t("p",[e._v("동적으로 module 을 가져올 수 있게 되어, await 와 함께 사용할 수 있다.")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("// module.js\nconst example = (value) => console.log(value);\nexport { example };\n\n// in page\nconst doExample = async (value) => {\n  const _module = await import('module.js');\n  _module.example(value);\n};\ndoExample('test');")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Private Variables in Class")]),e._v(" "),t("p",[e._v("Class 내에서 개인 변수 선언 가능 ( 외부에서는 사용 할 수 없음 )")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v('class MyClass {\n  #privateVariable = "Hello world"\n\n  helloWorld() {\n    console.info(this.#privateVariable)\n  }\n}\n\nconst myClass = new MyClass();\nmyClass.helloWorld();     // Hello world\nconsole.info(myClass.#privateVariable)  // SyntaxError')]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Optional Chaining")]),e._v(" "),t("p",[e._v("?. 연산자는 . 체이닝 연산자와 유사하게 작동하지만, 참조가 nullish ( null 또는 undefined ) 라면, 에러가 발생하는 것 대신에 undefined 리턴")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const adventurer = {\n  name: 'Alice',\n  cat: {\n    name: 'Dinah'\n  }\n};\n\nconst dogName = adventurer.dog?.name;\nconsole.log(dogName);\n// expected output: undefined\n\nconsole.log(adventurer.someNonExistentMethod?.());\n// expected output: undefined")]),e._v("\n    ")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Promise.allSettled")]),e._v(" "),e._m(1),e._v(" "),t("h2",[e._v("String.prototype.matchAll()")]),e._v(" "),e._m(2),e._v(" "),t("h2",[e._v("globalThis")]),e._v(" "),e._m(3),e._v(" "),t("h2",[e._v("BigInt")]),e._v(" "),e._m(4),e._v(" "),t("h2",[e._v("Nullish Coalescing Operator")]),e._v(" "),t("p",[e._v("nullish 병합 연산자 (??) 는 왼쪽이 null or undefined 인경우 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽을 반환한다. ( false or NaN 의 경우는 해당 안됨 )")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const foo = null ?? 'default string';\nconsole.log(foo);\n// expected output: \"default string\"\n\nconst baz = 0 ?? 42;\nconsole.log(baz);\n// expected output: 0")]),e._v("\n    ")]),e._v(" "),e._m(5)])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("[Code] "),t("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining",target:"_blank"}},[e._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining")])])},function(){var e=this._self._c;return e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled",target:"_blank"}},[this._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled")])])},function(){var e=this._self._c;return e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll",target:"_blank"}},[this._v("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll")])])},function(){var e=this._self._c;return e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis",target:"_blank"}},[this._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis")])])},function(){var e=this._self._c;return e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt",target:"_blank"}},[this._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("[Code] "),t("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator",target:"_blank"}},[e._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator")])])}],!1,null,null,null);t.default=component.exports},494:function(e,t,n){"use strict";n.r(t);var o={name:"ES2019"},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ES2019"}},[t("h1",[e._v("# ES2019")]),e._v(" "),t("h2",[e._v("Object.fromEntries()")]),e._v(" "),t("p",[e._v("Object.fromEntries() 메서드는 키값 쌍의 목록을 객체로 바꾼다.")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const entries = [\n  ['foo', 'bar'],\n  ['baz', 42]\n];\n\nconst obj = Object.fromEntries(entries);\n\nconsole.log(obj);\n// expected output: Object { foo: \"bar\", baz: 42 }")]),e._v("\n    ")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("trimStart() and trimEnd()")]),e._v(" "),t("p",[e._v("trimStart() 메서드는 문자열 시작부분의 공백을 제거")]),e._v(" "),t("p",[e._v("trimEnd() 메서드는 문자열 끝부분의 공백을 제거")]),e._v(" "),t("p",[e._v("trim() 메서드는 문자열 양 끝의 공백을 제거")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v('const greeting = \'   Hello world!   \';\n\nconsole.log(greeting.trimStart());\n// expected output: "Hello world!   ";\n\nconsole.log(greeting.trimEnd());\n// expected output: "   Hello world!";\n\nconsole.log(greeting.trim());\n// expected output: "Hello world!";')]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Array.prototype.flat() and Array.prototype.flatMap()")]),e._v(" "),t("p",[e._v("flat() 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성")]),e._v(" "),t("p",[e._v("flatMap() 메서드는 배열에 대한 결합된 병합 및 매핑 동작. 결과를 단일 배열로 병합")]),e._v(" "),e._m(1),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("[1, 2, 3, 4, 5].map(data => [data * 2, data * 3]);\n// [[2, 3], [4, 6], [6, 9], [8, 12], [10, 15]]\n\n[1, 2, 3, 4, 5].map(data => [data * 2, data * 3]).flat();\n// [2, 3, 4, 6, 6, 9, 8, 12, 10, 15];\n\n[1, 2, 3, 4, 5].flatMap(data => [data * 2, data * 3]);\n// [2, 3, 4, 6, 6, 9, 8, 12, 10, 15]")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Symbol.prototype.description")]),e._v(" "),e._m(2)])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("[Code] "),t("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries",target:"_blank"}},[e._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries")])])},function(){var e=this._self._c;return e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap",target:"_blank"}},[this._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap")])])},function(){var e=this._self._c;return e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description",target:"_blank"}},[this._v("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description")])])}],!1,null,null,null);t.default=component.exports},495:function(e,t,n){"use strict";n.r(t);var o={name:"ES2018"},r=n(14),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ES2018"}},[t("h1",[e._v("# ES2018")]),e._v(" "),t("h2",[e._v("Lifting template literal restriction.")]),e._v(" "),t("h2",[e._v("s (dotAll) flag for regular expressions.")]),e._v(" "),t("h2",[e._v("RegExp named capture groups.")]),e._v(" "),t("h2",[e._v("Rest/Spread Properties.")]),e._v(" "),t("h2",[e._v("RegExp Lookbehind Assertions.")]),e._v(" "),t("h2",[e._v("RegExp Unicode Property Escapes.")]),e._v(" "),t("h2",[e._v("Promise.prototype.finally.")]),e._v(" "),t("h2",[e._v("Asynchronous Iteration.")])])}],!1,null,null,null);t.default=component.exports},496:function(e,t,n){"use strict";n.r(t);var o={name:"ES2017"},r=n(14),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ES2017"}},[t("h1",[e._v("# ES2017")]),e._v(" "),t("h2",[e._v("Object.values/Object.entries")]),e._v(" "),t("h2",[e._v("String padding")]),e._v(" "),t("h2",[e._v("Object.getOwnPropertyDescriptors")]),e._v(" "),t("h2",[e._v("Trailing commas in function parameter lists and calls")]),e._v(" "),t("h2",[e._v("Async functions")]),e._v(" "),t("h2",[e._v("Shared memory and atomics")])])}],!1,null,null,null);t.default=component.exports},497:function(e,t,n){"use strict";n.r(t);var o={name:"ES2015"},r=n(14),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ES2015"}},[t("h1",[e._v("# ES2015 ( ES6 )")]),e._v(" "),t("h2",[e._v("Var, let and Const")]),e._v(" "),t("h2",[e._v("Template literals")]),e._v(" "),t("h2",[e._v("Default Arguments")]),e._v(" "),t("h2",[e._v("Arrow Functions")]),e._v(" "),t("h2",[e._v("Array and Object Destructuring")]),e._v(" "),t("h2",[e._v("Map, Reduce and Filter")]),e._v(" "),t("h2",[e._v("Iterables and Looping")]),e._v(" "),t("h2",[e._v("Rest and Spread Operator")]),e._v(" "),t("h2",[e._v("Object Literals")]),e._v(" "),t("h2",[e._v("Classes in ES6")]),e._v(" "),t("h2",[e._v("Promises")])])}],!1,null,null,null);t.default=component.exports},521:function(e,t,n){"use strict";n.r(t);n(68);var o={name:"IndexPage",mounted:function(){var e=this;this.$nextTick((function(){e.$nuxt.$loading.start(),setTimeout((function(){return e.$nuxt.$loading.finish()}),500)}))}},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("Es2022"),e._v(" "),t("Es2021"),e._v(" "),t("Es2020"),e._v(" "),t("Es2019"),e._v(" "),t("Es2018"),e._v(" "),t("Es2017"),e._v(" "),t("Es2015")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Es2022:n(491).default,Es2021:n(492).default,Es2020:n(493).default,Es2019:n(494).default,Es2018:n(495).default,Es2017:n(496).default,Es2015:n(497).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{492:function(e,o,t){"use strict";t.r(o);var r={name:"ES2021"},n=t(14),component=Object(n.a)(r,(function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"ES2021"}},[o("h1",[e._v("# ES2021")]),e._v(" "),o("h2",[e._v("String.prototype.replaceAll()")]),e._v(" "),o("p",[e._v("replaceAll() 메서드는 패턴의 모든 일치 항목이 대체 항목으로 대체된 새 문자열을 반환한다.")]),e._v(" "),o("p",[e._v("ES2021 이전에는 replaceAll 메서드가 없어 replace 와 정규식을 이용하여 사용했다.")]),e._v(" "),o("pre",[e._v("      "),o("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("// replace()\nconst p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';\n\nconsole.log(p.replace('dog', 'monkey'));\n// expected output: \"The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?\"\n\nconst regex = /Dog/ig;\nconsole.log(p.replace(regex, 'ferret'));\n// expected output: \"The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?\"\n\n// replaceAll()\nconst p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';\n\nconsole.log(p.replaceAll('dog', 'monkey'));\n// expected output: \"The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?\"\n\n// global flag required when calling replaceAll with regex\nconst regex = /Dog/ig;\nconsole.log(p.replaceAll(regex, 'ferret'));\n// expected output: \"The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?\"")]),e._v("\n    ")]),e._v(" "),o("p",[e._v("( * i : 대소문자 구분 없이 * g : 전역으로 검색 )")]),e._v(" "),e._m(0),e._v(" "),o("h2",[e._v("Promise.any()")]),e._v(" "),o("p",[e._v("동시에 실행되는 Promise 중 하나가 처리되면 해당 Promise 가 return 된다.")]),e._v(" "),o("p",[e._v("반복가능한 promises 중에 모든 Promise 가 reject 인 경우 그룹화 된 Promise 의 하위 클래스인 AggregateError(하나의 작업에서 여러 오류를 반환해야 하는 경우의 유형) return")]),e._v(" "),o("pre",[e._v("      "),o("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const promise1 = Promise.reject(0);\nconst promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));\nconst promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));\n\nconst promises = [promise1, promise2, promise3];\n\nPromise.any(promises).then((value) => console.log(value));\n\n// expected output: \"quick\"")]),e._v("\n    ")]),e._v(" "),e._m(1),e._v(" "),o("h2",[e._v("Numeric separators ( 숫자 구분 기호 _ )")]),e._v(" "),o("p",[e._v("'_' 를 숫자 사이에 삽입할 수 있다. ( 입력해도 수치로 인식 )")]),e._v(" "),o("p",[e._v("10진수 + 8진수, 16진수 및 2진수에서도 사용 가능")]),e._v(" "),o("p",[e._v("( TypeScript의 버전 2.7부터 사용 가능 )")]),e._v(" "),o("pre",[e._v("      "),o("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("// const value = 100000000;\nconst value = 100_000_000;\nconst octalValue  = 0o32_12;\nconst hexValue    = 0xff_55_00;\nconst binaryValue = 0b1010_1011_1111;")]),e._v("\n    ")]),e._v(" "),o("h2",[e._v("Logical OR assignment (||=)")]),e._v(" "),o("pre",[e._v("      "),o("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("let foo;\nfoo ||= 'bar';\nconsole.log(foo) // bar\n\nfoo ||= 'baz';\nconsole.log(foo) // bar")]),e._v("\n    ")]),e._v(" "),o("h2",[e._v("Logical AND assignment (&&=)")]),e._v(" "),o("pre",[e._v("      "),o("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("let foo;\nfoo &&= 'bar';\nconsole.log(foo) // undefined (no assignment because foo is falsy)\n\nfoo = 10;\n\nfoo &&= 'baz';\nconsole.log(foo) // baz")]),e._v("\n    ")]),e._v(" "),o("h2",[e._v("Logical nullish assignment (??=)")]),e._v(" "),o("p",[e._v("null or undefined 일때 할당")]),e._v(" "),o("pre",[e._v("      "),o("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("let foo;\nfoo ??= 'bar';\nconsole.log(foo) // bar\n\nfoo = false;\n\nfoo ??= 'baz';\nconsole.log(foo) // bar (No assignment because foo is not nullish)")]),e._v("\n    ")])])}),[function(){var e=this,o=e._self._c;return o("p",[e._v("[Code] "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#try_it",target:"_blank"}},[e._v("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#try_it")])])},function(){var e=this,o=e._self._c;return o("p",[e._v("[Code] "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#try_it",target:"_blank"}},[e._v("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#try_it")])])}],!1,null,null,null);o.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{491:function(e,t,n){"use strict";n.r(t);var o={name:"ES2022"},l=n(14),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ES2022"}},[t("h1",[e._v("# ES2022")]),e._v(" "),t("h2",[e._v("인덱싱 가능한 값의 메서드 .at()")]),e._v(" "),t("p",[e._v("이 함수는 주어진 인덱스에서 요소를 읽어 반환한다.")]),e._v(" "),t("p",[e._v("음수 적용 가능 ( 뒤에서 읽음 )")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const _arr = [1, 2, 3, 4, 5];\nconsole.log(_arr.at(2))   // 3\nconsole.log(_arr.at(-2))  // 4")]),e._v("\n    ")]),e._v(" "),t("h2",[e._v("Object.hasOwn(obj, key)")]),e._v(" "),t("p",[e._v("Object.hasOwnProperty() 를 대체")]),e._v(" "),t("p",[e._v("key가 obj 객체의 자체 속성인지 확인하는 안전한 방법")]),e._v(" "),t("p",[e._v("속성이 상속되거나 존재하지 않는 경우 메서드는 false를 반환")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("const object1 = {\n  prop: 'exists'\n};\n\nconsole.log(Object.hasOwn(object1, 'prop'));\n// expected output: true\n\nconsole.log(Object.hasOwn(object1, 'toString'));\n// expected output: false\n\nconsole.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));\n// expected output: false")]),e._v("\n    ")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Top-level await")]),e._v(" "),t("p",[e._v("비동기 함수나 메서드를 입력할 필요없이 최상위 모듈에서 await를 사용 가능")]),e._v(" "),t("h2",[e._v("Class Fields ( Class public Instance Fields & private Instance Fields )")]),e._v(" "),t("p",[e._v("ES2022 이전 버전에서의 클래스 속성 정의")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("class ButtonToggle extends HTMLElement {\n  constructor(){\n      super();\n      // public field\n      this.color = 'green'\n      // private field\n      this._value = true;\n  }\n\n  toggle(){\n      this.value = !this.value\n  }\n}\n\nconst button = new ButtonToggle();\nconsole.log(button.color);\n// green - public fields are accessible from outside classes\n\nbutton._value = false;\nconsole.log(button._value);\n// false - no error thrown, we can access it from outside the class")]),e._v("\n    ")]),e._v(" "),t("p",[e._v("ES2022")]),e._v(" "),t("pre",[e._v("      "),t("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"javascript"},[e._v("class ButtonToggle extends HTMLElement {\n\n  color = 'green';\n  #value = true;\n\n  toggle(){\n      this.#value = !this.#value;\n  }\n}\nconst button = new ButtonToggle();\nconsole.log(button.color);\n// green - public fields are accessible from outside classes\n\n// SyntaxError - cannot be accessed or modified from outside the class\nconsole.log(button.#value);\nbutton.#value = false;")]),e._v("\n    ")]),e._v(" "),t("p",[e._v("constructor 내부에서 field 를 정의할 필요가 없고, # 을 붙여 private field 를 정의 할 수 있다.")])])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("[Code] "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn",target:"_blank"}},[e._v("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn")])])}],!1,null,null,null);t.default=component.exports}}]);
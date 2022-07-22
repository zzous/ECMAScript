<template>
  <div>
    <h1># ES2022</h1>
    <h2>인덱싱 가능한 값의 메서드 .at()</h2>
    <p>이 함수는 주어진 인덱스에서 요소를 읽어 반환한다.</p>
    <p>음수 적용 가능 ( 뒤에서 읽음 )</p>
    <pre>
      <code v-highlight class="javascript">const _arr = [1, 2, 3, 4, 5];
console.log(_arr.at(2))   // 3
console.log(_arr.at(-2))  // 4</code>
    </pre>

    <h2>Object.hasOwn(obj, key)</h2>
    <p>Object.hasOwnProperty() 를 대체</p>
    <p>key가 obj 객체의 자체 속성인지 확인하는 안전한 방법</p>
    <p>속성이 상속되거나 존재하지 않는 경우 메서드는 false를 반환</p>
    <pre>
      <code v-highlight class="javascript">const object1 = {
  prop: 'exists'
};

console.log(Object.hasOwn(object1, 'prop'));
// expected output: true

console.log(Object.hasOwn(object1, 'toString'));
// expected output: false

console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
// expected output: false</code>
    </pre>
    <p>[Code] <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn</a></p>

    <h2>Top-level await</h2>
    <p>비동기 함수나 메서드를 입력할 필요없이 최상위 모듈에서 await를 사용 가능</p>

    <h2>Class Fields ( Class public Instance Fields &amp; private Instance Fields )</h2>
    <p>ES2022 이전 버전에서의 클래스 속성 정의</p>
    <pre>
      <code v-highlight class="javascript">class ButtonToggle extends HTMLElement {
  constructor(){
      super();
      // public field
      this.color = 'green'
      // private field
      this._value = true;
  }

  toggle(){
      this.value = !this.value
  }
}

const button = new ButtonToggle();
console.log(button.color);
// green - public fields are accessible from outside classes

button._value = false;
console.log(button._value);
// false - no error thrown, we can access it from outside the class</code>
    </pre>
    <p>ES2022</p>
    <pre>
      <code v-highlight class="javascript">class ButtonToggle extends HTMLElement {

  color = 'green';
  #value = true;

  toggle(){
      this.#value = !this.#value;
  }
}
const button = new ButtonToggle();
console.log(button.color);
// green - public fields are accessible from outside classes

// SyntaxError - cannot be accessed or modified from outside the class
console.log(button.#value);
button.#value = false;</code>
    </pre>
    <p>constructor 내부에서 field 를 정의할 필요가 없고, # 을 붙여 private field 를 정의 할 수 있다.</p>
  </div>
</template>

<script>
export default {
  name: 'ES2022'
}
</script>

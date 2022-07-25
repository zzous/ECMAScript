<template>
  <div id="ES2020">
    <h1># ES2020</h1>
    <h2>Dynamic Import</h2>
    <p>동적으로 module 을 가져올 수 있게 되어, await 와 함께 사용할 수 있다.</p>
    <pre>
      <code v-highlight class="javascript">// module.js
const example = (value) => console.log(value);
export { example };

// in page
const doExample = async (value) => {
  const _module = await import('module.js');
  _module.example(value);
};
doExample('test');</code>
    </pre>

    <h2>Private Variables in Class</h2>
    <p>Class 내에서 개인 변수 선언 가능 ( 외부에서는 사용 할 수 없음 )</p>
    <pre>
      <code v-highlight class="javascript">class MyClass {
  #privateVariable = "Hello world"

  helloWorld() {
    console.info(this.#privateVariable)
  }
}

const myClass = new MyClass();
myClass.helloWorld();     // Hello world
console.info(myClass.#privateVariable)  // SyntaxError</code>
    </pre>

    <h2>Optional Chaining</h2>
    <p>?. 연산자는 . 체이닝 연산자와 유사하게 작동하지만, 참조가 nullish ( null 또는 undefined ) 라면, 에러가 발생하는 것 대신에 undefined 리턴</p>
    <pre>
      <code v-highlight class="javascript">const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined</code>
    </pre>
    <p>[Code] <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining</a></p>

    <h2>Promise.allSettled</h2>
    <p><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled</a></p>

    <h2>String.prototype.matchAll()</h2>
    <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll</a></p>

    <h2>globalThis</h2>
    <p><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis</a></p>

    <h2>BigInt</h2>
    <p><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt</a></p>

    <h2>Nullish Coalescing Operator</h2>
    <p>nullish 병합 연산자 (??) 는 왼쪽이 null or undefined 인경우 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽을 반환한다. ( false or NaN 의 경우는 해당 안됨 )</p>
    <pre>
      <code v-highlight class="javascript">const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0</code>
    </pre>
    <p>[Code] <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator</a></p>
  </div>
</template>

<script>
export default {
  name: 'ES2020'
}
</script>

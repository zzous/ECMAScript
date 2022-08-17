<template>
  <div id="ES2019">
    <h1># ES2019</h1>
    <h2>Object.fromEntries()</h2>
    <p>Object.fromEntries() 메서드는 키값 쌍의 목록을 객체로 바꾼다.</p>
    <pre>
      <code v-highlight class="javascript">const entries = [
  ['foo', 'bar'],
  ['baz', 42]
];

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }</code>
    </pre>
    <p>[Code] <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries</a></p>

    <h2>trimStart() and trimEnd()</h2>
    <p>trimStart() 메서드는 문자열 시작부분의 공백을 제거</p>
    <p>trimEnd() 메서드는 문자열 끝부분의 공백을 제거</p>
    <p>trim() 메서드는 문자열 양 끝의 공백을 제거</p>
    <pre>
      <code v-highlight class="javascript">const greeting = '   Hello world!   ';

console.log(greeting.trimStart());
// expected output: "Hello world!   ";

console.log(greeting.trimEnd());
// expected output: "   Hello world!";

console.log(greeting.trim());
// expected output: "Hello world!";</code>
    </pre>

    <h2>Array.prototype.flat() and Array.prototype.flatMap()</h2>
    <p>flat() 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성</p>
    <p>flatMap() 메서드는 배열에 대한 결합된 병합 및 매핑 동작. 결과를 단일 배열로 병합</p>
    <p><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap</a></p>
    <pre>
      <code v-highlight class="javascript">[1, 2, 3, 4, 5].map(data => [data * 2, data * 3]);
// [[2, 3], [4, 6], [6, 9], [8, 12], [10, 15]]

[1, 2, 3, 4, 5].map(data => [data * 2, data * 3]).flat();
// [2, 3, 4, 6, 6, 9, 8, 12, 10, 15];

[1, 2, 3, 4, 5].flatMap(data => [data * 2, data * 3]);
// [2, 3, 4, 6, 6, 9, 8, 12, 10, 15]</code>
    </pre>

    <h2>Symbol.prototype.description</h2>
    <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description</a></p>
  </div>
</template>

<script>
export default {
  name: 'ES2019'
};
</script>

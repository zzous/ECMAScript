<template>
  <div id="ES2021">
    <h1># ES2021</h1>

    <h2>String.prototype.replaceAll()</h2>
    <p>replaceAll() 메서드는 패턴의 모든 일치 항목이 대체 항목으로 대체된 새 문자열을 반환한다.</p>
    <p>ES2021 이전에는 replaceAll 메서드가 없어 replace 와 정규식을 이용하여 사용했다.</p>
    <pre>
      <code v-highlight class="javascript">// replace()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/ig;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

// replaceAll()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"</code>
    </pre>
    <p>( * i : 대소문자 구분 없이 * g : 전역으로 검색 )</p>
    <p>[Code] <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#try_it" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#try_it</a></p>

    <h2>Promise.any()</h2>
    <p>동시에 실행되는 Promise 중 하나가 처리되면 해당 Promise 가 return 된다.</p>
    <p>반복가능한 promises 중에 모든 Promise 가 reject 인 경우 그룹화 된 Promise 의 하위 클래스인 AggregateError(하나의 작업에서 여러 오류를 반환해야 하는 경우의 유형) return</p>
    <pre>
      <code v-highlight class="javascript">const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"</code>
    </pre>
    <p>[Code] <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#try_it" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any#try_it</a></p>

    <h2>Numeric separators ( 숫자 구분 기호 _ )</h2>
    <p>'_' 를 숫자 사이에 삽입할 수 있다. ( 입력해도 수치로 인식 )</p>
    <p>10진수 + 8진수, 16진수 및 2진수에서도 사용 가능</p>
    <p>( TypeScript의 버전 2.7부터 사용 가능 )</p>
    <pre>
      <code v-highlight class="javascript">// const value = 100000000;
const value = 100_000_000;
const octalValue  = 0o32_12;
const hexValue    = 0xff_55_00;
const binaryValue = 0b1010_1011_1111;</code>
    </pre>

    <h2>Logical OR assignment (||=)</h2>
    <pre>
      <code v-highlight class="javascript">let foo;
foo ||= 'bar';
console.log(foo) // bar

foo ||= 'baz';
console.log(foo) // bar</code>
    </pre>
    <h2>Logical AND assignment (&&=)</h2>
    <pre>
      <code v-highlight class="javascript">let foo;
foo &&= 'bar';
console.log(foo) // undefined (no assignment because foo is falsy)

foo = 10;

foo &&= 'baz';
console.log(foo) // baz</code>
    </pre>
    <h2>Logical nullish assignment (??=)</h2>
    <p>null or undefined 일때 할당</p>
    <pre>
      <code v-highlight class="javascript">let foo;
foo ??= 'bar';
console.log(foo) // bar

foo = false;

foo ??= 'baz';
console.log(foo) // bar (No assignment because foo is not nullish)</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ES2021'
};
</script>

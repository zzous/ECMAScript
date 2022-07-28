<template>
  <div>
    <h1># Map / Reduce / Filter</h1>
    <p>
      <nuxt-link to="/#ES2015">
        ES6 (ES2015)
      </nuxt-link> 에 추가된 methods
    </p>
    <h2>Array.prototype.map()</h2>
    <p>배열 내의 모든 요소들에 대해 주어진 함수의 결과값 들을 배열로 반환</p>
    <pre>
      <code v-highlight class="javascript">const _array = [1, 2, 3, 4, 5];

const _map = _array.map(item => item * 2);

console.log(_map); // [2, 4, 6, 8, 10]</code>
    </pre>

    <p>구문</p>
    <pre>
      <code v-highlight class="javascript">arr.map(callback(currentValue[, index[, array]])[, thisArg])</code>
    </pre>
    <p>callback</p>
    <p class="indent">
      <span class="box">currentValue</span> value
    </p>
    <p class="indent">
      <span class="box">index (Optional)</span> index
    </p>
    <p class="indent">
      <span class="box">array (Optional)</span> map()을 호출한 배열
    </p>
    <p class="indent">
      <span class="box">thisArg (Optional)</span> callback을 실행할 때 this로 사용되는 값.
    </p>
    <p>[참조] <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map</a></p>

    <h2>Array.prototype.filter()</h2>
    <p>주어진 함수의 조건을 만족하는 모든 요소를 새로운 배열로 반환</p>
    <pre>
      <code v-highlight class="javascript">const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]</code>
    </pre>

    <p>구문</p>
    <pre>
      <code v-highlight class="javascript">arr.filter(callback(element[, index[, array]])[, thisArg])</code>
    </pre>
    <p>callback (내부 함수) : 해당 함수의 return 값이 true / false 의 값만 갖는다 ( map() 의 내부 함수에서는 여러 타입의 return 값을 갖는다 )</p>
    <p class="indent">
      <span class="box">element</span> value
    </p>
    <p class="indent">
      <span class="box">index</span>
    </p>
    <p class="indent">
      <span class="box">thisArg</span> 원본 배열
    </p>
    <pre>
      <code v-highlight class="javascript">const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word, index, thisArg) => {
  console.log('word : ', element, 'index : ', index, thisArg);
  return element.length > 6;
})</code>
    </pre>
    <p>return 값이 모두 false 이면 [] 빈 배열을 반환</p>
    <h3>Polyfill</h3>
    <pre>
      <code v-highlight class="javacript">if (!Array.prototype.filter) {
  Array.prototype.filter = function (func, thisArg) {
    'use strict';
    if ( !((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined) {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          if (func(t[i], i, t)) {
            res[c++] = t[i];
          }
        }
      }
    } else {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          if (func.call(thisArg, t[i], i, t)) {
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}</code>
    </pre>
    <p>[Code] <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%ED%8F%B4%EB%A6%AC%ED%95%84" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#%ED%8F%B4%EB%A6%AC%ED%95%84</a></p>
  </div>
</template>

<script>
export default {
  name: 'MAP',
  layout: 'blog'
}
</script>

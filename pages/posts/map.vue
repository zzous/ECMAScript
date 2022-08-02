<template>
  <div>
    <CommonScrollTop />
    <h1># Map / Reduce / Filter</h1>
    <p>
      <nuxt-link to="/#ES2015">
        ES6 (ES2015)
      </nuxt-link> 에 추가된 methods
    </p>
    <h2 id="map">
      Array.prototype.map()
    </h2>
    <p>배열 내의 모든 요소들에 대해 주어진 함수의 결과값 들을 배열로 반환</p>
    <pre>
      <code v-highlight class="javascript">const _array = [1, 2, 3, 4, 5];

const _map = _array.map(item => item * 2);

console.log(_map); // [2, 4, 6, 8, 10]</code>
    </pre>

    <h3>구문</h3>
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

    <h3>map() 활용</h3>
    <p>HOF (high order function, 고차함수) : 함수를 반환하거나 함수를 인수로 사용하는 함수</p>
    <pre>
      <code v-highlight class="javascript">const _arr = [1, 2, 3, 4, 5]
const _double = item => item * 2;
const result = _arr.map(_double);
// 함수를 인수로 사용하고 있다. ( HOF )
console.log(result); // [2, 4, 6, 8, 10]</code>
    </pre>

    <p>특정 요소의 값만 가져오기</p>
    <pre>
      <code v-highlight class="javascript">const _arr = [
  { name: 'tomas', gender: 'male', age: '18' },
  { name: 'cyndi', gender: 'female', age: '22' },
  { name: 'louis', gender: 'male', age: '35' },
  { name: 'natasha', gender: 'female', age: '35' }
]
const _name = _arr.map(item => item.name);
console.log(_name) // ['tomas', 'cyndi', 'louis', 'natasha']</code>
    </pre>

    <p>Object.entries() 를 이용한 object 순회</p>
    <pre>
      <code v-highlight class="javascript">const _obj = {
        name: 'louis',
        nickname: 'gaga'
}

const _newArr = Object.entries(_obj);
console.log(_newArr) // [['name', 'louis'], ['nickname', 'gaga']]</code>
    </pre>

    <p>특정 요소 재정의</p>
    <pre>
      <code v-highlight class="javascript">const activePage = 'about'; // this.$route.path 등으로 받아온 현재 페이지
const navigation = [
  { name: 'home', isActive: false },
  { name: 'about', isActive: false },
  { name: 'blog', isActive: false }
];
const activeNav = navigation.map(item => {
  item.isActive = (item.name === activePage) ? true : false
  return {...item};
});
console.log(activeNav) // [{name: 'home', isActive: false}, {name: 'about', isActive: true}, {name: 'blog', isActive: false}]</code>
    </pre>

    <h2 id="reduce">
      Array.prototype.reduce()
    </h2>
    <p>배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환</p>
    <h3>구문</h3>
    <pre>
      <code v-highlight class="javascript">arr.reduce(callback[, initialValue])</code>
    </pre>
    <h3>매개변수</h3>
    <p><span class="box">callback</span> 배열의 각 요소에 대해 실행할 함수</p>
    <p class="indent">
      <span class="box">accumulator</span> 누산기
    </p>
    <p class="indent">
      <span class="box">currentValue</span> 현재 값
    </p>
    <p class="indent">
      <span class="box">currentIndex</span> index
    </p>
    <p class="indent">
      <span class="box">array</span> reduce()를 호출한 배열
    </p>
    <p><span class="box">initialValue</span> 초기값</p>
    <p>[참조] <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce</a></p>

    <pre>
      <code v-highlight class="javascript">const _arr = [1, 2, 3, 4, 5];
const _sum = _arr.reduce((acc, cur) => acc + cur);
console.log(_sum) // 15

const _sum10 = _arr.reduce((acc, cur) => acc + cur, 10);
console.log(_sum10) // 25

const _empty = []
const _sumX = _empty.reduce((acc, cur) => acc + cur) // TypeError</code>
    </pre>
    <p>initialValue ( 초기값 ) 설정이 없으면 최초 currentValue (1) 가 initialValue 로 설정된다.</p>
    <p>빈 배열.reduce() 를 호출할 경우 initialValue 설정이 없으면(?) TypeError</p>

    <h3>reduce() 활용</h3>
    <p>나이 합산</p>
    <pre>
      <code v-highlight class="javascript">const member = [
  { name: 'tomas', gender: 'male', age: 18 },
  { name: 'cyndi', gender: 'female', age: 22 },
  { name: 'louis', gender: 'male', age: 35 },
  { name: 'natasha', gender: 'female', age: 35 }
]
const sumAge = member.reduce((acc, cur) => acc + cur.age, 0); // Object 로 이루어진 배열에 대해서는 반드시 initialValue 를 지정해야 한다.
console.log(sumAge); // 110</code>
    </pre>
    <p>중첩 배열 합치기</p>
    <pre>
      <code v-highlight class="javascript">const _arr = [[1, 2], [3, 4], [5, 6]];
const _concat = _arr.reduce((acc, cur) => acc.concat(cur));
console.log(_concat); // [1, 2, 3, 4, 5, 6] </code>
    </pre>

    <p>속성으로 배열 분류하기</p>
    <pre>
      <code v-highlight class="javascript">const member = [
  { name: 'tomas', gender: 'male', age: 18 },
  { name: 'cyndi', gender: 'female', age: 22 },
  { name: 'louis', gender: 'male', age: 35 },
  { name: 'natasha', gender: 'female', age: 35 }
]
// gender 속성으로 분류하기
const gender = member.reduce((acc, cur) => {
  const _key = cur.gender;
  if (!acc[_key]) acc[_key] = [];
  acc[_key].push(cur);
  return acc;
}, {})
console.log(gender)
// {
//   male: [
//     {name: 'tomas', gender: 'male', age: 18},
//     {name: 'louis', gender: 'male', age: 35}
//   ],
//   female: [
//     {name: 'cyndi', gender: 'female', age: 22},
//     {name: 'natasha', gender: 'female', age: 35}
//   ]
// } </code>
    </pre>

    <h2 id="filter">
      Array.prototype.filter()
    </h2>
    <p>주어진 함수의 조건을 만족하는 모든 요소를 새로운 배열로 반환</p>
    <pre>
      <code v-highlight class="javascript">const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]</code>
    </pre>

    <h3>구문</h3>
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

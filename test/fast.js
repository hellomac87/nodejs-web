'use strict';
// Destructuring
// 비구조화 대상에는 object, array 가 있음

// 구조화된 자료
const obj = {
    title: 'node.js',
    value: '올인원 패키지'
};

const arr = [0, 1, 2, 3];

// 구조분해 할당
const { title, value } = obj;
const [, a, b] = arr;
console.log(title, value);
console.log(a,b);

// 예전 방식
// const title = obj.title;
// const value = obj.value;

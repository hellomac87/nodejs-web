'use strict';

// find, includes

const arr = ['node.js','올인원'];

// 해당 조건의 데이터 리턴
const ret = arr.find(key => key === '올인원');

// 해당 데이터가 포함되어있는지 여부
const res = arr.includes('node.js');

console.log(ret);
console.log(res);

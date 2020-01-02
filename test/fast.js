'use strict';

const arr = ['node.js','올인원'];

// filter

const newArr = arr.filter(data => data==='node.js');

console.log(newArr);

// map
// 기존의 배열이나 객체에서 새로운 데이터를 가공해야 하는 경우

const mapArr = arr.map(item => {
    title: item
})

console.log(mapArr);

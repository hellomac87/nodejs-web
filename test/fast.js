'use strict';

// Object.assign vs spread

const obj = {
    title: 'node.js 올인원 패키지'
}

const newObj = {
    name: '패스트캠퍼스'
}

// 객체를 하나로 합칠때
// Object.assign

const ret = Object.assign({}, obj, newObj);

// 가독성 
const spreadRet = {
    ...obj,
    ...newObj
}

// 객체 뿐만 아니라 Array type 에서도 활용 가능

const arr = [1,2,3]; 
const newArr = [4,5,6]; 

const spreadArr = [
    ...arr,
    ...newArr
]

console.log(ret);
console.log(spreadRet);
console.log(spreadArr);

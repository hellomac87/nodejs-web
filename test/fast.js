'use strict';

let string = 'node.js 올인원 패키지';

let isStartWith = string.startsWith('n');

let isIncludes = string.includes('ㅁㄴㅇ');

let isEndWith = string.endsWith('지');

// console.log({isStartWith,isIncludes,isEndWith});
const checkIfContains = () => {
    if((isStartWith || isIncludes) && isEndWith){
        return true;
    }
}

const ret = checkIfContains();

console.log(ret);

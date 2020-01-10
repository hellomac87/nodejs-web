'use strict';

// hoisting
console.log(var1);

// let var1 = 'r';
var var1 = 'r';


fn();

function fn(){
    console.log('fn');
}

// var 는 미리 선언하지 않아도 전역변수로 선언되기 때문에
// 나중에 선언되더라도 코드의 최상단에 선언된것 처럼 실행한다.
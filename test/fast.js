'use strict';
// Generator

// generator 에서는 arrow function을 사용할 수 없다
function* log(){
    console.log(0, yield);
    console.log(1, yield);
    console.log(2, yield);
}

const gen = log();

gen.next('zero');
gen.next('one');
gen.next('two');

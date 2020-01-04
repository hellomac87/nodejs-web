'use strict';

const test = new Set();

test.add(1);
test.add(1);
test.add(2);
test.add(3);
test.add(4);

console.log(test);
console.log(typeof test);

for(const item of test){
    console.log(item);
}

const ret = test.has(2);

console.log(ret);

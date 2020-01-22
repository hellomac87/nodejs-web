'use strict';

// timeout?: number 는 최소 지연(보장)시간을 의미한다
// 정확한 시간을 의미하지 않음(외부 변수에 의해)

const timeoutObj = setTimeout(() => {
    console.log('first');
}, 0);

const immediateObj = setImmediate(() => {
    console.log('second');
});

const intervalObj = setInterval(() => {
    console.log('third');
}, 1000);

clearTimeout(timeoutObj);
clearInterval(immediateObj);
clearImmediate(intervalObj);

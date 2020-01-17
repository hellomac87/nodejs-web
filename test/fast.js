'use strict';
// arrow fucntions practice

// Curried Function
function getDiscount (price, rate) {
    return price * rate;
}

const getDiscount = (price, rate) => price * rate;
const getTenpercentOff = 0.1;

getDiscount(10000, 0.1);

// 비율에 대해서 선언할 필요 없이 단 한번만 선언되어서
// 회원의 등급이 다양할 경우
// 한번만 비율에 대해 선언하고.

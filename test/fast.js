'use strict';
// arrow fucntions practice
// Curried Function
// Closure

/*
"use strict";

var getDiscount = function getDiscount(rate) {
  return function (price) {
    return rate * price;
  };
};
*/

const getDiscount = rate => price => price * rate;

const getTenpercentOff = getDiscount(0.1);

const ret = getTenpercentOff(10000);
console.log(ret)

// f(x) = x + 1
// g(x) = x^2
// h(x) = f(g(x))

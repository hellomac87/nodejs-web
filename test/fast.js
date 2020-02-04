"use strict";
// reduce

const numbers = [0, 1, 2, 3, 4, 5, 6];

const arr = ["pdf", "html", "html", "gif", "gif", "gif"];

// 과제
// arr 배열 내에 file type 이 몇번 반복되었는지 객체를 반환하는 코드

const res = numbers.reduce(
  (total, amount) => {
    if (amount > 0) total.push(amount);
    return total;
  },
  [] //초기값
);

console.log(res);

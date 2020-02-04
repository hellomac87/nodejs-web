"use strict";
// reduce

const numbers = [0, 1, 2, 3, 4, 5, 6];

const arr = ["pdf", "pdf", "html", "html", "gif", "gif", "gif"];

// 과제
// arr 배열 내에 file type 이 몇번 반복되었는지 객체를 반환하는 코드

const myAnswer = arr.reduce((acc, fileType) => {
  if (!acc[fileType]) {
    acc[fileType] = 1;
  } else {
    acc[fileType] += 1;
  }
  return acc;
}, {});

const answer = arr.reduce((acc, fileType) => {
  acc[fileType] = (acc[fileType] || 0) + 1;
  return acc;
}, {});

const res = numbers.reduce(
  (total, amount) => {
    if (amount > 0) total.push(amount);
    return total;
  },
  [] //초기값
);

console.log(answer);

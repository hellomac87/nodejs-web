// IIFE
(function fn(){
    var confidential = 'this is secret';
    console.log('IIFE');
})();
// 외부에서 해당 함수의 변수나 객체에 대한 접근 통제
// console.log(confidential);
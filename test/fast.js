'use strict';

// static method
// class 를 생성하지 않고 class 내부에 바로 접근하여 함수를 실행할 수 있다.

class test {
    constructor(){
        this.config = {};
    }

    fn(){}

    static call(){
        // staic method 내에서는 constructor 에서 생성된 객체에 접근할 수 없다.
        console.log('static method');
    }
}

// class 에서 생성자 없이 바로 호출 가능하다.
test.call();
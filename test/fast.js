// ex) 은행 이체, transaction,
// race condition 에 의해서 비정상작동 하는 경우가 있어서는 안됨

let total = 0;

async function getTotal() {
  return total;
}

async function setTotal(value) {
  return value;
}

async function increament(value, inc) {
  return value + inc;
}

async function add() {
  let current, newValue;
  current = await getTotal();
  newValue = await increament(current, 20);
  await setTotal(newValue);
}

async function main() {
  let transaction1, transaction2;

  // 두개의 조건이 경쟁상태에 있음
  transaction1 = add();
  transaction2 = add();

  await transaction1;
  await transaction2;

  console.log(await getTotal());
}

main();

// class 로 해결
// 경쟁상태를 만들지 않겠다.
class Lock {
  constructor() {
    this._locked = false;
    // queu, 대기할 수 있는 자료구조
    this._waiting = [];
  }

  lock() {
    // 잠그는 과정과
    // 푸는 과정이 존재
    const unlock = () => {
      let nextResolve;
      if (this._waiting.length > 0) {
        nextResolve = this._waiting.pop(0);
        nextResolve(unlock);
      } else {
        this._locked = false;
      }
    };

    if (this._locked) {
      return new Promise(resolve => {
        this._waiting.push(resolve);
      });
    }
  }
}

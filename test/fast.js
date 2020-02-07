const co = require("co");

co(function*() {
  const a = Promise.resolve(1);
  const b = Promise.resolve(2);
  const c = Promise.resolve(3);

  // const res =  Promise.all([a, b, c]);
  const res = yield [a, b, c];
  console.log(res);
}).catch(err => {
  console.log(err);
});

co(function*() {
  try {
    yield Promise.reject(new Error("error"));
  } catch (error) {
    console.error(error);
  }
});

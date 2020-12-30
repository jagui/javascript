let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    console.log(`called slow with ${x}`);
    return x * this.someMethod();
  },
};

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) return cache.get(x);
    const result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

console.log(worker.slow(1));

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(2));

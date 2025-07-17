function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fib = fibonacci();

for (let index = 0; index < 10; index++) {
  console.log("dentro del ciclo: ", fib.next().value);
}

console.log(fib.next().value);
console.log(fib.next().value);

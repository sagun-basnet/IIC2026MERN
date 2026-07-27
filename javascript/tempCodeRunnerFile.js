function addNumber(a, b) {
  if (a <= 0) {
    return 0;
  }
  const res = a + b;
  return res;
}

console.log(addNumber(0, 10));
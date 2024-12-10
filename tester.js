function getIdentityMatrix(n) {
  return Array.from(new Array(n).keys()).reduce((a, c) => {
    const arr = new Array(n);
    arr.fill(0);
    arr[c - 1] = 1;
    a.push(arr)
    return a
  }, []);
}

console.log(getIdentityMatrix(2));

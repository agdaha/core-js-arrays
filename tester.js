function findLongestIncreasingSubsequence(nums) {
  const r = nums.reduce(
    (a, c) => {
      const obj = a;
      if (obj.prev < c) {
        obj.prev = c;
        obj.cnt += 1;
      } else {
        obj.prev = c;
        obj.cnt = 1;
      }
      obj.max = Math.max(a.max, a.cnt);
      return a;
    },
    { prev: Number.MAX_VALUE, max: Number.MIN_VALUE, cnt: 1 }
  );
  return r.max;
}

console.log(
  findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])
);

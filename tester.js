function insertItem(arr, item, index) {
  const h = arr.slice(index);
  arr.splice(index, arr.length - index);
  arr.push(item);
  arr.push(...h);
}

arr = [ 1, 'b', 'c']

insertItem(arr, 'x', 0)
console.log(arr);

let theArray = [1, 2, 3, 4, 5, 6, 744, 34, 5, 67, 87, 12, 65, 29];

function maxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const max = maxNumber(theArray);
console.log(max);

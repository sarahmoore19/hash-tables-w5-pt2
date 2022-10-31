function maxSubArr(arr) {
let min = arr[0];
let max = arr[0];
let count = 0;
let highestCount = 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === min + 1 || arr[i] === min) {
      max = arr[i];
    }

    else if (arr[i] === max - 1 || arr[i] === max) {
        min = arr[i];
    }

    else {
      if (count > highestCount) highestCount = count;
      count = 0;
      min = arr[i];
      max = arr[i];
    }

    count++;
  }
  return count > highestCount ? count : highestCount;

}

console.log(maxSubArr([1,3,2,2,5,2,3,7]));  // => 5 because the longest subarray is [3,2,2,2,3]
console.log(maxSubArr([1,1,1,1,3]));// => 4 because the longest subarray is [1,1,1,1]

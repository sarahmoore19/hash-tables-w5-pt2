function coinChange(arr, n) {
let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let coin = arr[i];
    let amount = n - (n % coin);
    sum += (amount / coin);
    n-= amount;
  }
  return n === 0 ? sum : -1;
}

const coins = [1, 5, 10, 25];
const coins2 = [5];

console.log(coinChange(coins, 99));      // 2
console.log(coinChange(coins2, 3));      // -1
console.log(coinChange(coins2, 0));      // 0


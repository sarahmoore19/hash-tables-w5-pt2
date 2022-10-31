function longest(palindrome) {
  let obj = {};
  let sum = 0;
  let highestOdd = 0;
  for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i] in obj) obj[palindrome[i]]++;
    else obj[palindrome[i]] = 1;
  }

  for (let key in obj) {
    if (!(obj[key] % 2)) sum+= obj[key];
    else if (obj[key] > highestOdd) highestOdd = obj[key];
  }
  return sum + highestOdd;
}

console.log(longest("abbccccdd")) // 9
// sum of all even numbers, longest odd Number;

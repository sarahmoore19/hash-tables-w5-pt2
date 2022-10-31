function longestSubstr(str) {
let count = 0;
let highestCount = 0;
let set = new Set;
 for (let i = 0; i < str.length; i++) {

  if (set.has(str[i])) {
    if (count > highestCount) highestCount = count;

    count = 0;
    set = new Set;

  }
    set.add(str[i])
    count++;
 }

 return count > highestCount ? count : highestCount;
}

console.log(longestSubstr("abcabcbb"));    // => 3, where the longest substring is "abc"
console.log(longestSubstr("abcdebcaqrs")); // 6

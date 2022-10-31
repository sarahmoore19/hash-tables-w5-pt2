function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) obj[str1[i]] = 1;
    else obj[str1[i]]++;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) return false;
    else obj[str2[i]]--;
  }
  for (let key in obj) {
    if (obj[key]) return false;
  }
  return true;
}
// 0(n) time complexity 0(n) space complexity

function commonElements(arr1, arr2) {
  let set = new Set;
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      newArr.push(arr2[i])
      set.delete(arr2[i])
    }
  }
  return newArr;
}
// 0(n) time complexity 0(n) space complexity


function duplicate(arr) {
  let set = new Set;
  for (let ele of arr){
    if (set.has(ele)) return ele;
    set.add(ele);
  }
}


function twoSum(nums, target) {
  let set = new Set;
  for (let num of nums) {
  if (set.has(target - num)) return true;
  set.add(num);
  }
  return false;
}

function wordPattern(pattern, strings) {
  let obj = {};
  let set = new Set;

  for (let i = 0; i < pattern.length; i++) {
    if (!obj[pattern[i]]) {

      if (set.has(strings[i])) return false;

      obj[pattern[i]] = strings[i];
      set.add(strings[i])
    }

    if (obj[pattern[i]] !== strings[i]) return false;

  }
  return true;
}



module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];

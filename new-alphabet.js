function newAlphabet(str, alphabet) {
  let obj = {};
  for (let i = 0; i < alphabet.length; i++) {
    obj[alphabet[i]] = i;
  }

  for (let i = 0; i < str.length - 1; i++) {
    if (obj[str[i]] > obj[str[i + 1]]) return false;
  }
  return true;
}

console.log(newAlphabet('leetcode', 'labefghijkmnpqrstucvowxdyz'));

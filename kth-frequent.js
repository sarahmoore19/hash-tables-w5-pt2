function kth(str, k) {
    let obj = {};
    let high = -Infinity;
    let set = new Set;

      for (let i = 0; i < str.length; i++) {
        if (str[i] in obj) obj[str[i]]++;
        else obj[str[i]] = 1;
      }

      for (let key in obj) {
        set.add(obj[key]);
        if (obj[key] > high) high = obj[key];
      }

      while (k > 1) {
        high--;
        if (set.has(high)) {
          k--;
        }
      }

      for (let key in obj) {
        if (obj[key] === high) high = key;
      }
      return high;
    }

console.log(kth('aaaaaabbcc', 2))

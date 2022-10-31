class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {

    let curr = this.data[this.hashMod(key)]
    if (!curr) {
    this.data[this.hashMod(key)] = new KeyValuePair(key, value);
    this.count++;
   // if ((1 / this.capacity) * this.count > .7) this.resize();
    return;
    }

    if (curr.key === key) {
      curr.value = value;
      return;
    }

    while (curr.next) {
      if (curr.next.key === key) {
        curr.next.value = value;
        return;
      }
      curr = curr.next;
    }

    let prevPair = this.data[this.hashMod(key)]
    let newPair = new KeyValuePair(key, value);
    newPair.next = prevPair;
    this.data[this.hashMod(key)] = newPair;
    this.count++;
    // if ((1 / this.capacity) * this.count > .7) this.resize();
  }


  read(key) {
    let curr = this.data[this.hashMod(key)];
    if (!curr) return undefined;

    if (curr.key === key) return curr.value;

    while (curr.next) {
      if (curr.next.key === key) return curr.next.value;
      curr = curr.next;
    }

    return undefined;
  }


  resize() {
    let copy = [...this.data];
    this.capacity*= 2;
    this.data = Array(this.capacity).fill(null);
    this.count = 0;

    copy.forEach((ele) => {
    if (ele !== null) {
      this.insert(ele.key, ele.value);

      let curr = ele;
      while (curr.next) {
      this.insert(curr.next.key, curr.next.value);
      curr = curr.next;
    }
    }
    })

  }
  

  delete(key) {
    let curr = this.data[this.hashMod(key)];
    if (!curr) return "Key not found"

    if (curr.key === key) {
      this.data[this.hashMod(key)] = curr.next;
      this.count--;
      return;
    }

    while(curr.next) {
      if (curr.next.key === key) {
        curr.next = curr.next.next;
        this.count--;
        return
      }
      curr = curr.next;
    }

    return "Key not found"
  }
}

module.exports = HashTable;

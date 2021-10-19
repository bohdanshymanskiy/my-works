class CustomArray {
  constructor(...options) {
    this.arr = options
  }
  push(item) {
    this.arr[this.arr.length] = item;
    return this
  }
  pop() {
    this.arr = this.arr.slice(0, this.arr.length - 1)
    return this
  }
  forEach(callback) {
    var array = this.arr
    for (var i = 0; i < array.length; i++) {
      callback(array[i])
    }
  }
  map(callback) {
    let length = this.arr.length;
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(callback(this.arr[i]))
    }
    this.arr = array;
    return this
  }
  filter(callback) {
    let length = this.arr.length;
    let array = [];
    for (let i = 0; i < length; i++) {
      if (callback(this.arr[i])) {
        array.push(this.arr[i])
      }
    }
    this.arr = array;
    return this
  }
  find(callback) {
    let length = this.arr.length;
    for (let i = 0; i < length; i++) {
      if (callback(this.arr[i])) {
        return this.arr[i]
      }
    }
  }
  some(callback) {
    let length = this.arr.length;
    for (let i = 0; i < length; i++) {
      if (callback(this.arr[i])) {
        return true
      }
    }
    return false
  }
  everyt(callback) {
    let length = this.arr.length;
    for (let i = 0; i < length; i++) {
      if (!callback(this.arr[i])) {
        return false
      }
    }
    return true
  }
}

const array = new CustomArray(11, 12, '30', 4)

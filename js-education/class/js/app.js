class CustomArray {
  constructor(...options) {
    this.arr = options
  }
  push(...item) {
    var length = this.arr.length
    for (let i = 0; i < item.length; i++) {
      this.arr[length + i] = item[i];
    }
    return this
  }
  pop() {
    return this.arr[this.arr.length - 1]
  }
  forEach(callback, arr) {
    var array = this.arr
    for (var i = 0; i < array.length; i++) {
      callback.call(arr, array[i], i, array)
    }
  }
  map(callback) {
    let length = this.arr.length;
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(callback(this.arr[i], i, this.arr))
    }
    this.arr = array;
    return this
  }
  filter(context, callback) {
    let length = this.arr.length;
    let array = [];
    for (let i = 0; i < length; i++) {
      if (callback(context, this.arr[i], i, this.arr)) {
        array.push(this.arr[i])
      }
    }
    this.arr = array;
    return this
  }
  find(callback) {
    let length = this.arr.length;
    for (let i = 0; i < length; i++) {
      if (callback.call(this.arr[i], i, this.arr)) {
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
  every(callback) {
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
console.log(array.forEach(item => console.log(item)));


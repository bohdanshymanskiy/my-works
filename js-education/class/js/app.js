class CustomArray {
  constructor(...options) {
    this.arr = options
  }
  push(...item) {
    let length = this.arr.length
    for (let i = 0; i < item.length; i++) {
      this.arr[length + i] = item[i];
    }
    return this.arr.length
  }
  pop() {
    let item = this.arr[this.arr.length - 1]
    this.arr.length = this.arr.length - 1;
    return item;
  }
  forEach(callback) {
    let array = this.arr
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array)
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
  filter(callback, context) {
    let length = this.arr.length;
    let array = [];
    for (let i = 0; i < length; i++) {
      if (callback.call(context, this.arr[i], i, this.arr)) {
        array.push(this.arr[i])
      }
    }
    this.arr = array;
    return this
  }
  find(callback) {
    let array = this.arr
    let length = this.arr.length;
    let value;
    for (let i = 0; i < length; i++) {
      value = array[i]
      if (callback(value, i, array)) {
        return value;
      }
    }
  }
  some(callback) {
    let length = this.arr.length;
    for (let i = 0; i < length; i++) {
      if (callback(this.arr[i], i, this.arr)) {
        return true
      }
    }
    return false
  }
  every(callback) {
    let length = this.arr.length;
    for (let i = 0; i < length; i++) {
      if (!callback(this.arr[i], i, this.arr)) {
        return false
      }
    }
    return true
  }
}


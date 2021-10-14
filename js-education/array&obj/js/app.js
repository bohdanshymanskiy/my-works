let array = [1, 1, 6, 5, 73]
function Average(arr) {
  let sortArray = arr.filter((el, i) => i % 2 === 0 && el % 2 === 1)
  return sortArray.reduce((acc, curr) => acc + curr) / sortArray.length
}

function getAverage(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 === 1) {
      sum += arr[i]
      count++
    }
  }
  return sum / count;
}
let check = [
  { name: 'Продукт', amount: 3, price: 140 },
  { name: 'Продукт', amount: 5, price: 180 },
]

function getSum(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue.price, 0)
}

function formattedArray(arr) {
  return arr.map(item => Object.values(item))
}

let ob = { a: 'asd', asd: [1, 2, 3], bret: 'qwe', bta: 123 }

function filterObject(obj) {
  return Object.fromEntries(Object.entries(obj).filter(item => item[0].includes('a') || item[1].includes('a')))
}


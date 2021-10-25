let array = [1, 1, 6, 5, 73, 73]
function Average(arr) {
  let count = 0
  let sum = arr.reduce((acc, curr, index) => {
    if (index % 2 === 0 && curr % 2 === 1) {
      acc += curr
      count++
    }
    return acc
  }, 0)
  return sum / count
}


function getAverage(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
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
  return arr.reduce((acc, { amount, price } = currentValue) => acc + amount * price, 0)
}




function formattedArray(arr) {
  return arr.reduce((acc, [name, amount, price] = currentValue) => {
    acc.push({ name, amount, price })
    return acc;
  }, [])
}




let ob = { a: 'asd', asd: [1, 2, 3], bret: 'qwe', bta: 123 }

function filterObject(obj) {
  return Object.fromEntries(Object.entries(obj).filter(item => item[0].includes('a')))
}


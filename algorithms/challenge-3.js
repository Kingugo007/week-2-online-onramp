function increment(arr, value) {
    arr.map((number) => {
      number.val = number.val + value;
    })
  
     return arr
  }

module.exports = increment

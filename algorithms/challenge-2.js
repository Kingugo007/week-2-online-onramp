function numSwap(number) {
  let numArr = [];
  number = number.toString().split("");
  for (let i = 0; i <= number.length; i++) {
    let newNum = number.splice(0, 2).reverse().join("");
    numArr.push(newNum);
  }
  return parseInt(numArr.join(""));
}

module.exports = numSwap;

function missingNumber(numArr) {
  let missingArr = [];
  let a = 9; // Math.max(...numArr);
  let b = 1; //Math.min(...numArr);

  for (let i = b; i <= a; i++) {
    if (numArr.indexOf(i) < 0) {
      missingArr.push(i);
    }
  }
  if (missingArr.length === 1) {
    return missingArr[0];
  }
  if (missingArr.length <= 0) {
    missingArr = false;
  }
  return missingArr;
}

module.exports = missingNumber;

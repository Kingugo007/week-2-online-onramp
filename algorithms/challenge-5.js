function arraySum(arr1, arr2) {
  let sum = [];
  let firstLength = arr1.length;
  let secondLength = arr2.length;

  for(let i = 0; i<firstLength; i++){
      sum[i] = arr1[i] + arr2[i % secondLength];
  }

  return sum;
}

module.exports = arraySum

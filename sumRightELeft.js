// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.


arr = [1, 2, 3, 4, 3, 2, 1];

function sumAllSides(arr) {
  let rightSum = 0;
  let leftSum = 0;

  for (let index = 0; index < arr.length; index += 1) {
    for (let index2 = index + 1; index2 < arr.length; index2 += 1) {
      rightSum += arr[index2];
    }
    for (let index3 = index - 1; index3 >= 0; index3 -= 1) {
      leftSum += arr[index3];
    }
    if (rightSum === leftSum) {
      return index;
    }
      rightSum = 0;
      leftSum = 0;
  }

  return -1;
}

console.log(sumAllSides([1, 2, 3, 4, 3, 2, 1]));

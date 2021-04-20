// You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

// As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

// Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

function countAdjacentPairs(searchString) {
  let count = 0;
  let newArr = searchString.split(" ");
  for (let index = 1; index < newArr.length; index += 1) {
    let indexLeft = index - 1;
    if (
      index === 1 &&
      newArr[index].toLowerCase() === newArr[indexLeft].toLowerCase()
    ) {
      count += 1;
    } else if (
      index > 1 &&
      newArr[index].toLowerCase() === newArr[indexLeft].toLowerCase() &&
      newArr[index].toLowerCase() !== newArr[indexLeft - 1].toLowerCase()
    ) {
      count += 1;
    }
  }
  return count;
}

console.log(
  countAdjacentPairs(
    "banana banana banana terracotta banana terracotta terracotta pie!"
  )
);

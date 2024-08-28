function findMultiplesOf3And5(num, sum = 0) {
  if (num - 1 === 3) {
    return (sum += num - 1);
  }
  let three = (num - 1) % 3 === 0;
  let five = (num - 1) % 5 === 0;
  if (three || five) {
    sum += num - 1;
    return findMultiplesOf3And5(num - 1, sum);
  } else {
    return findMultiplesOf3And5(num - 1, sum);
  }
}
console.log(findMultiplesOf3And5(1000));

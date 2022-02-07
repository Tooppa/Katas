let sumOfTheNumbers = 0;
let sumOfTheSquares = 0;
for (let i = 1; i <= 100; i++) {
    sumOfTheSquares += Math.pow(i, 2);
    sumOfTheNumbers += i;
}
console.log(
    "Sum of the number squared: " +
    Math.pow(sumOfTheNumbers, 2) +
    ", \nsum of the squares of the numbers: " +
    sumOfTheSquares +
    " \nthe diffrence is: " +
    (Math.pow(sumOfTheNumbers, 2) - sumOfTheSquares)
);
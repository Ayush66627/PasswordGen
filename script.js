const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);
const evens = numbers.filter(number => number % 2 === 0);
const sum = function(accumulator, current){
    return accumulator + current;
}
const sumofEven = numbers.reduce(sum)

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens);   // [2, 4]
     // 15
console.log(sumofEven);
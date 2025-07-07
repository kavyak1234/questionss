// 1. Add two numbers, return "Even" or "Odd"
function evenOrOdd(num1, num2) {
    return (num1 + num2) % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(4, 6));   

// 2. Uppercase or lowercase based on number
function modifyString(num, str) {
    return num > 10 ? str.toUpperCase() : str.toLowerCase();
}
console.log(modifyString(15, "hello")); 

// 3. Adult or Minor message
function checkAge(name, age) {
    return age >= 18 ? `${name} is an adult` : `${name} is a minor`;
}
console.log(checkAge("John", 17)); 

// 4. Multiply three numbers, conditionally return product
function conditionalProduct(a, b, c) {
    const product = a * b * c;
    return product > 100 ? product : "Too small";
}
console.log(conditionalProduct(5, 5, 5));

// 5. Divisible by both 3 and 5
function isDivisibleBy3And5(num) {
    return num % 3 === 0 && num % 5 === 0;
}
console.log(isDivisibleBy3And5(15));

// 6. Add or subtract based on string
function calculate(num1, num2, operation) {
    return operation === "add" ? num1 + num2 : num1 - num2;
}
console.log(calculate(10, 5, "subtract"));
// 7. Return data type of longer value
function longerType(val1, val2) {
    const str1 = val1.toString();
    const str2 = val2.toString();
    return str1.length > str2.length ? typeof val1 : typeof val2;
}
console.log(longerType(12345, "abc"));  

// 8. Square if even, cube if odd
function squareOrCube(num) {
    return num % 2 === 0 ? num ** 2 : num ** 3;
}
console.log(squareOrCube(3));   

// 9. Sum array using loop, add 10
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum + 10;
}
console.log(sumArray([1, 2, 3]));  

// 10. Non-empty string starts with uppercase
function isValidString(str) {
    return typeof str === "string" && str.length > 0 && str[0] === str[0].toUpperCase();
}
console.log(isValidString("Apple")); 

// 11. Repeat string n times
function repeatString(str, num) {
    return str.repeat(num);
}
console.log(repeatString("Hi", 3));
// 12. Positive, Negative, or Zero  
function numberType(num) {
    if (num > 0) return "Positive";
    if (num < 0) return "Negative";
    return "Zero";
}

console.log(numberType(-7)); 
// 13. Boolean opposite
function booleanOpposite(val) {
    return typeof val === "boolean" ? !val : val;
}
console.log(booleanOpposite(true)); 
// 14. Senior citizen or dog years
function seniorOrDogYears(name, age) {
    return age > 60 ? `${name} is a senior citizen` : age * 7;
}
console.log(seniorOrDogYears("Mike", 65));

// 15. Strict equality check
function strictEquality(val1, val2) {
    return val1 === val2 ? "Same" : "Different";
}
console.log(strictEquality(5, "5"));

// 16. Largest of three numbers
function largestOfThree(a, b, c) {
    return a > b && a > c ? a : (b > c ? b : c);
}
console.log(largestOfThree(3, 9, 7));

// 17. Count vowels in string
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));

// 18. Swap two values, return object
function swapValues(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return { a, b };
}
console.log(swapValues(10, 20)); 
// 19. Check number and return square root
function squareRootIfNumber(val) {
    return typeof val === "number" ? Math.sqrt(val) : val;
}
console.log(squareRootIfNumber(16)); 
// 20. Ternary operator for valid range
function validateRange(num) {
    return num >= 1 && num <= 100 ? "Valid" : "Invalid";
}
console.log(validateRange(150));  
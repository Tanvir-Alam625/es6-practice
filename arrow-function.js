// one parameter and dividing 
const numberDividing = (number) => number /5;
// console.log(numberDividing(50));
// tow parameters and add the tow and multiply the tow parameter
const multiplyAddition = (firstNumber, secondNumber) =>(firstNumber + 2) * (secondNumber +2);
// console.log(multiplyAddition(10,5));  
// three parameters and then multiply the three parameter
const multiped = (first, second, third)=> first*second*third;
// console.log(multiped(2,2,2));
// tow parameters and add the tow and multiply the tow parameter in multi line
const multiplyAdditionMultiLine = (first, second) =>{
    const firstValue = first + 2;
    const secondValue = second + 2;
    let result = firstValue * secondValue;
    return result;
}
console.log(multiplyAdditionMultiLine(2,3));

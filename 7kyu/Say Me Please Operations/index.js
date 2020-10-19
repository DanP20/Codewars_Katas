/*
  Title:
    Say Me Please Operations

  Description:
    You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers.

    Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"

    The available operations are (in this order of preference):

    1) addition
    2) subtraction
    3) multiplication
    4) division
    Notes:

    All input data is valid
    The number of numbers in the input string >= 3
    For a case like "2 2 4" - when multiple variants are possible - choose the first possible operation from the list (in this case "addition")
    Integer division should be used
    Example
    "9 4 5 20 25"  -->  "subtraction, multiplication, addition"
    Because:

    9 - 4 = 5   --> subtraction
    4 * 5 = 20  --> multiplication
    5 + 20 = 25 --> addition

  Kata Link:
    https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/javascript
  
*/

// Solution

function sayMeOperations(str) {
    let numbers= str.split(' ')
     let operations = []
    
    for (let i = 2;  i < numbers.length; i++) {
      if ( +numbers[i-2] + +numbers[i-1] == numbers[i]) {
     operations.push('addition') 
    } else if (numbers[i-2] - numbers[i-1] == numbers[i]) {
     operations.push('subtraction') 
    } else if (numbers[i-2] * numbers[i-1] == numbers[i]) {
     operations.push('multiplication') 
    }  else 
     operations.push('division') 
    
  }
  return operations.join(', ');
  }
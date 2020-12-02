/*
  Title:
    Max-min arrays

  Description:
  In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

  Kata Link:
    https://www.codewars.com/kata/5a090c4e697598d0b9000004
*/

// Solution
function solve(arr){
    let highest = [...arr].sort(function(a,b) {return a-b})
    let lowest = [...arr].sort(function(a,b) {return b-a})
    let result = []
    
    lowest.forEach((number, index) => {
    result.push(number)
    result.push(highest[index])
    
    })
    return result.slice(0, result.length/2)
    };
     
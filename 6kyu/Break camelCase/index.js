/*
  Title:
    Break camelCase

  Description:
    Complete the solution so that the function will break up camel casing, using a space between words.

    Example:
    solution("camelCasing")  ==  "camel Casing"

  Kata Link:
    https://www.codewars.com/kata/5208f99aee097e6552000148
  
*/

// Solution

function solution(string) {
    let newString = ''
  
    for (let i = 0; i < string.length; i++) {  
      let char = string.slice(i, i+1)
      
      if (char === char.toUpperCase()) {
        newString += ' '+char
      } else {
        newString += char
      }
    }
    return newString;
}